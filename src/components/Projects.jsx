import { Component } from "react";

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <h2 className="heading">Projects</h2>
                <div className="content">
                    <div className="projects-preview">
                        <div className="projects-info">
                            <h3>
                                <strong>Tic Tac Toe</strong> |
                                <span>
                                    <i>
                                        {" "}
                                        Git, React, MongoDB, NodeJS, and Express
                                    </i>
                                </span>
                            </h3>
                            <div>Description</div>
                        </div>
                        <div>May 2020 – Sep. 2022</div>
                    </div>

                    <form
                        className="projects-form hide"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label htmlFor="projects-name">
                            Project Name
                            <input
                                id="projects-name"
                                placeholder="Tic Tac Toe"
                            />
                        </label>
                        <label htmlFor="projects-technologies">
                            Technologies
                            <input
                                id="projects-technologies"
                                placeholder="Git, React, MongoDB"
                            />
                        </label>
                        <label htmlFor="projects-start-date">
                            Start Date
                            <input
                                id="projects-start-date"
                                placeholder="May 2020"
                            />
                        </label>
                        <label htmlFor="projects-end-date">
                            End Date
                            <input
                                id="projects-end-date"
                                placeholder="Sep. 2022"
                            />
                        </label>
                        <label htmlFor="projects-description">
                            Description
                            <textarea
                                id="projects-description"
                                rows="10"
                                cols="30"
                            />
                        </label>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}
