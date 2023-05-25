import { Component } from "react";
import PropTypes from "prop-types";

export default class Education extends Component {
  render() {
    const { toggleForm, isFormOpen } = this.props;

    return (
      <section className="education section">
        <h2 className="heading">Education</h2>
        <div className="content-container">
          <div className={`item ${isFormOpen ? "hide" : ""}`}>
            <div className="main-info">
              <h3>
                <strong>Stanford University</strong>
              </h3>
              <div>
                <i>Bachelor of Arts in Computer Science</i>
              </div>
              <div>Description</div>
            </div>
            <div className="side-info">
              <div>May 2020 – Sep. 2022</div>
              <div>Brooklyn, NY</div>
            </div>
          </div>

          <button
            type="button"
            name="education"
            onClick={toggleForm}
            className={isFormOpen ? "hide" : ""}
          >
            Add Education
          </button>

          <form
            name="education"
            className={isFormOpen ? "" : "hide"}
            onSubmit={(e) => {
              e.preventDefault();
              toggleForm(e);
            }}
          >
            <label htmlFor="school">
              School
              <input id="school" placeholder="Stanford University" />
            </label>
            <label htmlFor="degree">
              Degree
              <input
                id="degree"
                placeholder="Bachelor of Arts in Computer Science"
              />
            </label>
            <label htmlFor="education-start-date">
              Start Date
              <input id="education-start-date" placeholder="May 2020" />
            </label>
            <label htmlFor="education-end-date">
              End Date
              <input id="education-end-date" placeholder="Sep. 2022" />
            </label>
            <label htmlFor="education-description">
              Description
              <textarea id="education-description" rows="10" cols="30" />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      </section>
    );
  }
}

Education.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  isFormOpen: PropTypes.bool.isRequired,
};
