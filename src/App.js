import { Component } from "react";
import Cv from "./components/Cv";
import "./styles/css/app.css";
import "./styles/css/cv.css";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Cv />
      </div>
    );
  }
}
