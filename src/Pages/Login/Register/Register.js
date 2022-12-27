import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { NavLink,useNavigate } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";
import Alert from "react-bootstrap/Alert";
const Register = () => {
  const { googleSignIn, registerUser, isLoading, error, user } = useAuth();
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...loginData };
    newUser[field] = value;
    setLoginData(newUser);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name,navigate);
    e.preventDefault();
  };
  return (
    <div className="row login">
      <div className="col-lg-5">
        <img
          className="w-100 mt-5 pt-5"
          src="https://srrafi.com/form-demo/formify/assets/img/chat-left.png"
          alt=""
        />
      </div>
      <div className="col-lg-7 bg2">
        <h3 className="mt-5 mb-4">Sign up to Coding Institute</h3>
        <button
          onClick={googleSignIn}
          style={{ width: "500px" }}
          className="btn btn-light ms-2"
        >
          <img
            style={{ width: "28px" }}
            src="https://i.ibb.co/W50g0mR/google.png"
            alt=""
          />{" "}
          Sign up with Google
        </button>
        <h6 className="text-center mt-4">or</h6>
        <form onSubmit={handleLoginSubmit} className="loginform">
          <input
            required
            placeholder="Your Name"
            id="standard-basic"
            label="Your Name"
            name="name"
            onChange={handleOnchange}
          />{" "}
          <br />
          <input
            required
            placeholder="Your Email"
            sx={{ width: 1, m: 2 }}
            id="standard-basic"
            type="email"
            name="email"
            onChange={handleOnchange}
          />{" "}
          <br />
          <input
            required
            placeholder="Your Password"
            id="standard-basic"
            type="password"
            label="Your password"
            variant="standard"
            name="password"
            onChange={handleOnchange}
          />{" "}
          <br />
          <input
            required
            placeholder="Retype Your Password"
            type="password"
            label="Retype Your password"
            name="password2"
            onChange={handleOnchange}
          />{" "}
          <br />
          <button type="submit" className="btn btn-dark">
            Register
          </button>
          <NavLink
            to="/login"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bolder",
              paddingLeft: "10px",
            }}
          >
            {" "}
            <br />
            Already Register ? Please Login
          </NavLink>
        </form>
        {isLoading && <Spinner animation="grow" />}
        {user?.email && (
          <Alert variant="success">User Created Successfully </Alert>
        )}
        {error && <Alert variant="danger">{error}</Alert>}
      </div>
    </div>
  );
};

export default Register;
