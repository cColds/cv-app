import { useState } from "react";
import uniqid from "uniqid";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Resume() {
  const [state, setState] = useState({
    personalInfo: {
      items: [
        {
          item: {
            fullName: "",
            jobTitle: "",
            phone: "",
            email: "",
            address: "",
          },
          id: uniqid(),
        },
      ],
      editForm: {
        fullName: "",
        jobTitle: "",
        phone: "",
        email: "",
        address: "",
      },
      editId: "",
      edit: false,
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
    preview: false,
  });

  const getResetFormValues = (objects) => {
    const copy = { ...objects };
    Object.keys(copy).forEach((key) => {
      copy[key] = "";
    });

    return copy;
  };

  const handleInputChange = (e) => {
    const { inputKey, sectionKey, formType } = e.target.dataset;
    const section = state[sectionKey];

    setState({
      ...state,
      [sectionKey]: {
        ...section,
        [formType]: { ...section[formType], [inputKey]: e.target.value },
      },
    });
  };

  const deleteItem = (e, targetId) => {
    const { sectionKey } = e.currentTarget.dataset;
    const section = state[sectionKey];
    const updatedItems = section.items.filter((item) => item.id !== targetId);

    setState({
      ...state,
      [sectionKey]: {
        ...section,
        items: updatedItems,
      },
    });
  };

  const saveEdit = (e) => {
    const { sectionKey } = e.currentTarget.dataset;
    const section = state[sectionKey];
    const updateItems = section.items.map(({ item, id }) => {
      if (section.editId === id) {
        return { item: { ...section.editForm }, id };
      }

      return { item: { ...item }, id };
    });

    setState({ ...state, [sectionKey]: { ...section, items: updateItems } });
  };

  const addItem = (e) => {
    const { sectionKey } = e.target.dataset;
    const section = state[sectionKey];
    const resetFormValues = getResetFormValues(section.addForm);

    setState({
      ...state,
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

  const toggleEditForm = (e, item, id = "") => {
    const { sectionKey } = e.currentTarget.dataset;

    setState((prevState) => {
      const section = prevState[sectionKey];
      const updateEditForm = item || getResetFormValues(section.editForm);
      const editedItems = structuredClone({
        ...section,
        edit: !section.edit,
        editForm: { ...updateEditForm },
        editId: id,
      });
      return {
        ...prevState,
        [sectionKey]: {
          ...editedItems,
        },
      };
    });
  };

  const toggleAddForm = (e) => {
    const { sectionKey } = e.currentTarget.dataset;

    setState((prevState) => {
      const section = prevState[sectionKey];
      const { isAddFormOpen } = section;

      return {
        ...prevState,
        [sectionKey]: { ...section, isAddFormOpen: !isAddFormOpen },
      };
    });
  };

  const togglePreview = () => {
    const { preview } = state;
    setState({ ...state, preview: !preview });
  };

  const { preview, personalInfo, experience, education, projects, skills } =
    state;

  return (
    <div className="resume">
      <button
        type="button"
        className="btn-primary preview"
        onClick={togglePreview}
      >
        Preview
      </button>

      <PersonalInfo
        saveEdit={saveEdit}
        handleInputChange={handleInputChange}
        toggleEditForm={toggleEditForm}
        personalInfo={personalInfo}
        preview={preview}
      />

      <Experience
        toggleAddForm={toggleAddForm}
        addItem={addItem}
        experience={experience}
        toggleEditForm={toggleEditForm}
        handleInputChange={handleInputChange}
        saveEdit={saveEdit}
        deleteItem={deleteItem}
        preview={preview}
      />

      <Education
        toggleAddForm={toggleAddForm}
        addItem={addItem}
        education={education}
        toggleEditForm={toggleEditForm}
        handleInputChange={handleInputChange}
        saveEdit={saveEdit}
        deleteItem={deleteItem}
        preview={preview}
      />

      <Projects
        toggleAddForm={toggleAddForm}
        projects={projects}
        addItem={addItem}
        toggleEditForm={toggleEditForm}
        handleInputChange={handleInputChange}
        saveEdit={saveEdit}
        deleteItem={deleteItem}
        preview={preview}
      />

      <Skills
        toggleAddForm={toggleAddForm}
        skills={skills}
        addItem={addItem}
        toggleEditForm={toggleEditForm}
        handleInputChange={handleInputChange}
        saveEdit={saveEdit}
        deleteItem={deleteItem}
        preview={preview}
      />
    </div>
  );
}
