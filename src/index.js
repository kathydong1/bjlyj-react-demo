import React from 'react';
import {render} from 'react-dom';
import './common/Css/index.less';
import App from './router';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers/state'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production' && false) {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

//注册store监听器
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

//unsubscribe();停止监听

render(
  <Provider store={store}>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </Provider>,

  document.getElementById('root'));

