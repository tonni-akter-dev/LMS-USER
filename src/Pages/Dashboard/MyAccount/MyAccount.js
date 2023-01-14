import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Email from "./Email";

export default class MyAccount extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            userData: "",
            myRequest: ""
        };
    }
    componentDidMount() {
        fetch("http://localhost:5000/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                this.setState({ userData: data.data });
            });
        const url = `http://localhost:5000/requestedBook?instituteEmail=${this.state.userData.instituteEmail}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log({ myRequest: data })
                this.setState({ myRequest: data })
            });

    }
    render() {
        return (
            <div>
                <h1 className='text-center'>MY PROFILE </h1>
                <div className='d-flex justify-content-center text-center'>
                    <table className="table width-table">
                        <thead>
                            <tr>
                                <th scope="col">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <img height="100px" src="https://i.ibb.co/SX7tXDL/user.png" alt="" />
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    Name:
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">Institute ID: {this.state.userData.instituteId}</th>
                            </tr>
                            <tr>
                                <th scope="row">Institute Email: {this.state.userData.instituteEmail}</th>
                            </tr>
                            <tr>
                                <th scope="row">Personal Email: {this.state.userData.personalEmail}</th>
                            </tr>
                            <tr>
                                <th scope="row">Department: {this.state.userData.department}</th>
                            </tr>
                            <tr>
                                <th scope="row">User Type:  {this.state.userData.userType}</th>
                            </tr>
                            <tr>
                                <th scope="row">Phone Number : {this.state.userData.phoneNumber}</th>
                            </tr>
                            <tr>
                                <th scope="row">Present Address : {this.state.userData.presentAdd}</th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <button type="" className='btn  update_link'>
                                        <Link to={`/dashboard/updateProfile/${this.state.userData._id}`} className='update_link1'> Update Profile Info</Link>
                                    </button>
                                </th>
                            </tr>
                        </tbody>
                    </table>


                </div>

                {/* issubook for user request */}
                <h1>My Books</h1>


                {/* <Email /> */}




            </div>)
    }
}
