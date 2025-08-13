import React from "react";
import "./About.css";
import { FaLinkedin, FaInstagram, FaTwitter, FaSnapchatGhost } from "react-icons/fa";


const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h2>ABOUT US</h2>
        <p>Home / About</p>
      </div>

      <div className="about-content container">
        <div className="about-section">
          <h3>Our Story</h3>
          <p>
            At Ire Hairmpire, we believe beauty begins with confidence—and
            nothing boosts confidence like luxurious, high-quality hair. Our
            brand was founded with a mission to empower individuals through
            premium hair solutions that enhance natural beauty.
          </p>
        </div>

        <div className="about-section">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>100% Virgin Human Hair</li>
            <li>Luxury Wig Collections</li>
            <li>Seamless Online Shopping Experience</li>
            <li>Excellent Customer Service</li>
            <li>Affordable Elegance</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>Our Vision</h3>
          <p>
            We envision a world where every woman feels empowered, beautiful,
            and unstoppable with the right crown—her hair.
          </p>
        </div>
        <div className="about-section ceo-section">
          <h3>Meet Our CEO</h3>
          <div className="ceo-card">
            <img src="/ceo.jpg" alt="CEO of Ire Hairmpire" className="ceo-image" />
            <div className="ceo-info">
              <h4>Iretomiwa Omolabake</h4>
              <div className="ceo-social-icons">
                <a href="https://www.instagram.com/ireeetomiwa?igsh=aDNwNmN1b2poMzlr" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://t.snapchat.com/bL8U6vqE" target="_blank" rel="noopener noreferrer">
                  <FaSnapchatGhost />
                </a>

                <a href="https://x.com/ire_ola_?s=21" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>
              <p>
                A passionate entrepreneur and visionary behind Ire Hairmpire. With years of experience in beauty and fashion,
                she built this brand to empower women with confidence, elegance, and style. Her attention to detail and deep
                love for luxury hair ensures that every product delivers both beauty and quality.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
