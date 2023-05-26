import { Component } from "react";
import PropTypes from "prop-types";

export default class Skills extends Component {
  render() {
    const { isFormOpen, toggleForm } = this.props;

    return (
      <section className="skills section">
        <h2 className="heading">Skills</h2>
        <div className="content-container">
          <div className="item">
            <div className="main-info">
              <h3>
                <strong>Frameworks:</strong> React, Angular, and NextJS
              </h3>
            </div>
          </div>

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
            }}
          >
            <label htmlFor="skills-technologies">
              Technologies
              <input
                id="skills-technologies"
                placeholder="Git, React, and MongoDB"
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
};
