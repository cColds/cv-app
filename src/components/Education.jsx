import { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div className="education">
        <h2 className="heading">Education</h2>
        <div className="content-container">
          <div className="preview">
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

          <button type="button">Add Education</button>

          <form className="hide" onSubmit={(e) => e.preventDefault()}>
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
      </div>
    );
  }
}
