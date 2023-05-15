import { Component } from "react";

export default class PersonalInfo extends Component {
  render() {
    return (
      <div className="personal-info">
        <div className="content">
          <div className="personal-info-preview">
            <h1>Full Name</h1>
            <h2>
              <i>Job Title</i>
            </h2>
            <div className="contact">
              <h3>1234-324-444</h3>
              <h3>example@address.com</h3>
            </div>
          </div>

          <form
            className="personal-info-form hide"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="full-name">Full Name</label>
            <input id="full-name" placeholder="John Smith" />

            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />

            <label htmlFor="email">Email</label>
            <input id="email" placeholder="example@address.com" />

            <label htmlFor="address">Address</label>
            <input id="address" placeholder="City, Country" />

            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}
