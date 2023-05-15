import { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <h2 className="heading">Experience</h2>
        <div className="content">
          <div className="experience-preview">
            <div className="job-info">
              <h3>
                <strong>Google</strong>
              </h3>
              <div>
                <i>Software Engineer</i>
              </div>
              <div>Description</div>
            </div>
            <div className="date-location">
              <div>May 2020 – Sep. 2022</div>
              <div>Brooklyn, NY</div>
            </div>
          </div>

          <form
            className="experience-form hide"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="experience-location">Location</label>
            <input id="experience-location" placeholder="Mountain View, CA" />

            <label htmlFor="experience-company">Company</label>
            <input id="experience-company" placeholder="Google" />

            <label htmlFor="experience-start-date">Start Date</label>
            <input id="experience-start-date" placeholder="May 2020" />

            <label htmlFor="experience-end-date">End Date</label>
            <input id="experience-end-date" placeholder="Sep. 2022" />

            <label htmlFor="experience-description">Description</label>
            <textarea
              id="experience-description"
              rows="10"
              cols="30"
            ></textarea>

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}
