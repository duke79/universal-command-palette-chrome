import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import QuicklyClient from './client/QuicklyClient';
import ThemeProvider from './theming/ThemeProvider';

const getRootElement = () => {
  let rootElement = document.getElementById('rootUCP');
  if (!rootElement) {
    const divRoot = document.createElement("div"); 
    divRoot.setAttribute("id", "rootUCP");
    document.body.appendChild(divRoot);
  }
  return document.getElementById('rootUCP');
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <QuicklyClient>
        <App />
      </QuicklyClient>
    </ThemeProvider>
  </React.StrictMode>,
  getRootElement()
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
