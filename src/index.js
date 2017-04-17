import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './data/configureStore';
import './index.css';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={ store }>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={ history } routes={ routes } />
  </Provider>,
  document.getElementById('root')
);
