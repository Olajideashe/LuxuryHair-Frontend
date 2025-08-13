import React from "react";
import "./Contact.css";
import { BsTelephone, BsEnvelope, BsGeoAlt } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h2>CONTACT PAGE</h2>
        <p>Home / Contact Page</p>
      </div>

      <div className="contact-info-section container">
        <div className="contact-info-box">
          <BsTelephone className="icon" />
          <h5>TALK TO US</h5>
          <p><strong>Toll-Free:</strong> 0000 - 123 - 456789</p>
          <p><strong>Fax:</strong> 0000 - 123 - 456789</p>
        </div>

        <div className="contact-info-box">
          <BsEnvelope className="icon" />
          <h5>EMAIL</h5>
          <p>mail@example.com</p>
          <p>support@example.com</p>
        </div>

        <div className="contact-info-box">
          <BsGeoAlt className="icon" />
          <h5>ADDRESS</h5>
          <p>No: 58 A, East Madison Street,</p>
          <p>Baltimore, MD, USA 4508</p>
        </div>
      </div>

      <div className="contact-form-section">
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
