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
        item: { fullName: "", jobTitle: "", phone: "", email: "", address: "" },
        editForm: {
          fullName: "",
          jobTitle: "",
          phone: "",
          email: "",
          address: "",
        },
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
        editForm: {
          company: "",
          jobTitle: "",
          description: "",
          startDate: "",
          endDate: "",
          location: "",
        },
        edit: false,
        editId: "",
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

      projects: {
        items: [],
        addForm: {
          project: "",
          technologies: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      },

      skills: {
        items: [],
        addForm: {
          skill: "",
        },
      },

      displayForm: {
        personalInfo: false,
        experience: false,
        education: false,
        projects: false,
        skills: false,
      },
    };
  }

  setPersonalInfoForm = (e) => {
    const { personalInfo } = this.state;
    const { editForm } = personalInfo;
    const { inputKey } = e.target.dataset;
    const updateForm = {
      ...editForm,
      [inputKey]: e.target.value,
    };

    this.setState({
      personalInfo: {
        ...personalInfo,
        editForm: updateForm,
      },
    });
  };

  setPersonalInfoItem = () => {
    const { personalInfo } = this.state;
    const { editForm } = personalInfo;
    const updateItem = {
      ...editForm,
    };

    this.setState({
      personalInfo: {
        ...personalInfo,
        item: updateItem,
      },
    });
  };

  setAddForm = (e) => {
    const { inputKey, sectionKey } = e.target.dataset;
    const { state } = this;
    const section = state[sectionKey];
    this.setState({
      [sectionKey]: {
        ...section,
        addForm: { ...section.addForm, [inputKey]: e.target.value },
      },
    });
  };

  setEditState = (e, item, id = "") => {
    const { sectionKey } = e.currentTarget.dataset;
    this.setState((prevState) => {
      const section = prevState[sectionKey];
      const editedItems = structuredClone({
        ...section,
        edit: !section.edit,
        editForm: { ...item },
        editId: id,
      });

      return {
        [sectionKey]: {
          ...editedItems,
        },
      };
    });
  };

  setEditChanges = (e) => {
    const { inputKey, sectionKey } = e.currentTarget.dataset;
    const { state } = this;
    const section = state[sectionKey];

    this.setState({
      [sectionKey]: {
        ...section,

        editForm: { ...section.editForm, [inputKey]: e.target.value },
      },
    });
  };

  setSaveEditItem = (e) => {
    const { sectionKey } = e.currentTarget.dataset;
    const { state } = this;
    const section = state[sectionKey];
    const saveEditItem = section.items.map(({ item, id }) => {
      if (section.editId === id) {
        return { item: { ...section.editForm }, id };
      }

      return { item: { ...item }, id };
    });

    this.setState({ [sectionKey]: { ...section, items: saveEditItem } });
  };

  static getResetFormValues = (objects) => {
    const copy = { ...objects };
    Object.keys(copy).forEach((key) => {
      copy[key] = "";
    });

    return copy;
  };

  addItem = (e) => {
    const { sectionKey } = e.target.dataset;
    const { state } = this;
    const section = state[sectionKey];
    const resetFormValues = Resume.getResetFormValues(section.addForm);

    this.setState({
      [sectionKey]: {
        items: section.items.concat({
          item: { ...section.addForm },
          id: uniqid(),
        }),
        addForm: {
          ...resetFormValues,
        },
        editForm: {
          ...section.editForm,
        },

        edit: false,
        editId: "",
      },
    });
  };

  toggleForm = (e) => {
    const { displayForm } = this.state;
    const { sectionKey } = e.currentTarget.dataset;
    const isFormOpen = displayForm[sectionKey];
    this.setState({
      displayForm: { ...displayForm, [sectionKey]: !isFormOpen },
    });
  };

  render() {
    const {
      personalInfo,
      displayForm,
      experience,
      education,
      projects,
      skills,
    } = this.state;

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
          addItem={this.addItem}
          setAddForm={this.setAddForm}
          experience={experience}
          setEditState={this.setEditState}
          setEditChanges={this.setEditChanges}
          setSaveEditItem={this.setSaveEditItem}
        />
        <Education
          isFormOpen={displayForm.education}
          toggleForm={this.toggleForm}
          setAddForm={this.setAddForm}
          addItem={this.addItem}
          education={education}
        />
        <Projects
          isFormOpen={displayForm.projects}
          toggleForm={this.toggleForm}
          setAddForm={this.setAddForm}
          projects={projects}
          addItem={this.addItem}
        />
        <Skills
          isFormOpen={displayForm.skills}
          toggleForm={this.toggleForm}
          setAddForm={this.setAddForm}
          skills={skills}
          addItem={this.addItem}
        />
      </div>
    );
  }
}
