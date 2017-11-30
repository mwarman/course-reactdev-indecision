class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing three', 'Thing four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
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

  handlePickOption() {
    alert('randomly select option');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePickOption}>What should I do?</button>
      </div>
    );
  }

}

class Options extends React.Component {

  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.renderOptions(this.props.options)}
      </div>
    );
  }

  renderOptions(options) {
    return options.map((option) => {
      let key = options.indexOf(option);
      return <Option key={key} option={option} />;
    });
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
