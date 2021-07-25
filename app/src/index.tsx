import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { lowercase } from "common";
import { Common } from "common/types";
import { assert } from "common/assert";

const common: Common = {
  a: lowercase("Common"),
  b: 5,
};

// assert(common.a == "common", "math");

ReactDOM.render(
  <React.StrictMode>
    <App />
    {common.a}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
