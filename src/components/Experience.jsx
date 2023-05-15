import { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <h2 className="heading">Experience</h2>
        <div className="content-container">
          <div className="preview">
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

          <div className="preview">
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

          <div className="preview">
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

          <div className="preview">
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

          <div className="preview">
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

          <div className="preview">
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

          <div className="preview">
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

          <div className="preview">
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

          <div className="preview">
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

          <div className="preview">
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

          <div className="preview">
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

          <div className="preview">
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

          <div className="preview">
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

          <form className="hide" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="experience-location">
              Location
              <input id="experience-location" placeholder="Mountain View, CA" />
            </label>
            <label htmlFor="experience-company">
              Company
              <input id="experience-company" placeholder="Google" />
            </label>
            <label htmlFor="experience-start-date">
              Start Date
              <input id="experience-start-date" placeholder="May 2020" />
            </label>
            <label htmlFor="experience-end-date">
              End Date
              <input id="experience-end-date" placeholder="Sep. 2022" />
            </label>
            <label htmlFor="experience-description">
              Description
              <textarea id="experience-description" rows="10" cols="30" />
            </label>

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}
