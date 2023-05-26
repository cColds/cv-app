import { Component } from "react";
import PropTypes from "prop-types";

export default class Projects extends Component {
  render() {
    const { isFormOpen, toggleForm } = this.props;

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
            }}
          >
            <label htmlFor="projects-name">
              Project Name
              <input id="projects-name" placeholder="Tic Tac Toe" />
            </label>
            <label htmlFor="projects-technologies">
              Technologies
              <input
                id="projects-technologies"
                placeholder="Git, React, MongoDB"
              />
            </label>
            <label htmlFor="projects-start-date">
              Start Date
              <input id="projects-start-date" placeholder="May 2020" />
            </label>
            <label htmlFor="projects-end-date">
              End Date
              <input id="projects-end-date" placeholder="Sep. 2022" />
            </label>
            <label htmlFor="projects-description">
              Description
              <textarea id="projects-description" rows="10" cols="30" />
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
};
