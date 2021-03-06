import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './store/reducers/rootReducer'
import reportWebVitals from './reportWebVitals';
import { createStore, /*applyMiddleware */} from "redux";
import { Provider } from "react-redux";
// import projectAction from './store/actions/projects'
// import createSagaMiddleware from 'redux-saga'

// const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer
)
// sagaMiddleware.run(projectAction)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
