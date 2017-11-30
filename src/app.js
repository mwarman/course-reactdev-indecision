class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.state = {
      options: ['Option One', 'Option Two', 'Option Three']
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePickOption() {
    const idx = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[idx];
    alert(option);
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
         />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }

}

class Action extends React.Component {

  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePickOption}
          disabled={!this.props.hasOptions}>
          What should I do?
        </button>
      </div>
    );
  }

}

class Options extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} option={option} />)
        }
      </div>
    );
  }

}

class Option extends React.Component {

  render() {
    return (
      <div>
        {this.props.option}
      </div>
    );
  }
}

class AddOption extends React.Component {

  handleFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }

}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
