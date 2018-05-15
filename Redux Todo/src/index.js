import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './reducers/index.js';
import * as ActionTypes from './actions/index';

ReactDOM.render(
  <Provider store={store} >
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);
