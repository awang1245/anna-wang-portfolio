import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </HashRouter>
  </React.StrictMode>
);
