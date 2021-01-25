import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

// Styles
import './scss/index.scss';

// Hot Module Replacement
const rootEl = document.getElementById('root');
const render = () =>
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    rootEl
  );

if (module.hot) {
  module.hot.accept('./App.js', () => setTimeout(render));
}
render();

serviceWorkerRegistration.register();
reportWebVitals();
