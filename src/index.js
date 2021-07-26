import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.querySelector('#root'),
);