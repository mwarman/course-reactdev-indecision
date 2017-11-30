class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      title: 'Visibility Toggle',
      visible: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visible ? 'Hide Details' : 'Show Details'}
        </button>
        <p hidden={!this.state.visible}>Here are some details that you may want to know...</p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
