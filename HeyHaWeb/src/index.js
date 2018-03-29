import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<div>hello world</div>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}