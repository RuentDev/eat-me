import React from "react";
import { Link } from "react-router-dom";

// const logo = require('../../public/images/logo_02.png');

const Logo = () => {
  return (
    <Link
      to={`/${localStorage.getItem("auth_username") ? "home" : ""}`}
      className="logo"
    >
      <img className="image-logo" src="/images/logo_02.png" alt="Logo" />
    </Link>
  );
};

export default Logo;
