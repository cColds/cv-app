import { Component } from "react";
import PropTypes from "prop-types";

export default class Experience extends Component {
  render() {
    const {
      isFormOpen,
      toggleForm,
      addExperience,
      setAddExperienceForm,
      experience,
    } = this.props;
    const { company, jobTitle, location, startDate, endDate, description } =
      experience.addForm;

    return (
      <section className="experience section">
        <h2 className="heading">Experience</h2>
        <div className="content-container">
          <ul>
            {experience.items.map(({ item, id }) => (
              <li key={id} className={`item ${isFormOpen ? "hide" : ""}`}>
                <div className="main-info">
                  <h3>
                    <strong>{item.company}</strong>
                  </h3>
                  <div>
                    <i>{item.jobTitle}</i>
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
            name="experience"
            onClick={toggleForm}
            className={isFormOpen ? "hide" : ""}
          >
            Add Experience
          </button>

          <form
            name="experience"
            className={isFormOpen ? "" : "hide"}
            onSubmit={(e) => {
              e.preventDefault();
              toggleForm(e);
              addExperience();
            }}
          >
            <label htmlFor="experience-company">
              Company
              <input
                id="experience-company"
                placeholder="Google"
                name="company"
                value={company}
                onChange={setAddExperienceForm}
              />
            </label>

            <label htmlFor="experience-job-title">
              Job Title
              <input
                id="experience-job-title"
                placeholder="Software Engineer"
                name="jobTitle"
                value={jobTitle}
                onChange={setAddExperienceForm}
              />
            </label>

            <label htmlFor="experience-location">
              Location
              <input
                id="experience-location"
                placeholder="Mountain View, CA"
                name="location"
                value={location}
                onChange={setAddExperienceForm}
              />
            </label>

            <label htmlFor="experience-start-date">
              Start Date
              <input
                id="experience-start-date"
                placeholder="May 2020"
                name="startDate"
                value={startDate}
                onChange={setAddExperienceForm}
              />
            </label>
            <label htmlFor="experience-end-date">
              End Date
              <input
                id="experience-end-date"
                placeholder="Sep. 2022"
                name="endDate"
                value={endDate}
                onChange={setAddExperienceForm}
              />
            </label>
            <label htmlFor="experience-description">
              Description
              <textarea
                id="experience-description"
                rows="10"
                cols="30"
                name="description"
                value={description}
                onChange={setAddExperienceForm}
              />
            </label>

            <button type="submit">Save</button>
          </form>
        </div>
      </section>
    );
  }
}

Experience.propTypes = {
  isFormOpen: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  addExperience: PropTypes.func.isRequired,
  setAddExperienceForm: PropTypes.func.isRequired,
  experience: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        fullName: PropTypes.string,
        jobTitle: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
      })
    ),
    addForm: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
