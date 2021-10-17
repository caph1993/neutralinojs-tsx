import "./main.css";
import { App } from "./components/App";
import ReactDOM from "react-dom";
import React from "react";

Neutralino.init({
  load: () => {},
  pingSuccessCallback: () => {},
  pingFailCallback: () => {},
});

const root = document.getElementById("root");
ReactDOM.render(React.createElement(App), root);
