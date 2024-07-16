import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from 'header/Header';
import { Button } from "@fstr/components";

const App = () => (
  <div className="container">
    <Header />
    <Button />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
