import React, { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
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
        fetch('http://localhost:5000/requestforABook', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire('Request sent Successfully')
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
                <div className='d-flex justify-content-center search-outer1'>
                    <Form onSubmit={handleSubmit(onSubmit)} className='p-4 rounded  myForm'>
                        <h1 className='text-center text-bold'>Request Book Form</h1>
                        <Row className="">
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Member Name</Form.Label>
                                <Form.Control  type="text" placeholder="Member Name" required {...register("memberName")} />
                            </Form.Group>
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Title" defaultValue={issueDetail.title} required {...register("title")} />
                            </Form.Group>
                        </Row>
                        <Row className="">
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Member ID</Form.Label>
                                <Form.Control type="text" placeholder="Member Id" {...register("memberId")} />
                            </Form.Group>

                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" defaultValue={issueDetail.authors} placeholder="Author Name" required {...register("authorName")} />
                            </Form.Group>
                        </Row>
                        <Row className="">
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Member Type</Form.Label>
                                <select name='' className="form-select p-2" id="branch" {...register("memberType")}>
                                    <option value="student">Student</option>
                                    <option value="faculty">Faculty</option>
                                    <option value="" selected>ALL</option>
                                </select>
                            </Form.Group>
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Accession Number</Form.Label>
                                <Form.Control type="text" defaultValue={issueDetail.edition}  placeholder="Accession Number" required {...register("accessionNumber")} />
                            </Form.Group>
                        </Row>
                        <Row className="">
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Phone No</Form.Label>
                                <Form.Control type="text" placeholder="Phone no" required {...register("phoneNo")} />
                            </Form.Group>
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Edition</Form.Label>
                                <Form.Control type="text" defaultValue={issueDetail.edition}  placeholder="Edition" required {...register("edition")} />
                            </Form.Group>
                        </Row>
                        <Row className="">
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Email" required {...register("email")} />
                            </Form.Group>
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Issue Date</Form.Label>
                                <Form.Control type="text" placeholder="Issue Date" {...register("issueDate")} />
                            </Form.Group>
                        </Row>
                        <Row className="">
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Present Address</Form.Label>
                                <Form.Control type="text" placeholder="Present Address" {...register("presentAddress")} />
                            </Form.Group>
                            <Form.Group as={Col} sm='12' md='6'>
                                <Form.Label>Return Date</Form.Label>
                                <Form.Control type="text" placeholder="Return Date" {...register("returnDate")} />
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