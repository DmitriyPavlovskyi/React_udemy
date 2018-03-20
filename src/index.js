import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Root from './root/app';
import reducers from './root/reducer';

const API_KEY = 'AIzaSyD31iFmLH-V4BVq8EDTRH8rY9Xd511eqrQ';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Root />
  </Provider>
  , document.querySelector('.container'));
