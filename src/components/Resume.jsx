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

      education: {
        items: [],
        addForm: {
          school: "",
          degree: "",
          startDate: "",
          endDate: "",
          location: "",
          description: "",
        },
      },

      displayForm: { personalInfo: false, experience: false, education: false },
    };

    this.setPersonalInfoForm = this.setPersonalInfoForm.bind(this);
    this.setPersonalInfoItem = this.setPersonalInfoItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.setForm = this.setForm.bind(this);
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

  setForm(e) {
    const [inputKey, sectionKey] = e.target.name.split(" ");
    const { state } = this;
    const section = state[sectionKey];
    this.setState({
      [sectionKey]: {
        ...section,
        addForm: { ...section.addForm, [inputKey]: e.target.value },
      },
    });
  }

  static getResetFormValues(objects) {
    const copy = { ...objects };
    Object.keys(copy).forEach((key) => {
      copy[key] = "";
    });

    return copy;
  }

  addItem(e) {
    const sectionKey = e.target.name;
    const { state } = this;
    const section = state[sectionKey];
    const resetFormValues = Resume.getResetFormValues(section.addForm);

    this.setState({
      [sectionKey]: {
        items: section.items.concat({
          item: { ...section.addForm },
          form: { ...section.addForm },
          id: uniqid(),
        }),
        addForm: {
          ...resetFormValues,
        },
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
    const { personalInfo, displayForm, experience } = this.state;

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
          addExperience={this.addItem}
          setExperienceForm={this.setForm}
          experience={experience}
        />
        <Education
          isFormOpen={displayForm.education}
          toggleForm={this.toggleForm}
          setEducationForm={this.setForm}
        />
        <Projects />
        <Skills />
      </div>
    );
  }
}
