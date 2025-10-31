import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Utils from "../../Utils/Utils";
import { COLORS } from "../../constants";

import { secondaryMenu } from "../../components/Header/HeaderLinkData";
import useHeader from "../../components/Header/useHeader";

const useAuthentication = () => {

  const navigate = useNavigate();
  const {dispatch, setSelectedNavMenu, setHoverableIconData, headerIconAuthenticatedData} = useHeader();

  const [name, setName] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const [statusText, setStatusText] = useState("");
  const [errorTextName, seterrorTextName] = useState("");
  const [errorTextUsername, seterrorTextUsername] = useState("");
  const [errorTextPassword, seterrorTextPassword] = useState("");
  const [responseStatus, setResponseStatus] = useState("");

  // ============== REGISTER LOGIC START ================>

  const onUserRegister = (e) => {
    e.preventDefault();
    if (name !== "" && userName !== "" && password !== "") {
      axios.post("http://localhost:3001/api/auth", {
          name: name,
          username: userName,
          password: password,
          userRole: "customer",
        })
        .then((response) => {
          if (response.data.status === 200) {
            setTimeout(() => {
              navigate("/signin");
              setStatusText("");
            }, 3000);
            setStatusText(response.data.statusText);
            setName("");
            setuserName("");
            setPassword("");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  function renderStatusText() {
    return (
      <div
        style={{
          backgroundColor: COLORS.green,
          borderRadius: "5px",
          height: "40px",
          minWidth: "300px",
          maxWidth: "400px",
          margin: "auto",
          color: COLORS.white,
          padding: ".5rem 1rem",
          textAlign: "center",
          transition: "all ease-in-out 500ms",
          opacity: statusText ? 1 : 0,
        }}
      >
        {statusText}
      </div>
    );
  }

  const handleRegButtonChange = () => {
    return name !== "" && userName !== "" && password !== "" && errorTextPassword === "" ? false : true;
  };

  const handleNameTextChange = (e) => {
    Utils.validateInput(e.target.value, 8, seterrorTextName);
    setName(e.target.value);
  };

  const handlePasswordTextChange = (e) => {
    Utils.validatePassword(e.target.value, seterrorTextPassword);
    setPassword(e.target.value);
  };

  const handleUsernameTextChange = (e) => {
    Utils.validateUsername(e.target.value, seterrorTextUsername);
    setuserName(e.target.value);
  };

  // ============== REGISTER LOGIC END ================>

  // ============== LOGIN LOGIC START =================>

  const handleLoginButtonChange = () => {
    return password !== "" && errorTextPassword === "" ? false : true;
  };

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(atob(base64).split("").map((c) => {
      return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));

    return JSON.parse(jsonPayload);
  }

  function generateLocalToken(token) {
    var base64Url = token.split(".")[1];
    return base64Url;
  }

  const onUserLogin = async (e) => {
    e.preventDefault();
    let data = { username: userName, password: password };
    if (data.username === "" || data.password === "") {
      setResponseStatus("Please fill up the missing field(s)");
      return;
    }

    const res = await axios.post("http://localhost:3001/api/auth/login", data);
    setResponseStatus(res.data.statusText);
    if (res.data.status === 200) {
      const localToken = generateLocalToken(res.data.user);
      const userData = parseJwt(res.data.user);
      localStorage.setItem("auth_token", localToken);
      localStorage.setItem("auth_username", userData.username);

      setuserName("");
      setPassword("");

      navigate('/home')
      dispatch(setSelectedNavMenu(secondaryMenu))
      setHoverableIconData(headerIconAuthenticatedData)
    } else {
      setResponseStatus(res.data.error);
    }
  };

  // ============== LOGIN LOGIC END =================>

  return {
    name,
    userName,
    password,
    statusText,
    errorTextName,
    errorTextUsername,
    errorTextPassword,
    responseStatus,
    setPassword,
    setuserName,
    onUserRegister,
    renderStatusText,
    handleNameTextChange,
    handleUsernameTextChange,
    handlePasswordTextChange,
    handleLoginButtonChange,
    handleRegButtonChange,
    onUserLogin,
    navigate,
  };
};

export default useAuthentication;
