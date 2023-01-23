import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Navigation2 from '../../Navigation/Navigation2/Navigation2';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Catalog.css';
const Catalog = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    useEffect(() => {
        const url = `http://localhost:5000/allBooks`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setAllBooks(data)
                setIsLoaded(false)
            });
    }, []);
    
    return (
        <div>
            <Navigation2 />
            {/* catalog  */}
            <div>
                <Container className="catalog-nav1 mt-3">
                    <Navbar expand="lg">
                        <Container className="catalog-nav">
                            <div>
                                <h2>Catalog</h2>
                            </div>
                            <div>
                                {/* <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                        <NavLink className='navlink_design3 nav_bg_2' to="/search_catalog">Search Catalog</NavLink>
                                        <NavLink className='navlink_design3 nav_bg_2' to="/catagories">Categories </NavLink>
                                        <NavLink className='navlink_design3 nav_bg_2' to="/authors">Authors </NavLink>
                                        <NavLink className='navlink_design3 nav_bg_2' to="/publishers">Publishers</NavLink>
                                        <NavLink className='navlink_design3 nav_bg_2' to="/tags">Tags</NavLink>
                                    </Nav>
                                </Navbar.Collapse> */}
                            </div>

                        </Container>
                    </Navbar>
                    {/* table  */}
                    <div>
                        <table className="table">
                            <thead className="thead-dark bg-dark text-light">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Authors/Editors</th>
                                    <th scope="col">Publisher</th>
                                    <th scope="col">Category</th>
                                    {/* <th scope="col">Copies</th> */}
                                </tr>
                            </thead>
                            {
                    isLoaded ? (
                        <div className="spinner-border text-secondary  spinner ">
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) :
                            <tbody>

                                {allBooks.map(book => (
                                    <tr>
                                        <td className=''>
                                            <img height="100px" src={book.img} alt="" />
                                        </td>
                                        <td><span className='text_bold'>{book.title}</span>
                                            <br />
                                            <span>Year: {book.publicationYear} </span> <br />
                                            <span>Call No: {book.callNo} </span>
                                        </td>
                                        <td>{book.authors}</td>
                                        <td>{book.publisher}</td>
                                        <td>{book.category}</td>
                                        {/* <td className='text-center'>{book.copies}</td> */}
                                    </tr>
                                ))
                                }
                            </tbody>}
                        </table>
                    </div>


                </Container>
            </div>
        </div>
    );
};

export default Catalog;