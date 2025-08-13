import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsEnvelope,
  BsTelephone,
  BsGeoAlt,
} from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="luxury-footer">
      <div className="footer-top container">
        <div className="footer-brandd">
          <div className="brandd-logo-row">
            <img
              src="/ire-hairmpire-logo.png"
              alt="Luxury Hair Logo"
              className="footer-logo"
            />
            <h5 className="brandd-name">Ire Hairmpire</h5>
          </div>
          <p>Glamour starts with great Hair.</p>
          <p className="share-text">Share with us</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1AfLX9QDjW/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/ire_hairmpire?igsh=MWt0M3pqYnI2MGRhbg==" target="_blank" rel="noopener noreferrer">
              <BsInstagram />
            </a>
            <a href="https://wa.me/2348067288807" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp />
            </a>
          </div>

        </div>

        <div className="footer-links">
          <h6>Support</h6>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/returns">Refunds & Returns</Link></li>
            <li><Link to="/delivery">Deliveries</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h6>Information</h6>
          <ul>
            <li><Link to="/search-results">Search Terms</Link></li>
            <li><Link to="/search-results">Advanced Search</Link></li>
            <li><Link to="/faq">Help & FAQs</Link></li>
            <li><Link to="/locations">Store Location</Link></li>
            <li><Link to="/orders">Orders & Returns</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h6>Contact Us</h6>
          <ul>
            <li><BsGeoAlt /> No: 58 A, East Madison Street, Baltimore, MD, USA 4508</li>
            <li><BsTelephone /> +000 1234 56789</li>
            <li><BsEnvelope /> support@example.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="categories">
          <Link to="/collection/hair-color">Hair Color</Link>
          <Link to="/collection/hair-drier">Hair Drier</Link>
          <Link to="/collection/hairstyle">Hair Style</Link>
          <Link to="/collection/wigs">Hair Wigs</Link>
          <Link to="/collection/hair-oil">Hair Oil</Link>
        </div>

        <div className="payment-icons">
          <img src="/paymentmethod.png" alt="Payment Method" />
          <img src="/applepay.png" alt="Apple Pay" />
        </div>

        <div className="footer-note">
          © 2025 Ire Hairmpire | Powered by You 💅
        </div>
      </div>
    </footer>
  );
};

export default Footer;
