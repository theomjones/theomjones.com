---
title: "What the Redux? (Part 1: The why)"
type: post
date: "2018-05-22T22:16:07.005Z"
subtitle: Understanding Redux – properly.
feature: https://cdn-images-1.medium.com/max/800/1*WcRnU2ERqYHZBKBQ0zXCvg.png
description: At a high level, Redux gives us a way to store state in one place and one place only, without it changing. This is important in the majority of applications as it helps us avoid a complete mess of sending data between components.
---

At a high level, Redux gives us a way to store state in **one** place and one place only, without it changing. This is important in the majority of applications as it helps us avoid a complete mess of sending data between components.

For a lot of people Redux looks pretty scary at first because it introduces a bunch of new terminology and looks hard to set up (there's a lot of boilerplate). At first you're probably just going to think, "Why can't I just store my state in this `{}`?". Well, you can of course - at least your state would be in one place. The beauty of Redux lies in its ability to track state over time, and its immutability.

Let's define some of those terms above.

* State: The data of your application (things that persist, or could change, e.g. the Todos in a Todo list...). We need this for our components to work.
* Immutability: Making data unchangeable and fixed. (Each time we update our state with Redux we return a new _copy_ of that state.)

## React for starters

#### A simple stateful component

Without Redux (or any application-wide state implementation) we would store state in a component. In a [classy] React component this would be in the state property (`this.state`).

Let's see what this looks like with the classic counter app (using the proposed class property syntax so that we don't have to bind `this` to the class).

```jsx
class Counter extends React.Component {
  state = {
    count: 0,
  }

  increment = () => this.setState(prevState => ({ count: prevState.count + 1 }))

  decrement = () => this.setState(prevState => ({ count: prevState.count - 1 }))

  render() {
    return (
      <div>
        <span>Count: {this.state.count}</span>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    )
  }
}
```

Ok good. We have internal component state declared in the constructor, which is used in the render method. Nothing wrong with that. If this was our whole application it's absolutely fine.

Now say we wanted to be able to define the count from another component, like an input. This is a slightly trivial example, but components controlling the data in other components is very common in applications. How would we go about doing this? The React docs talk about _lifting state_, that is bringing our state out of our Counter component and putting it in a parent component... letting us pass data into components that are siblings of Counter. Let's see this in action:

### Lifting state

First let's define an App component where we hold the state for the application, letting us use child components to manipulate it.

```js
class App extends React.Component {
  state = {
    count: 0,
  }

  render() {
    return <div />
  }
}
```

We've _lifted_ the state that holds the count into the `App` component. Now we need to refactor the counter component and add the methods to the App class to get back to where we were. We can use a _stateless functional component_ for our counter, as it will not hold state itself. We should use these wherever possible as they're cheaper than classy components.

```js
// Props count, increment and decrement are deconstructed.
const Counter = ({ count, increment, decrement }) => (
  <div>
    <span>Count: {count}</span>
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  </div>
)
```

The `Counter` component is now much simpler and is only concerned with displaying the count and the buttons. All state manipulation has been removed.
We can now put our `Counter` component into `App`'s render method.

```js
render() {
    return (
      <div>
        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
        <Input onChange={this.setInitialCount} />
      </div>
    );
  }
```

We've passed in the props we deconstructed in the `Counter` function. Accessing `this.state` is fine as we have already defined that, but we now need to put our old methods into the `App` class so we can manipulate state.

```js
// ... state = {...}
increment = () => this.setState(prevState => ({ count: prevState.count + 1 }))

decrement = () => this.setState(prevState => ({ count: prevState.count - 1 }))
// ... render()
```

We're now back where we started. Our `Counter` component controls our state which is defined - and kept - in our `App` component. However, now we can implement a new component which can also manipulate the lifted state, as a result changing the data inside `Counter`.

Don't forget, our aim here is to be able to manipulate data in one component from another.

Let's think about what we want from the new component. It's very simple, we just want an `<input />` that can change the count itself. We could just put this in the render method for `App` or even in `Counter` but we're _thinking in React_, so we want to modularise our components so they're reusable.

We will create a simple `Input` component that takes two props: `value` and `onChange`.

```js
const Input = ({ onChange, value }) => (
  <div>
    <input type="number" value={props.value} onChange={props.onChange} />
  </div>
)
```

We could also make this more reusable by passing our `type` prop in.

```js
const Input = ({ type, onChange, value }) => (
  <div>
    <input type={type} value={props.value} onChange={props.onChange} />
  </div>
)
```

As a presentational component this looks pretty useless, and we might as well have just used an `<input />` in our `App`. But this allows us to style our `Input` component, and reuse it anywhere.

We now need to use `Input` in our main component's render method. Then create a method allowing us to update state when `onChange` is called on the input.

```js
class App extends React.Component {
  state = {
    count: 0,
  }

  setCount = event => {
    const val = parseInt(event.target.value, 10)
    this.setState(() => ({ count: val }))
  }

  increment = () => this.setState(prevState => ({ count: prevState.count + 1 }))

  decrement = () => this.setState(prevState => ({ count: prevState.count - 1 }))

  render() {
    return (
      <div>
        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
        <Input onChange={this.setCount} value={this.state.count} />
      </div>
    )
  }
}
```

`Input` is now in our render method. We've also created the `setCount` method which is called when the input changes (via the `onChange` prop, passed down). We make sure to cast our `String` to an `Int` as well.

We now have three components that talk to each other via props. Our state is in one place and is on a global component (ie, we're not passing state from our `Counter` component to a sibling component via props, eugh.)

### The problem with that is...

This is workable at the moment – but what if our input was nested deeply inside another component say... `CounterController` > `Form` > `Input`. We would now have to pass our count value from `App` through 2 other components until it got to the right place. This is inefficient, and makes our logic hard to reason about (This phrase gets thrown around a lot and it's kind of one of those overused buzzwords you see on stack overflow used to confuse beginners - but it does have meaning. Essentially it means we understand exactly what our application does and how it does it. It's the opposite of this scenario: "There's a function coming from somewhere that does something to my application state, I'm not quite sure what it does, or how it does it - but it works"). We want to avoid this kind of scenario.

Handling app state inside components causes a lot of tangled streams of data flow - this will cause a headache later on, and make your app ultimately unmaintainable. _We should try to avoid passing data beyond one child._

The answer to this is to create a single accessible place to store our data. That way components can access that _one_ place, instead of
accessing each other, and not really knowing where the data came from.

The solution to this answer is Redux.
