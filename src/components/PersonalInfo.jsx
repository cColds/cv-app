import { Component } from "react";

export default class PersonalInfo extends Component {
  render() {
    return (
      <div className="personal-info">
        <div className="content-container">
          <div className="personal-info-preview">
            <h1>Full Name</h1>
            <h2>
              <i>Job Title</i>
            </h2>
            <div className="contact">
              <h3>123-456-7890</h3>
              <h3>example@address.com</h3>
            </div>
          </div>

          <form className="hide" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="full-name">
              Full Name
              <input id="full-name" placeholder="John Smith" />
            </label>
            <label htmlFor="phone">
              Phone
              <input
                type="tel"
                id="phone"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
            </label>
            <label htmlFor="email">
              Email
              <input id="email" placeholder="example@address.com" />
            </label>
            <label htmlFor="address">
              Address
              <input id="address" placeholder="City, Country" />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}
