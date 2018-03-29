import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router';
import * as style from './style.scss';

// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
    {/* kick it all off with the root route */}
    {renderRoutes(routes)}
  </BrowserRouter>,
document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}