import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './Book.css'
const RequestForAbook = () => {
    let { id } = useParams();
    const [issueDetail, setIssueDetail] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/issueRequestForABook', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire('Book Added Successfully')
                    reset()
                }
            })
    };
    useEffect(() => {
        fetch(`http://localhost:5000/requestforABook/${id}`)
            .then((res) => res.json())
            .then((data) => setIssueDetail(data));
    }, [id]);
    return (
        <div>
            <Container fluid>
                {/* requested books form */}
                <div className='d-flex justify-content-center w-100 search-outer1 p-5'>
                    <Form onSubmit={handleSubmit(onSubmit)} className='w-100 rounded  myForm'>
                        <h1 className='text-center text-bold'>Request Book Form</h1>
                        <Row className="">
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Full Name" required {...register("FullName")} />
                            </Form.Group>
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Book Title</Form.Label>
                                <Form.Control type="text" name='title' defaultValue={issueDetail.title} placeholder="Books Title" required {...register("title")} />
                            </Form.Group>
                        </Row>
                        <Row className="">
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Institute ID</Form.Label>
                                <Form.Control type="text" name='instituteId' placeholder="Institute Id" required {...register("InstituteId")} />
                            </Form.Group>
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" name='autor' defaultValue={issueDetail.authors} placeholder="Author Name" required {...register("author")} />
                            </Form.Group>
                        </Row>
                        <Row className="">
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>User Type</Form.Label>
                                <Form.Select className="text-dark" name='userType' aria-label="Default select example" {...register("userType")}>
                                    <option className='text-dark' value="all">All</option>
                                    <option className='text-dark' value="student">Student</option>
                                    <option className='text-dark' value="faculty">Faculty</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Accession Number</Form.Label>
                                <Form.Control type="text" name='accession' defaultValue="1" placeholder="Accession Number" required {...register("accessionNumber")} />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" name='phone' placeholder="Phone Number" required {...register("phone")} />
                            </Form.Group>
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Edition</Form.Label>
                                <Form.Control type="text" name='editon' defaultValue={issueDetail.edition} placeholder="Edition" required {...register("edition")} />
                            </Form.Group>
                        </Row>
                        <Row className="">
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Institute Email</Form.Label>
                                <Form.Control type="email" name='email1' placeholder="Institute Email" required {...register("instituteEmail")} />
                            </Form.Group>
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Issue Date</Form.Label>
                                <input type="date" id="birthday" className='datepicker text-dark' name="birthday" {...register("issueDate")} />
                            </Form.Group>
                        </Row>
                        <Row className="">
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Present Address </Form.Label>
                                <Form.Control type="text" name='address' placeholder="Present Address" required {...register("presentAddress")} />
                            </Form.Group>
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Return Date </Form.Label>
                                <input type="date" id="birthday" className='datepicker text-black' name="birthday" {...register("returnDate")} />
                            </Form.Group>
                        </Row>
                        <Form.Group as={Col} sm='12' md='12' >
                            <button className='btn btn-dark w-100 p-2 mt-3' type='submit' >Request for a book</button>
                        </Form.Group>
                    </Form>

                </div>

            </Container>
        </div>
    );
};

export default RequestForAbook;