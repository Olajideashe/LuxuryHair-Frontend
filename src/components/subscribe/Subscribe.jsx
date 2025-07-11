import React, { useState } from "react";
import "./Subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    // You can connect this to a backend or service later
    console.log("Subscribed:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="subscribe-section">
      <div className="container text-center">
        <h2 className="subscribe-title">Stay in the Know</h2>
        <p className="subscribe-subtitle">Subscribe for updates on new arrivals & offers</p>
        <form className="subscribe-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="subscribe-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
        {submitted && <p className="subscribe-success">Thank you for subscribing!</p>}
      </div>
    </section>
  );
};

export default Subscribe;
