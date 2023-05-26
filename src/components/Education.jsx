import { Component } from "react";
import PropTypes from "prop-types";

export default class Education extends Component {
  render() {
    const { toggleForm, isFormOpen, setForm, addItem, education } = this.props;
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
              addItem(e);
            }}
          >
            <label htmlFor="school">
              School
              <input
                id="school"
                name="school education"
                placeholder="Stanford University"
                value={school}
                onChange={setForm}
              />
            </label>
            <label htmlFor="degree">
              Degree
              <input
                id="degree"
                name="degree education"
                placeholder="Bachelor of Arts in Computer Science"
                value={degree}
                onChange={setForm}
              />
            </label>

            <label htmlFor="location">
              Location
              <input
                id="location"
                name="location education"
                placeholder="Brooklyn, NY"
                value={location}
                onChange={setForm}
              />
            </label>

            <label htmlFor="education-start-date">
              Start Date
              <input
                id="education-start-date"
                name="startDate education"
                placeholder="May 2020"
                value={startDate}
                onChange={setForm}
              />
            </label>
            <label htmlFor="education-end-date">
              End Date
              <input
                id="education-end-date"
                name="endDate education"
                placeholder="Sep. 2022"
                value={endDate}
                onChange={setForm}
              />
            </label>
            <label htmlFor="education-description">
              Description
              <textarea
                id="education-description"
                name="description education"
                rows="10"
                cols="30"
                value={description}
                onChange={setForm}
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
  setForm: PropTypes.func.isRequired,
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
