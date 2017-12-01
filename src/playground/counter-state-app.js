class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtractOne = this.handleSubtractOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    console.log('fetching data');
    let count = localStorage.getItem('count') || 0;
    count = isNaN(parseInt(count, 10)) ? 0 : parseInt(count, 10);
    this.setState(() => ({ count }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('saving data');
      localStorage.setItem('count', this.state.count);
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  handleSubtractOne(prevState) {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleSubtractOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
