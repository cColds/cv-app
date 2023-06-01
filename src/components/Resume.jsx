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
        isAddFormOpen: false,
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
        isAddFormOpen: false,
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
        editForm: {
          school: "",
          degree: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
        edit: false,
        editId: "",
        isAddFormOpen: false,
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

        editForm: {
          project: "",
          technologies: "",
          startDate: "",
          endDate: "",
          description: "",
        },
        edit: false,
        editId: "",
        isAddFormOpen: false,
      },

      skills: {
        items: [],
        addForm: {
          skill: "",
        },
        editForm: {
          skill: "",
        },
        edit: false,
        editId: "",
        isAddFormOpen: false,
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

    this.setState({
      personalInfo: {
        ...personalInfo,
        item: { ...editForm },
      },
    });
  };

  setInputChange = (e) => {
    const { inputKey, sectionKey, formType } = e.target.dataset;
    const { state } = this;
    const section = state[sectionKey];

    this.setState({
      [sectionKey]: {
        ...section,
        [formType]: { ...section[formType], [inputKey]: e.target.value },
      },
    });
  };

  static getResetFormValues = (objects) => {
    const copy = { ...objects };
    Object.keys(copy).forEach((key) => {
      copy[key] = "";
    });

    return copy;
  };

  saveEdit = (e) => {
    const { sectionKey } = e.currentTarget.dataset;
    const { state } = this;
    const section = state[sectionKey];
    const updateItems = section.items.map(({ item, id }) => {
      if (section.editId === id) {
        return { item: { ...section.editForm }, id };
      }

      return { item: { ...item }, id };
    });

    this.setState({ [sectionKey]: { ...section, items: updateItems } });
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

  toggleEditForm = (e, item, id = "") => {
    const { sectionKey } = e.currentTarget.dataset;

    this.setState((prevState) => {
      const section = prevState[sectionKey];
      const updateEditForm =
        item || Resume.getResetFormValues(section.editForm);
      const editedItems = structuredClone({
        ...section,
        edit: !section.edit,
        editForm: { ...updateEditForm },
        editId: id,
      });

      return {
        [sectionKey]: {
          ...editedItems,
        },
      };
    });
  };

  toggleAddForm = (e) => {
    const { sectionKey } = e.currentTarget.dataset;

    this.setState((prevState) => {
      const section = prevState[sectionKey];
      const { isAddFormOpen } = section;

      return { [sectionKey]: { ...section, isAddFormOpen: !isAddFormOpen } };
    });
  };

  render() {
    const {
      personalInfo,

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
          toggleAddForm={this.toggleAddForm}
          personalInfo={personalInfo}
        />
        <Experience
          toggleAddForm={this.toggleAddForm}
          addItem={this.addItem}
          experience={experience}
          toggleEditForm={this.toggleEditForm}
          setInputChange={this.setInputChange}
          saveEdit={this.saveEdit}
        />
        <Education
          toggleAddForm={this.toggleAddForm}
          addItem={this.addItem}
          education={education}
          toggleEditForm={this.toggleEditForm}
          setInputChange={this.setInputChange}
          saveEdit={this.saveEdit}
        />
        <Projects
          toggleAddForm={this.toggleAddForm}
          projects={projects}
          addItem={this.addItem}
          toggleEditForm={this.toggleEditForm}
          setInputChange={this.setInputChange}
          saveEdit={this.saveEdit}
        />
        <Skills
          toggleAddForm={this.toggleAddForm}
          skills={skills}
          addItem={this.addItem}
          toggleEditForm={this.toggleEditForm}
          setInputChange={this.setInputChange}
          saveEdit={this.saveEdit}
        />
      </div>
    );
  }
}
