import { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div className="education">
        <h2 className="heading">Education</h2>
        <div className="content">
          <div className="education-preview">
            <div className="education-info">
              <h3>
                <strong>Stanford University</strong>
              </h3>
              <div>
                <i>Bachelor of Arts in Computer Science</i>
              </div>
              <div>Description</div>
            </div>
            <div className="date-location">
              <div>May 2020 – Sep. 2022</div>
              <div>Brooklyn, NY</div>
            </div>
          </div>

          <form
            className="education-form hide"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="school">School</label>
            <input id="school" placeholder="Stanford University" />

            <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              placeholder="Bachelor of Arts in Computer Science"
            />

            <label htmlFor="education-start-date">Start Date</label>
            <input id="education-start-date" placeholder="May 2020" />

            <label htmlFor="education-end-date">End Date</label>
            <input id="education-end-date" placeholder="Sep. 2022" />

            <label htmlFor="education-description">Description</label>
            <textarea id="education-description" rows="10" cols="30"></textarea>

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}
