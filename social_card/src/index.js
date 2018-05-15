import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import './index.css';
import App from './App';
import image from './reducers/image_one.js';
import like from './actions/like.js';

var store = createStore(image);
export default window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
