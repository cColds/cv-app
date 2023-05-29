import { Component } from "react";
import PropTypes from "prop-types";

export default class Projects extends Component {
  render() {
    const { isFormOpen, toggleForm, setAddForm, projects, addItem } =
      this.props;
    const { project, technologies, description, startDate, endDate } =
      projects.addForm;

    return (
      <section className="projects section">
        <h2 className="heading">Projects</h2>
        <div className="content-container">
          <ul>
            {projects.items.map(({ item, id }) => (
              <li key={id} className={`item ${isFormOpen ? "hide" : ""}`}>
                <div className="main-info">
                  <h3>
                    <strong>{item.project}</strong>
                  </h3>
                  <div>
                    <i>{item.technologies}</i>
                  </div>
                  <div>{item.description}</div>
                </div>
                <div className="side-info">
                  <div>
                    {item.startDate} {item.endDate}
                  </div>
                  <div>{item.location}</div>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            data-section-key="projects"
            onClick={toggleForm}
            className={isFormOpen ? "hide" : ""}
          >
            Add Projects
          </button>

          <form
            data-section-key="projects"
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
                data-section-key="projects"
                data-input-key="project"
                onChange={setAddForm}
                value={project}
              />
            </label>
            <label htmlFor="projects-technologies">
              Technologies
              <input
                id="projects-technologies"
                placeholder="Git, React, MongoDB"
                data-section-key="projects"
                data-input-key="technologies"
                onChange={setAddForm}
                value={technologies}
              />
            </label>
            <label htmlFor="projects-start-date">
              Start Date
              <input
                id="projects-start-date"
                placeholder="May 2020"
                data-section-key="projects"
                data-input-key="startDate"
                onChange={setAddForm}
                value={startDate}
              />
            </label>
            <label htmlFor="projects-end-date">
              End Date
              <input
                id="projects-end-date"
                placeholder="Sep. 2022"
                data-section-key="projects"
                data-input-key="endDate"
                onChange={setAddForm}
                value={endDate}
              />
            </label>
            <label htmlFor="projects-description">
              Description
              <textarea
                id="projects-description"
                rows="10"
                cols="30"
                data-section-key="projects"
                data-input-key="description"
                onChange={setAddForm}
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
  setAddForm: PropTypes.func.isRequired,
  projects: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        project: PropTypes.string,
        technologies: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    addForm: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};
