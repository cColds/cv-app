import { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

export default class Cv extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="cv">
        <PersonalInfo />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </div>
    );
  }
}
