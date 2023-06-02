import { Component } from "react";
import PropTypes from "prop-types";

export default class Experience extends Component {
  render() {
    const {
      toggleAddForm,
      addItem,
      handleInputChange,
      experience,
      toggleEditForm,
      saveEdit,
      deleteItem,
    } = this.props;
    const { company, jobTitle, location, startDate, endDate, description } =
      experience.addForm;
    const { edit, editForm, isAddFormOpen } = experience;

    return (
      <section className="experience section">
        <h2 className="heading">Experience</h2>
        <div className="content-container">
          <ul className={isAddFormOpen || edit ? "hide" : ""}>
            {experience.items.map(({ item, id }) => (
              <li key={id} className="item">
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
                <div className="options">
                  <button
                    type="button"
                    data-section-key="experience"
                    onClick={(e) => {
                      toggleEditForm(e, item, id);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>Edit</title>
                      <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    data-section-key="experience"
                    onClick={(e) => {
                      deleteItem(e, id);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>Delete</title>
                      <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            data-section-key="experience"
            onClick={toggleAddForm}
            className={isAddFormOpen || edit ? "hide" : ""}
          >
            Add Experience
          </button>

          {/* EDIT */}

          <form
            className={edit ? "" : "hide"}
            data-section-key="experience"
            onSubmit={(e) => {
              e.preventDefault();
              saveEdit(e);
              toggleEditForm(e);
            }}
          >
            <label htmlFor="edit-company">
              Company
              <input
                data-section-key="experience"
                data-input-key="company"
                data-form-type="editForm"
                id="edit-company"
                placeholder="Google"
                onChange={handleInputChange}
                value={editForm.company}
              />
            </label>

            <label htmlFor="edit-job-title">
              Job Title
              <input
                data-section-key="experience"
                data-input-key="jobTitle"
                data-form-type="editForm"
                id="edit-job-title"
                placeholder="Software Engineer"
                onChange={handleInputChange}
                value={editForm.jobTitle}
              />
            </label>

            <label htmlFor="edit-experience-location">
              Location
              <input
                data-section-key="experience"
                data-input-key="location"
                data-form-type="editForm"
                id="edit-experience-location"
                placeholder="Mountain View, CA"
                onChange={handleInputChange}
                value={editForm.location}
              />
            </label>

            <label htmlFor="edit-experience-start-date">
              Start Date
              <input
                data-section-key="experience"
                data-input-key="startDate"
                data-form-type="editForm"
                id="edit-experience-start-date"
                placeholder="May 2020"
                onChange={handleInputChange}
                value={editForm.startDate}
              />
            </label>
            <label htmlFor="edit-experience-end-date">
              End Date
              <input
                data-section-key="experience"
                data-input-key="endDate"
                data-form-type="editForm"
                id="edit-experience-end-date"
                placeholder="Sep. 2022"
                onChange={handleInputChange}
                value={editForm.endDate}
              />
            </label>
            <label htmlFor="edit-experience-description">
              Description
              <textarea
                data-section-key="experience"
                data-input-key="description"
                data-form-type="editForm"
                id="edit-experience-description"
                rows="10"
                cols="30"
                onChange={handleInputChange}
                value={editForm.description}
              />
            </label>

            <button type="submit">Save</button>
          </form>

          {/* ADD */}

          <form
            data-section-key="experience"
            data-form-type="addForm"
            className={isAddFormOpen ? "" : "hide"}
            onSubmit={(e) => {
              e.preventDefault();
              toggleAddForm(e);
              addItem(e);
            }}
          >
            <label htmlFor="experience-company">
              Company
              <input
                id="experience-company"
                placeholder="Google"
                data-section-key="experience"
                data-input-key="company"
                data-form-type="addForm"
                value={company}
                onChange={handleInputChange}
              />
            </label>

            <label htmlFor="experience-job-title">
              Job Title
              <input
                id="experience-job-title"
                placeholder="Software Engineer"
                data-section-key="experience"
                data-input-key="jobTitle"
                data-form-type="addForm"
                value={jobTitle}
                onChange={handleInputChange}
              />
            </label>

            <label htmlFor="experience-location">
              Location
              <input
                id="experience-location"
                placeholder="Mountain View, CA"
                data-section-key="experience"
                data-input-key="location"
                data-form-type="addForm"
                value={location}
                onChange={handleInputChange}
              />
            </label>

            <label htmlFor="experience-start-date">
              Start Date
              <input
                id="experience-start-date"
                placeholder="May 2020"
                data-section-key="experience"
                data-input-key="startDate"
                data-form-type="addForm"
                value={startDate}
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="experience-end-date">
              End Date
              <input
                id="experience-end-date"
                placeholder="Sep. 2022"
                data-section-key="experience"
                data-input-key="endDate"
                data-form-type="addForm"
                value={endDate}
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="experience-description">
              Description
              <textarea
                id="experience-description"
                rows="10"
                cols="30"
                data-section-key="experience"
                data-input-key="description"
                data-form-type="addForm"
                value={description}
                onChange={handleInputChange}
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
  toggleAddForm: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  experience: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        fullName: PropTypes.string,
        jobTitle: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
      })
    ),
    isAddFormOpen: PropTypes.bool,
    addForm: PropTypes.objectOf(PropTypes.string),
    editForm: PropTypes.objectOf(PropTypes.string),
    edit: PropTypes.bool,
  }).isRequired,
  toggleEditForm: PropTypes.func.isRequired,
  saveEdit: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
