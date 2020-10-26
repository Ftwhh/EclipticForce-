import React from "react";
import "../css/Contact.css";

function Contact() {
  return (
    <div id="Contact">
      <p>FOR PARTNERSHIP INQUIRIES, GET IN TOUCH VIA THE CONTACT FORM BELOW.</p>
      <form action="#" className="contact-form">
        <div className="fullname">
          <div className="form-div">
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="input"
              placeholder=" "
            />
            <label htmlFor="firstname">First Name</label>
          </div>
          <div className="form-div">
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="input"
              placeholder=" "
            />
            <label htmlFor="lastname">Last Name</label>
          </div>
        </div>
        <div className="form-div">
          <input
            type="email"
            name="email"
            id="email"
            className="input"
            placeholder=" "
          />
          <label htmlFor="email">Email Adresse</label>
        </div>
        <div className="form-div">
          <textarea
            name="message"
            id="message"
            className="input"
            placeholder=" "
          ></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
