import React from 'react';
import { useEffect, useState } from 'react';
import './MyAccount.css'
import { Link } from 'react-router-dom';
const MyAccount = () => {
    // const [user, setUser] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:5000/userList")
    //         .then(res => res.json())
    //         .then((data) => setUser(data))
    // }, []);



    return (
        <div >
            <h1 className='text-center'>MY PROFILE</h1>
            <div className='d-flex justify-content-center text-center'>
                <table class="table width-table">
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
                                Name: Tonni Akter
                            </th>
                        </tr>
                        <tr>
                            <th scope="row">Institute ID: 191276038</th>
                        </tr>
                        <tr>
                            <th scope="row">Institute Email: 191276038@student.presidency.edu.bd</th>
                        </tr>
                        <tr>
                            <th scope="row">Personal Email: tonniakterbithi@gmail.com</th>
                        </tr>
                        <tr>
                            <th scope="row">Department:CSE</th>
                        </tr>
                        <tr>
                            <th scope="row">User Type:Student</th>
                        </tr>
                        <tr>
                            <th scope="row">Phone Number : 01825332448</th>
                        </tr>
                        <tr>
                            <th scope="row">Present Address : Priyanka Housing, Mirpur-1 Dhaka</th>
                        </tr>
                        <tr>
                            <th scope="row">
                                <button type="" className='btn  update_link'>
                                    <Link to="/dashboard/updateProfile" className='update_link1'> Update Profile Info</Link>
                                </button>
                            </th>
                        </tr>
                    </tbody>
                </table>


            </div>

            {/* issubook for user request */}
            <h1>My Books</h1>







        </div>
    );
};

export default MyAccount;