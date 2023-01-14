import React, { Component } from "react";
import Navigation from './../../Home/Navigation/Navigation/Navigation';
import './Login.css';
export default class LoginFromDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { instituteEmail, password } = this.state;
    console.log(instituteEmail, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        instituteEmail,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "/dashboard";
        }
      });
  }
  render() {
    return (

      <div>
        <Navigation />
        <div className="row login pb-5">
          <div className="col-lg-12 bg2 mb-5">
            <div className="login_form_div">
              <div>
                <h3 className="mt-5 mb-4 text-center">LIBRARY STUDENT LOGIN FORM</h3>

                <form onSubmit={this.handleSubmit} className="loginform">
                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control text-light"
                      placeholder="Enter email"
                      onChange={(e) => this.setState({ instituteEmail: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control text-light form_input_design"
                      placeholder="Enter password"
                      onChange={(e) => this.setState({ password: e.target.value })}
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
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
  }
}
