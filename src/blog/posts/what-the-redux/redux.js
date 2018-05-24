const Counter = props => (
  <div>
    <span>Count: {props.count}</span>
    <div>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  </div>
)

const Input = props => (
  <div>
    <input type="number" value={props.value} onChange={props.onChange} />
  </div>
)

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
