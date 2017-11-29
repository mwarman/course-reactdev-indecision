console.log('Visibility App is running!');

const app = {
  title: 'Visibility Toggle',
  visible: false
};

const toggleVisibility = () => {
  app.visible = !app.visible;
  render();
};

const appRoot = document.getElementById('app');

const render = () =>{
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleVisibility}>
        {app.visible ? 'Hide Details' : 'Show Details'}
      </button>
      <p hidden={!app.visible}>Here are some details that you may want to know...</p>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
