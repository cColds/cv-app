import { Component } from "react";
import PropTypes from "prop-types";

export default class Skills extends Component {
  render() {
    const { isFormOpen, toggleForm, setForm, skills, addItem } = this.props;
    const { skill } = skills.addForm;

    return (
      <section className="skills section">
        <h2 className="heading">Skills</h2>
        <div className="content-container">
          <ul>
            {skills.items.map(({ item, id }) => (
              <li key={id} className={`item ${isFormOpen ? "hide" : ""}`}>
                <div className="main-info">
                  <div>{item.skill}</div>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            name="skills"
            className={isFormOpen ? "hide" : ""}
            onClick={(e) => {
              e.preventDefault();
              toggleForm(e);
            }}
          >
            Add Skills
          </button>

          <form
            name="skills"
            className={isFormOpen ? "" : "hide"}
            onSubmit={(e) => {
              e.preventDefault();
              toggleForm(e);
              addItem(e);
            }}
          >
            <label htmlFor="skills-technologies">
              Skill
              <input
                id="skills-technologies"
                placeholder="Git, React, and MongoDB"
                name="skill skills"
                onChange={setForm}
                value={skill}
              />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      </section>
    );
  }
}

Skills.propTypes = {
  isFormOpen: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
  skills: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        skill: PropTypes.string,
      })
    ),
    addForm: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};
