import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./redux/store";
import { Provider } from "react-redux";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.scss";

// Hot Module Replacement
const rootEl = document.getElementById("root");
const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    rootEl
  );

if (module.hot) {
  module.hot.accept("./App.js", () => setTimeout(render));
}
render();
