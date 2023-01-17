import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
const UpdateProfile = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [data, setData] = useState({
        fullName: user?.fullName,
        instituteId: user?.instituteId,
        phoneNumber: user?.phoneNumber,
        userType: user?.userType,
        password: user?.password,
        instituteEmail: user?.instituteEmail,
        personalEmail: user?.personalEmail,
        presentAdd: user?.presentAdd,
        department: user?.department,
    })
    useEffect(() => {
        const url = `http://localhost:5000/userList/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id]);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(
                `http://localhost:5000/userData/${id}`,
                data
            );
        Swal.fire('Profile Update Successfully');
        window.location.href = '/dashboard/myaccount';
    };
    console.log(user);


    return (
        <div>
            <div className='my-3'>
                <span><Link to='/dashboard' className='dbLinks'>dashboard</Link></span> /<span><Link to='/dashboard/myaccount' className='dbLinks mx-2'>My Account</Link></span>/<span><Link to={`/dashboard/updateProfile/${id}`} className='dbLinks mx-2'>Update Profile</Link></span>
            </div>
            <div className='d-flex justify-content-center'>
                <Card bg='' style={{ width: '100%' }} className="text-white py-3 mt-5">
                    <Card.Img variant="top" className="w-25 mx-auto rounded" />
                    <Card.Body>
                        <Card.Text>
                            <div className='d-flex justify-content-center w-100'>
                                <Form onSubmit={handleSubmit} className='w-75 rounded  myForm'>
                                    <h1 className='text-center p-4 text-bg-dark'>Update Profile Form</h1>
                                    <Row className="">
                                        <Form.Group as={Col} sm='12' md='6'>
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control type="text" name='fullName' defaultValue={user.fullName} required onChange={handleChange} />
                                        </Form.Group>
                                        <Form.Group as={Col} sm='12' md='6'>
                                            <Form.Label>Institute ID</Form.Label>
                                            <Form.Control type="text" name='instituteId' defaultValue={user.instituteId} required onChange={handleChange} />
                                        </Form.Group>
                                    </Row>

                                    <Row className="">
                                        <Form.Group as={Col} sm='12' md='6'>
                                            <Form.Label>User Type</Form.Label>
                                            <Form.Select name='userType' aria-label="Default select example" defaultValue={user.userType} onChange={handleChange}>
                                                <option value="all">All</option>
                                                <option value="student">Student</option>
                                                <option value="faculty">Faculty</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group as={Col} sm='12' md='6'>
                                            <Form.Label>Department</Form.Label>
                                            <Form.Select name='department' aria-label="Default select example" defaultValue={user.department} onChange={handleChange}>
                                                <option value="cse">CSE</option>
                                                <option value="eee">EEE</option>
                                                <option value="bba">BBA</option>
                                                <option value="civil">Civil</option>
                                                <option value="english">English</option>
                                                <option value="llb">LLB</option>
                                                <option value="other">Other</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group as={Col} sm='12' md='6'>
                                            <Form.Label>Institute Email</Form.Label>
                                            <Form.Control type="email" name='instituteEmail' defaultValue={user.instituteEmail} required onChange={handleChange} />
                                        </Form.Group>
                                        {/* <Form.Group as={Col} sm='12' md='6'>
                                            <Form.Label>Change Password</Form.Label>
                                            <Form.Control type="text" name='password' defaultValue={user.password} required onChange={handleChange} />
                                        </Form.Group> */}
                                        <Form.Group as={Col} sm='12' md='6'>
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" name='phoneNumber' defaultValue={user.phoneNumber} required onChange={handleChange} />
                                        </Form.Group>
                                    </Row>

                                    <Row className="">
                                        <Form.Group as={Col} sm='12' md='6'>
                                            <Form.Label>Personal Email</Form.Label>
                                            <Form.Control type="email" name='personalEmail' defaultValue={user.personalEmail} required onChange={handleChange} />
                                        </Form.Group>
                                        <Form.Group as={Col} sm='12' md='6'>
                                            <Form.Label>Present Address </Form.Label>
                                            <Form.Control type="text" name='presentAdd' defaultValue={user.presentAdd} required onChange={handleChange} />
                                        </Form.Group>
                                    </Row>
                                    <Row>

                                        {/* <Form.Group as={Col} sm='12' md='6'>
                                            <Form.Label>Profile Photo</Form.Label>
                                            <Form.Control
                                                type="file"
                                                name="file"
                                            />
                                        </Form.Group> */}
                                    </Row>

                                    <Form.Group as={Col} sm='12' md='12' >
                                        <button className='btn btn-dark w-100 p-2 mt-3' type='submit' >Update Profile</button>
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='12' >
                                        <Link
                                            className='btn btn-danger w-100 p-2 mt-3'
                                            to="/dashboard/myaccount"
                                        >CANCEL</Link>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default UpdateProfile;