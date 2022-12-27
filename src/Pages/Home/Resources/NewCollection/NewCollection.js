import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import Navigation2 from '../../Navigation/Navigation2/Navigation2';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const NewCollection = () => {
    // const { authors, _id } = props.books;
    return (
        <div>
            <Navigation2 />
            {/* <h2>{_id}</h2>
            <h2>{authors}</h2> */}





            {/*        <div>
                <Container className="catalog-nav1 mt-3">
                    <Navbar expand="lg">
                        <Container className="catalog-nav">
                            <div>
                                <h2>New Arrivals</h2>
                            </div>

                        </Container>
                    </Navbar>
                    <div>
                        <table className="table">
                            <thead className="thead-dark bg-dark text-light">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Authors/Editors</th>
                                    <th scope="col">Publisher</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Copies</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td><span className='text_bold'>Companies act, 1994 (Authentic English Text)  </span>
                                        <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td>Companies act, 1994 (Authentic English Text)   <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td>Companies act, 1994 (Authentic English Text)   <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td>Companies act, 1994 (Authentic English Text)   <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td>Companies act, 1994 (Authentic English Text)   <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td>Companies act, 1994 (Authentic English Text)   <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td>Companies act, 1994 (Authentic English Text)   <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td>Companies act, 1994 (Authentic English Text)   <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td>Companies act, 1994 (Authentic English Text)   <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td>Companies act, 1994 (Authentic English Text)   <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img height="100px" src="https://i.ibb.co/rt6jKvg/cover.png" alt="" />
                                    </td>
                                    <td>Companies act, 1994 (Authentic English Text)   <br />
                                        <span>Year: 1995 </span> <br />
                                        <span>Call No: 346.067 COM 1995 ENG </span>
                                    </td>
                                    <td>Ministry of Commerce,Bd</td>
                                    <td></td>
                                    <td>Books</td>
                                    <td>2</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                </Container>
            </div> */}




        </div>
    );
};

export default NewCollection;