import "./footer.css";
import { socialIcons, footerMenu } from "./FooterData";

import React from "react";

import Logo from "../Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="footer-section"
      style={{ backgroundImage: `url('/images/footer-img-new_1920X.jpg')` }}
    >
      <div className="footer-overlay"></div>
      <div className="footer-logo">
        <Logo />
      </div>
      <div className="column-container">
        {/* Social Icons */}
        <ul className="social-icons-container">
          {socialIcons.map((item) => (
            <li key={item.id} className="icon-items">
              <Link to={item.link} title={item.title}>
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu */}
        <ul className="navigation-container">
          {footerMenu.map((item) => (
            <li key={item.id} className="menu-item">
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Copy Right */}
        <p className="copyright">Copyright ©, EatMe Powered by ReactJS</p>
      </div>
    </div>
  );
};

export default Footer;
