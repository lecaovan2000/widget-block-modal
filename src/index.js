import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const widgetDiv = document.querySelectorAll(".reddit_widget");

widgetDiv.forEach((div) => {
  ReactDOM.render(
    <React.StrictMode>
      <App domElement={div} />
    </React.StrictMode>,
    div
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
