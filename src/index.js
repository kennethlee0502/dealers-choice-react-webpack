import React from "react";
import ReactDOM from "react-dom";
import Generator from "./components/colorChanger.js";

class App extends React.Component {
  render() {
    return <Generator />;
  }
}

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
