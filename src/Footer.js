// src/components/footer/Footer.js
import React from 'react';
import './Footer.css'; // Ensure to link the stylesheet
import Logo from "../../images/logo.svg"; // Assuming the logo is in SVG format

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left section: Alpine Ascents and Copyright */}
        <div className="footer-left">
          <div className="logo-container">
            <img src={Logo} alt="Alpine Ascents Logo" className="footer-logo" />
            <p className="footer-logo-font">Alpine Ascents</p>
          </div>
          <p className="footer-copyright">Copyright © 2024 All Rights Reserved.</p>
        </div>

        {/* Right section: Page Menus, Our History, and Social Media */}
        <div className="footer-right">
          {/* Page Menus */}
          <div className="footer-menu">
            <h4>Page Menus</h4>
            <ul className="footer-menu-list">
              <li><a href="#home-section" onClick={(e) => { e.preventDefault(); scrollToSection('home-section'); }}>Home</a></li>
              <li><a href="#history-section" onClick={(e) => { e.preventDefault(); scrollToSection('history-section'); }}>History</a></li>
              <li><a href="#sheltering-section" onClick={(e) => { e.preventDefault(); scrollToSection('sheltering-section'); }}>Sheltering</a></li>
              <li><a href="#climbing-section" onClick={(e) => { e.preventDefault(); scrollToSection('climbing-section'); }}>Climbing Disciplines</a></li>
            </ul>
          </div>

          {/* Our History Section */}
          <div className="footer-history">
            <h4>Our History</h4>
            <ul className="footer-history-list">
              <li><a href="#history-section" onClick={(e) => { e.preventDefault(); scrollToSection('history-section'); }}>Mountaineering</a></li>
              <li><a href="#history-section" onClick={(e) => { e.preventDefault(); scrollToSection('history-section'); }}>Mission</a></li>
            </ul>
          </div>

             {/* Social Media Section */}
          <div className="footer-social-media">
            <h4>Social Media</h4>
            <ul className="footer-social-list">
              <li><a href="/twitter">Twitter</a></li>
              <li><a href="/tiktok">Tiktok</a></li>
              <li><a href="/facebook">Facebook</a></li>
              <li><a href="/instagram">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
