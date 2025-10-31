import "./authentication.css";
import { Link } from "react-router-dom";
import { InputButton } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import TextInput from "./TextInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/fontawesome-free-brands";

import useAuthentication from "./useAuthentication";

const SignIn = () => {
  const {
    onUserLogin,
    setPassword,
    setuserName,
    responseStatus,
    userName,
    password,
  } = useAuthentication();

  const styles = {
    statusResponse: {
      textAlign: "center",
      color: COLORS.white,
      fontSize: "1.1rem",
      backgroundColor: COLORS.red,
      width: "auto",
      height: "auto",
      padding: ".5rem",
      borderRadius: "10px",
      fontWeight: "500",
    },
  };

  
  return (
    <div className="signin-section">
      <div className="container">
        <form className="login-form" onSubmit={onUserLogin}>
          {responseStatus !== "" ? (
            <p style={styles.statusResponse}>{responseStatus}</p>
          ) : null}
          <h3 style={{ ...FONTS.h4, textAlign: "center" }}>Login</h3>
          <TextInput
            label="Username"
            type="text"
            icon={<i className="fas fa-user lg"></i>}
            placeholder="Enter your username"
            onchange={(e) => {
              setuserName(e.target.value);
            }}
            value={userName}
          />
          <TextInput
            label="Password"
            type="password"
            icon={<i className="fas fa-lock lg"></i>}
            placeholder="Enter your password"
            onchange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/signup" style={{ ...FONTS.body5 }}>
              Sign Up
            </Link>
            <Link to="/forgotpassword" style={{ ...FONTS.body5 }}>
              Forgot password?
            </Link>
          </div>

          <InputButton
            containerStyle={{
              margin: "1rem 0",
              border: "none",
              height: "60px",
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.radius,
              color: COLORS.white,
              ...FONTS.h5,
            }}
            value="LOGIN"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "2rem 0",
            }}
          >
            <p style={{ textAlign: "center", ...FONTS.body5 }}>Sign up using</p>
            <div style={{ display: "flex", margin: "auto " }}>
              <a
                href={"https://www.facebook.com"}
                style={{ color: COLORS.gray, margin: "0 1rem" }}
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href={"https://www.twitter.com"}
                style={{ color: COLORS.gray, margin: "0 1rem" }}
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href={"https://www.google.com "}
                style={{ color: COLORS.gray, margin: "0 1rem" }}
              >
                <FontAwesomeIcon icon={faGoogle} size="2x" />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
