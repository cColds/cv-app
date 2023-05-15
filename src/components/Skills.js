import { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h2 className="heading">Skills</h2>
        <div className="content">
          <div className="skills-preview">
            <div className="skills-info">
              <h3>
                <strong>Frameworks:</strong> React, Angular, and NextJS
              </h3>
            </div>
          </div>
          <form
            className="skills-form hide"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="skills-technologies">Technologies</label>
            <input
              id="skills-technologies"
              placeholder="Git, React, and MongoDB"
            />

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}
