import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import './dependencies';

import AppMain from 'components/AppMain/AppMain';

import searchPageReducer from './reducers/searchPageReducer';
import cartPageReducer from './reducers/cartPageReducer';

// function customMiddleware(store) {
//   return function(dispatch) {
//     return function(action) {
//       console.log('store: ', store);
//       console.log('dispatch: ', dispatch);
//       console.log('action: ', action);

//       if (typeof action === 'function') {
//         action(dispatch);
//         return;
//       }

//       dispatch(action);
//     };
//   };
// }

// const customMiddleware = store => dispatch => action => {
//   console.log('action: ', action);
//   dispatch(action);
// };

function customMiddleware2(store) {
  return function(dispatch) {
    return function(action) {
      console.log('store: ', store);
      console.log('dispatch: ', dispatch);
      console.log('action: ', action);

      const storeData = store.getState();
      console.log('storeData: ', storeData);

      if (storeData.cartPageReducer.cartItemCount === 3 && action.type === 'ITEM_ADDED') {
        return;
      }

      dispatch(action);
    };
  };
}

const store = createStore(
  combineReducers({ searchPageReducer, cartPageReducer }),
  //   applyMiddleware(customMiddleware, logger)
  applyMiddleware(thunk, customMiddleware2, logger)
);

console.log('store: ', store);

const el = document.getElementById('app-root');
ReactDOM.render(
  <Provider store={store}>
    <AppMain day="Friday" />
  </Provider>,
  el
);
