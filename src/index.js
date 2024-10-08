import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ElementProvider } from "./context/UserContext";
import { ElementProviderPopUp } from "./context/PopUpContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ElementProviderPopUp>
    <ElementProvider>
      <App />
    </ElementProvider>
  </ElementProviderPopUp>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
