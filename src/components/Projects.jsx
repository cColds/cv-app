import { Component } from "react";
import PropTypes from "prop-types";

export default class Projects extends Component {
  render() {
    const { isFormOpen, toggleForm, setForm, projects, addItem } = this.props;
    const { project, technologies, description, startDate, endDate } =
      projects.addForm;

    return (
      <section className="projects section">
        <h2 className="heading">Projects</h2>
        <div className="content-container">
          <div className="item">
            <div className="main-info">
              <h3>
                <strong>Tic Tac Toe</strong> |
                <span>
                  <i> Git, React, MongoDB, NodeJS, and Express</i>
                </span>
              </h3>
              <div>Description</div>
            </div>
            <div className="side-info">
              <div>May 2020 – Sep. 2022</div>
            </div>
          </div>

          <button
            type="button"
            name="projects"
            onClick={toggleForm}
            className={isFormOpen ? "hide" : ""}
          >
            Add Projects
          </button>

          <form
            name="projects"
            className={isFormOpen ? "" : "hide"}
            onSubmit={(e) => {
              e.preventDefault();
              toggleForm(e);
              addItem(e);
            }}
          >
            <label htmlFor="projects-name">
              Project Name
              <input
                id="projects-name"
                placeholder="Tic Tac Toe"
                name="project projects"
                onChange={setForm}
                value={project}
              />
            </label>
            <label htmlFor="projects-technologies">
              Technologies
              <input
                id="projects-technologies"
                placeholder="Git, React, MongoDB"
                name="technologies projects"
                onChange={setForm}
                value={technologies}
              />
            </label>
            <label htmlFor="projects-start-date">
              Start Date
              <input
                id="projects-start-date"
                placeholder="May 2020"
                name="startDate projects"
                onChange={setForm}
                value={startDate}
              />
            </label>
            <label htmlFor="projects-end-date">
              End Date
              <input
                id="projects-end-date"
                placeholder="Sep. 2022"
                name="endDate projects"
                onChange={setForm}
                value={endDate}
              />
            </label>
            <label htmlFor="projects-description">
              Description
              <textarea
                id="projects-description"
                rows="10"
                cols="30"
                name="description projects"
                onChange={setForm}
                value={description}
              />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      </section>
    );
  }
}

Projects.propTypes = {
  isFormOpen: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
  projects: PropTypes.shape({
    addForm: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};
