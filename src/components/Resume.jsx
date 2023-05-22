// eslint-disable-next-line import/no-extraneous-dependencies
import uniqid from "uniqid";
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
      experience: {
        items: [
          {
            item: {
              company: "",
              jobTitle: "",
              description: "",
              startDate: "",
              endDate: "",
              location: "",
            },
            form: {
              company: "",
              jobTitle: "",
              description: "",
              startDate: "",
              endDate: "",
              location: "",
            },
            id: uniqid(),
          },
        ],
      },

      displayForm: { personalInfo: false, experience: false },
    };

    this.setPersonalInfoForm = this.setPersonalInfoForm.bind(this);
    this.setPersonalInfoItem = this.setPersonalInfoItem.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  setExperienceForm(e) {}

  setPersonalInfoForm(e) {
    const { personalInfo } = this.state;
    const { form } = personalInfo;
    const updateForm = {
      ...form,
      [e.target.name]: e.target.value,
    };

    this.setState({
      personalInfo: {
        ...personalInfo,
        form: updateForm,
      },
    });
  }

  setPersonalInfoItem() {
    const { personalInfo } = this.state;
    const { form } = personalInfo;
    const updateItem = {
      ...form,
    };

    this.setState({
      personalInfo: {
        ...personalInfo,
        item: updateItem,
      },
    });
  }

  toggleForm(e) {
    const { displayForm } = this.state;
    const isFormOpen = displayForm[e.currentTarget.name];
    this.setState({
      displayForm: { ...displayForm, [e.currentTarget.name]: !isFormOpen },
    });
  }

  render() {
    const { personalInfo, displayForm } = this.state;

    return (
      <div className="resume">
        <PersonalInfo
          setPersonalInfoForm={this.setPersonalInfoForm}
          setPersonalInfoItem={this.setPersonalInfoItem}
          toggleForm={this.toggleForm}
          personalInfo={personalInfo}
          isFormOpen={displayForm.personalInfo}
        />
        <Experience
          isFormOpen={displayForm.experience}
          toggleForm={this.toggleForm}
        />
        <Education />
        <Projects />
        <Skills />
      </div>
    );
  }
}
