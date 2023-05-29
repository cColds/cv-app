import { Component } from "react";
import PropTypes from "prop-types";

export default class Education extends Component {
  render() {
    const { toggleForm, isFormOpen, setAddForm, addItem, education } =
      this.props;
    const { school, degree, startDate, endDate, location, description } =
      education.addForm;

    return (
      <section className="education section">
        <h2 className="heading">Education</h2>
        <div className="content-container">
          <ul>
            {education.items.map(({ item, id }) => (
              <li key={id} className={`item ${isFormOpen ? "hide" : ""}`}>
                <div className="main-info">
                  <h3>
                    <strong>{item.school}</strong>
                  </h3>
                  <div>
                    <i>{item.degree}</i>
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
            data-section-key="education"
            onClick={toggleForm}
            className={isFormOpen ? "hide" : ""}
          >
            Add Education
          </button>

          <form
            data-section-key="education"
            className={isFormOpen ? "" : "hide"}
            onSubmit={(e) => {
              e.preventDefault();
              toggleForm(e);
              addItem(e);
            }}
          >
            <label htmlFor="school">
              School
              <input
                id="school"
                data-section-key="education"
                data-input-key="school"
                placeholder="Stanford University"
                value={school}
                onChange={setAddForm}
              />
            </label>
            <label htmlFor="degree">
              Degree
              <input
                id="degree"
                data-section-key="education"
                data-input-key="degree"
                placeholder="Bachelor of Arts in Computer Science"
                value={degree}
                onChange={setAddForm}
              />
            </label>

            <label htmlFor="location">
              Location
              <input
                id="location"
                data-section-key="education"
                data-input-key="location"
                placeholder="Brooklyn, NY"
                value={location}
                onChange={setAddForm}
              />
            </label>

            <label htmlFor="education-start-date">
              Start Date
              <input
                id="education-start-date"
                data-section-key="education"
                data-input-key="startDate"
                placeholder="May 2020"
                value={startDate}
                onChange={setAddForm}
              />
            </label>
            <label htmlFor="education-end-date">
              End Date
              <input
                id="education-end-date"
                data-section-key="education"
                data-input-key="endDate"
                placeholder="Sep. 2022"
                value={endDate}
                onChange={setAddForm}
              />
            </label>
            <label htmlFor="education-description">
              Description
              <textarea
                id="education-description"
                data-section-key="education"
                data-input-key="description"
                rows="10"
                cols="30"
                value={description}
                onChange={setAddForm}
              />
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
  setAddForm: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  education: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        school: PropTypes.string,
        degree: PropTypes.string,
        location: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    addForm: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
