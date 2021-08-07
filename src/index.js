import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store"
// import { render } from 'react-dom'
// import { transitions, positions, Provider as AlertProvider } from 'react-alert'
// import AlertTemplate from 'react-alert-template-basic'



ReactDOM.render(
  <BrowserRouter>
    {/* <AlertProvider template={AlertTemplate}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </AlertProvider> */}
  </BrowserRouter>

  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// {/* <Provider store={store}></Provider> */}