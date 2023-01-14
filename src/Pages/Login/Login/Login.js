import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
// import Alert from "react-bootstrap/Alert";
// import { Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Navigation from "../../Home/Navigation/Navigation/Navigation";
const Login = () => {
  const { loginUser,googleSignIn } = useAuth(); 
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...loginData };
    newUser[field] = value;
    setLoginData(newUser);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };
  return (
    <div>
<Navigation/>
      <div className="row login pb-5">
        <div className="col-lg-12 bg2 mb-5">
          <div className="login_form_div">
            <div>
              <h3 className="mt-5 mb-4 text-center">LIBRARY STUDENT LOGIN FORM</h3>
            
              <form
                onSubmit={handleLoginSubmit}
                className="loginform">
                <label className="ps-2 login_txt">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleOnchange}
                />
                <label className="ps-2 login_txt">Password</label>
                <input
                  required
                  placeholder="Your password"
                  type="password"
                  name="password"
                  onChange={handleOnchange}
                />{" "}
                <br />
                <button
                  style={{ width: "100px" }}
                  className="btn btn_design mt-3 ms-2"
                  type="submit"
                >
                  Login
                </button>
                <br />
                  <button
          onClick={googleSignIn}
          style={{ width: "80px" }}
          className="btn btn-light ms-2"
        >
          <img
            style={{ width: "28px" }}
            src="https://i.ibb.co/W50g0mR/google.png"
            alt=""
          />{" "}
          {/* Sign in with Google */}
        </button>
                <NavLink
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bolder",
                    paddingLeft: "10px",
                  }}
                >
                  New User? Please Create an account.
                </NavLink>
              </form>

              
            </div>
          </div>
          {/* {isLoading && <Spinner animation="grow" />}
        {user?.email && (
          <Alert variant="success">Login Successfully </Alert>
        )}
        {error && <Alert variant="danger">{error}</Alert>} */}
        </div>
      </div>
    </div>
  );
};

export default Login;
