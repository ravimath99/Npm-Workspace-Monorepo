import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "./Header/Header";
// import CommonStyles from "@fstr/components";

const App = () => (
  <div className="container">
    <Header />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
