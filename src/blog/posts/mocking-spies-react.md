---
title: Jest Spies & React
date: "2018-05-27T12:18:24.737Z"
type: post
subtitle: Mocking spies in React Components
feature: https://image.freepik.com/free-icon/spy_318-64610.jpg
---

Firstly, it might be a good idea to refactor your component to be a class based component, pulling out your inline components. This makes testing a lot easier, as we can easily pass in mock functions (spies) as props.

e.g. Imagine we have an `EditExpense` components which lets you click a button which lets you edit an expense based on it's id. It is passed in the expense as a prop, so we have access to the id.

This is the SFC (stateless functional component) version.

```js
const EditExpense = ({ expense, history, match, onSubmit, onClick }) => (
  <div>
    <button onClick={event => onClick(expense.id)}>Edit Expense</button>
  </div>
)
```

Which becomes... as a class component

```js
// Export it also so we can use it without Redux
export class EditExpense extends React.Component {
  constructor(props) {
    super(props)
  }

  // Our once inline function becomes a method on the class.
  onClick = () => this.props.editExpense(this.props.expense.id)

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Save Edit</button>
      </div>
    )
  }
}

// Redux stuff down here
```

This allows us to extract out our inline functions into methods as seen above. This is a good idea because we can then pass in spies as props, and ensure the prop functions are called correctly.

We don't want to be testing with Redux at all, that's done separately when testing your action creators and reducers. This means we should make use of `mapDispatchToProps`, this way, when we're testing we bypass Redux entirely (using the named class export instead of the `default`). Let's see an example test case below.

Firstly a simple one, comparing snapshots. Jest has their own snapshot `shallow` function but it doesn't offer anything more than that – creating a snapshot. <a href="http://airbnb.io/enzyme" target="_blank">`Enzyme`</a> by AirBnB gives us a lot of methods like `find()` on the created snapshot object. This let's us call our prop methods later. Below is a simple snapshot test which is a useful first test.

## Snapshots

Snapshot tests let us compare component renders against renders at another time. It saves a file in `__snapshots__` and when the test gets run it compares the new render against that snapshot, checking if anything has changed. If it has changed – it fails. This is useful for checking against unwanted side affects in our components, say we changed something somewhere else. You can create multiple snapshots in one test, letting you check against DOM changes after a user interaction.

```js
import React from 'react'
import { shallow } from 'enzyme'
import { EditExpense } from '../../components/EditExpensePage'
// If you need some mock data get it or create it in `../fixtures/mockData` Fixtures is just a name for mock data basically.

test('should render EditExpensePage correctly', () => {
  const wrapper = shallow(<EditExpense />)
  expect(wrapper).toMatchSnapshot()
})
```

The above is all that's needed to create a snapshot test. They're simple, but incredibly useful.

Next we will create a spy to test our `editExpense` prop. We will then test it.

```js
// ^ ... React, Enzyme (shallow), Component imports, snapshot test ...^

test('Should call editExpense correctly', () => {
  // Create a spy with jest.fn()
  const editExpense = jest.fn()
  const wrapper = shallow(<EditExpense editExpense={editExpense} />)

  const id = 1 // get your id from some test data

  // consult enzyme docs for info on find()
  // this calls the prop on the components (remember it is in no way tied to Redux. This is a named export.) Call it with the exact
  // same stuff you'd call it in the real world.
  wrapper.find('button').simulate('click')

  // could also do wrapper.find('button').props('onClick')(id)

  // Check editExpense spy was called with id
  expect(editExpense).toHaveBeenCalledLastWith(id)
})
```

Remember to `mapDispatchToProps` if using redux in our Component.

```js
// pretend we've imported editExpense action creator
const mapDispatchToProps = dispatch => ({
  // implicitly returning an object.
  editExpense: id => dispatch(editExpense(id)),
})

// our undefined would be mapStateToProps if we were using redux state inside our component.
export default connect(undefined, mapDispatchToProps)(<EditExpense />)
```

Why do we `mapDispatchToProps` instead of inline functions? Because it makes it a lot easier to pass in our mock functions as props. We obviously don't call `mapDispatchToProps` in our test. We just pass in a spy as a prop. Then test against that function call.

If you're using and testing third party things like react-router's `history.push` you need to mock these as well. React router passes both `history` and `match` into your component. So if we want to test that we have pushed correctly, we can pass in a fake `history.push` and check it was called with the correct thing. e.g.

```js
let history
beforeEach(() => {
  history = { push: jest.fn() }
})

test('calls history.push correctly', () => {
  // pass in history as a rrop
  const wrapper = shallow(<YourComponent history={history} />)
  expect(history).toHaveBeenCalledLastWith('/')

  // Will check that history.push was called with '/' homepage.
})
```
