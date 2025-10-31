import React from "react";

import { Link } from "react-router-dom";
import { FONTS, COLORS } from "../../constants";

import TextInput from "./TextInput";
import { InputButton } from "../../components";
import useAuthentication from "./useAuthentication";
const SignUp = () => {
  const {
    name,
    userName,
    password,
    errorTextName,
    errorTextUsername,
    errorTextPassword,
    renderStatusText,
    handleNameTextChange,
    handleUsernameTextChange,
    handlePasswordTextChange,
    handleRegButtonChange,
    onUserRegister,
  } = useAuthentication();

  return (
    <div className="signup-section">
      <div className="container">
        {renderStatusText()}
        <form className="signup-form" onSubmit={onUserRegister}>
          <h3 style={{ ...FONTS.h4, textAlign: "center" }}>Register</h3>
          <TextInput
            label="Name"
            type="text"
            icon={<i className="fas fa-user lg"></i>}
            placeholder="Enter your Name"
            onchange={(e) => handleNameTextChange(e)}
            value={name}
            errorText={errorTextName}
          />
          <TextInput
            label="Username"
            type="text"
            icon={<i className="fas fa-user lg"></i>}
            placeholder="Enter your username"
            onchange={(e) => handleUsernameTextChange(e)}
            value={userName}
            errorText={errorTextUsername}
          />
          <TextInput
            label="Password"
            type="password"
            icon={<i className="fas fa-lock lg"></i>}
            placeholder="Enter your password"
            onchange={(e) => handlePasswordTextChange(e)}
            value={password}
            errorText={errorTextPassword}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to="/signup" style={{ ...FONTS.body5 }}>
              Sign Up
            </Link>
            <Link to="/forgotpassword" style={{ ...FONTS.body5 }}>
              Forgot password?
            </Link>
          </div>

          <InputButton
            id="btnRegistration"
            disabled={handleRegButtonChange()}
            containerStyle={{
              margin: ".5rem 0",
              border: "none",
              height: "50px",
              backgroundColor: handleRegButtonChange()
                ? COLORS.gray
                : COLORS.primary,
              borderRadius: "10px",
              color: COLORS.white,
              ...FONTS.h5,
            }}
            value="Register"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "1rem 0",
            }}
          >
            <p style={{ textAlign: "center", ...FONTS.body5 }}>Sign up using</p>
            <div style={{ display: "flex", margin: "auto " }}>
              {/* <a
                style={{ margin: "0 .5rem", color: COLORS.gray }}
                href="https://facebook.com"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                style={{ margin: "0 .5rem", color: COLORS.gray }}
                href="https://gmail.com"
              >
                <i className="fab fa-google fa-2x"></i>
              </a>
              <a
                style={{ margin: "0 .5rem", color: COLORS.gray }}
                href="https://twitter.com"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
