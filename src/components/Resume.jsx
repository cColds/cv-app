import { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

export default class Resume extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        item: { fullName: "", jobTitle: "", phone: "", email: "" },
        form: { fullName: "", jobTitle: "", phone: "", email: "" },
      },
    };
  }

  render() {
    const { personalInfo } = this.state;
    const { fullName } = personalInfo.form;

    return (
      <div className="resume">
        <PersonalInfo fullName={fullName} />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </div>
    );
  }
}
