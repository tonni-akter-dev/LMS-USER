import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ViewThesis = () => {
    const { id } = useParams();
    const [viewThesis, setViewThesis] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/viewThesis/${id}`)
            .then(res => res.json())
            .then(data => setViewThesis(data))
    })
    return (
        <div>
            {/* links */}
            <div className='my-5'>
                <span><Link to='/dashboard' className='dbLinks'>dashboard</Link></span> /<span><Link to='/dashboard' className='dbLinks mx-2'>Catalog</Link></span>/<span><Link to='/dashboard/catalouge/thesis' className='dbLinks mx-2'>Thesis</Link></span>/<span><Link to={`/dashboard/viewThesis/${id}`} className='dbLinks mx-2'>View Thesis</Link></span>
            </div>
            <div className="mt-5 py-5">
                <h1 className='text-center'> View {viewThesis.ThesisTitle} </h1>
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
                                <th scope="row">Thesis Title: {viewThesis.ThesisTitle}</th>
                            </tr>
                            <tr>
                                <th scope="row">Instructor: {viewThesis.instructor}</th>
                            </tr>
                            <tr>
                                <th scope="row">Description: {viewThesis.description}</th>
                            </tr>

                            <tr>
                                <th scope="row">Member1 Name: {viewThesis?.mem1name} <br />
                                    <span>Member1 ID: {viewThesis.mem1id}</span>
                                </th>
                            </tr>
                            <tr>


                                {viewThesis?.mem2name ? <th scope="row">Member2 Name: {viewThesis?.mem2name} <br />
                                    <span>Member2 ID: {viewThesis.mem2id}</span>
                                </th> :
                                    ""}
                            </tr>
                            <tr>


                                {viewThesis?.mem3name ? <th scope="row">Member3 Name: {viewThesis?.mem3name} <br />
                                    <span>Member3 ID: {viewThesis.mem3id}</span>
                                </th> :
                                    ""}
                            </tr>
                            <tr>


                                {viewThesis?.mem4name ? <th scope="row">Member4 Name: {viewThesis?.mem4name} <br />
                                    <span>Member4 ID: {viewThesis.mem4id}</span>
                                </th> :
                                    ""}
                            </tr>
                            <tr>
                                {viewThesis?.mem5name ? <th scope="row">Member5 Name: {viewThesis?.mem5name} <br />
                                    <span>Member5 ID: {viewThesis.mem5id}</span>
                                </th> :
                                    ""}
                            </tr>




                            {/* <tr>
                            <th scope="row">Member3 Name: {viewThesis?.mem3name} <br/>
                            <span>Member3 ID: {viewThesis.mem3id}</span>
                            </th>
                        </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewThesis;