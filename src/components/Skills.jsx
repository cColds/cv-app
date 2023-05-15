import { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h2 className="heading">Skills</h2>
        <div className="content-container">
          <div className="skills-info">
            <h3>
              <strong>Frameworks:</strong> React, Angular, and NextJS
            </h3>
          </div>

          <button type="button">Add Skills</button>

          <form className="hide" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="skills-technologies">
              Technologies
              <input
                id="skills-technologies"
                placeholder="Git, React, and MongoDB"
              />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}
