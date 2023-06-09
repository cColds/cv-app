import PropTypes from "prop-types";

export default function PersonalInfo({
  preview,
  toggleEditForm,
  personalInfo,
  saveEdit,
  handleInputChange,
}) {
  const [{ item, id }] = personalInfo.items;
  const { edit, editForm } = personalInfo;
  return (
    <section className="personal-info section">
      <div className="content-container">
        <div className={`item ${edit && !preview ? "hide" : ""}`}>
          <button
            type="button"
            data-section-key="personalInfo"
            className={`edit ${preview ? "hide" : ""}`}
            onClick={(e) => toggleEditForm(e, item, id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Edit</title>
              <path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z" />
            </svg>
          </button>

          <h1>{item.fullName}</h1>
          <h2>
            <i>{item.jobTitle}</i>
          </h2>
          <div className="contact">
            <div>
              {item.phone && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>Phone</title>
                  <path d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" />
                </svg>
              )}
              <h3>{item.phone}</h3>
            </div>
            <div>
              {item.email && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>Email</title>
                  <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
                </svg>
              )}
              <h3>{item.email}</h3>
            </div>
            <div>
              {item.address && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>Address</title>
                  <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
                </svg>
              )}
              <h3>{item.address}</h3>
            </div>
          </div>
        </div>

        <form
          data-section-key="personalInfo"
          data-form-type="editForm"
          className={edit && !preview ? "" : "hide"}
          onSubmit={(e) => {
            e.preventDefault();
            saveEdit(e);
            toggleEditForm(e);
          }}
        >
          <label htmlFor="full-name">
            Full Name
            <input
              id="full-name"
              placeholder="John Smith"
              data-section-key="personalInfo"
              data-input-key="fullName"
              data-form-type="editForm"
              onChange={handleInputChange}
              value={editForm.fullName}
            />
          </label>

          <label htmlFor="job-title">
            Job Title
            <input
              id="job-title"
              placeholder="Software Engineer"
              data-section-key="personalInfo"
              data-input-key="jobTitle"
              data-form-type="editForm"
              onChange={handleInputChange}
              value={editForm.jobTitle}
            />
          </label>

          <label htmlFor="phone">
            Phone
            <input
              type="tel"
              id="phone"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}"
              data-section-key="personalInfo"
              data-input-key="phone"
              data-form-type="editForm"
              onChange={handleInputChange}
              value={editForm.phone}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              placeholder="example@address.com"
              data-section-key="personalInfo"
              data-input-key="email"
              data-form-type="editForm"
              onChange={handleInputChange}
              value={editForm.email}
            />
          </label>
          <label htmlFor="address">
            Address
            <input
              id="address"
              placeholder="City, Country"
              data-section-key="personalInfo"
              data-input-key="address"
              data-form-type="editForm"
              onChange={handleInputChange}
              value={editForm.address}
            />
          </label>
          <button type="submit" className="btn-primary">
            Save
          </button>
        </form>
      </div>
    </section>
  );
}

PersonalInfo.propTypes = {
  saveEdit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  toggleEditForm: PropTypes.func.isRequired,
  personalInfo: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        item: PropTypes.shape({
          fullName: PropTypes.string,
          jobTitle: PropTypes.string,
          phone: PropTypes.string,
          email: PropTypes.string,
          address: PropTypes.string,
        }),
        id: PropTypes.string,
      })
    ),
    editForm: PropTypes.objectOf(PropTypes.string),
    edit: PropTypes.bool,
  }).isRequired,
  preview: PropTypes.bool.isRequired,
};
