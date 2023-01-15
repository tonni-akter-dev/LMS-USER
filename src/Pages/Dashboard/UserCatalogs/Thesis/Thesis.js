import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
function Thesis() {
    const thesisListTitle = ["Accession Number", "Title", "Instructor", "Semester", "Action"];
    const [thesisList, setThesisList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/viewThesis")
            .then(res => res.json())
            .then((data) => setThesisList(data))
    }, []);
    return (
        <div className='mx-auto w-100 mt-5'>
              <h1 className='text-center'> View All Thesis Here</h1>
            <Table responsive='sm' striped bordered hover variant="" className=' mx-auto w-75 mt-5' >
                <thead className='tableHeader text-uppercase '>
                    <tr className='justify-content-center align-items-center text-center'>
                        {
                            thesisListTitle.map((title) => (
                                <th className='uppercase align-items-center' key={title}> {title}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {thesisList.map((thesis, index) => (
                        <tr key={thesis._id}>
                            <td  className='text-center'>{index+1}</td>
                            <td className="">{thesis.ThesisTitle}</td>
                            <td className="text-center">{thesis.instructor}</td>
                            <td className="text-center">{thesis.semester}</td>
                            <td className="text-center">
                                <Link to={`/dashboard/viewThesis/${thesis._id}`}
                                    className='btn btn-outline-dark btn-sm'
                                >View</Link>
                                {/* <Link to={`/issueThesis/`}
                                    className='btn btn-success btn-sm m-1'
                                >Issue</Link> */}
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default Thesis;

