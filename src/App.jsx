import { Component } from "react";
import Resume from "./components/Resume";
import "./styles/css/app.css";
import "./styles/css/resume.css";
import "./styles/css/personal-info.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Resume />
      </div>
    );
  }
}
