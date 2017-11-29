console.log('Indecision App is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const removeAllOptions = () => {
  app.options = [];
  render();
};

const makeDecision = () => {
  const randomOptionIndex = Math.floor(Math.random() * app.options.length);
  const randomOption = app.options[randomOptionIndex];
  alert(randomOption);
};

const appRoot = document.getElementById('app');

const render = () =>{
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
      <button onClick={makeDecision} disabled={app.options.length === 0}>What should I do?</button>
      <button onClick={removeAllOptions}>Remove All</button>
      <ol>
      {
        app.options.map((option) => {
          return <li key={app.options.indexOf(option)}>{option}</li>;
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
