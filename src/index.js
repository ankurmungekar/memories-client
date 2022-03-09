import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import reducer from './store/rootReducer';
import App from './app';
import './index.css';

const reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composed = reduxDevTools && process.env.NODE_ENV === 'development' ? compose(applyMiddleware(thunk), reduxDevTools) : compose(applyMiddleware(thunk))
const store = createStore(reducer, composed);
ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root'));