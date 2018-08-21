import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import './dependencies';

import AppMain from 'components/AppMain/AppMain';

import searchPageReducer from './reducers/searchPageReducer';
import cartPageReducer from './reducers/cartPageReducer';

const customMiddle = store => dispatch => action => {
  console.log('customMiddle: called');
  if (typeof action === 'function') {
    action(dispatch);
    return;
  }
  if (store.getState().cartPageReducer.cartItemCount === 3 && action.type === 'ITEM_ADDED') {
    return;
  }

  dispatch(action);
};

const store = createStore(
  combineReducers({ searchPageReducer, cartPageReducer }),
  //   applyMiddleware(customMiddle)
  applyMiddleware(thunk, logger)
);

const el = document.getElementById('app-root');
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppMain day="Friday" />
    </BrowserRouter>
  </Provider>,
  el
);
