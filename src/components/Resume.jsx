// eslint-disable-next-line import/no-extraneous-dependencies
// import uniqid from "uniqid";
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
        items: [],
        addForm: {
          company: "",
          jobTitle: "",
          description: "",
          startDate: "",
          endDate: "",
          location: "",
        },
      },

      displayForm: { personalInfo: false, experience: false },
    };

    this.setPersonalInfoForm = this.setPersonalInfoForm.bind(this);
    this.setPersonalInfoItem = this.setPersonalInfoItem.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.setAddExperienceForm = this.setAddExperienceForm.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

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

  setAddExperienceForm(e) {
    const { experience } = this.state;

    this.setState({
      experience: {
        ...experience,
        addForm: { ...experience.addForm, [e.target.name]: e.target.value },
      },
    });
  }

  addExperience() {
    // TODO: update experience obj to support addForm and proper objs
    // TODO: set the concat item to the addForm state
    // TODO: clear addForm values to default after adding/submitting
    const { experience } = this.state;
    this.setState({
      experience: {
        items: experience.items.concat({
          item: { ...experience.addForm },
          form: { ...experience.addForm },
        }),
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
          addExperience={this.addExperience}
          setAddExperienceForm={this.setAddExperienceForm}
        />
        <Education />
        <Projects />
        <Skills />
      </div>
    );
  }
}
