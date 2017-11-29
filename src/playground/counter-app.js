let count = 0;

const addOne = () => {
  count++;
  render();
};
const subtractOne = () => {
  count--;
  render();
};
const reset = () => {
  count = 0;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const templateTwo = (<div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={subtractOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>);
  ReactDOM.render(templateTwo, appRoot);
};

render();
