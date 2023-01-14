import React, { Component } from "react";
import MyAccount from './MyAccount';

export default class Email extends Component {
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
    }
    render() {
        return (
            <div >
                {/* <MyAccount email={this.state.userData.instituteEmail} /> */}


            </div>)
    }
}
