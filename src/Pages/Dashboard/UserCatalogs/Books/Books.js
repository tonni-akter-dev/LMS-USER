import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Books = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/allBooks`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllBooks(data));
    }, []);
    return (
        <div>
            <Container fluid>
                <div className='search-outer'>
                    <div>
                    <button className='btn btn-dark'>
                            <Link className='navlink_design2' to="/dashboard/books/requestforAbook">
                                Request for a book
                            </Link>
                        </button>
                    </div>
                    <div className='search_bar_inner'>
                        <form action="" className='search_bar'>
                            <div className="input select input_margin">
                                <select name="">
                                    <option value="">All</option>
                                    <option value="4">Accesion No</option>
                                    <option value="1">Title</option>
                                    <option value="2">Call No</option>
                                    <option value="5">ISBN</option>
                                    <option value="3">Author</option>
                                    <option value="6">Publisher</option>
                                    <option value="11">Category</option>
                                    <option value="7">Tag</option>
                                    <option value="8">Publish Year</option>
                                </select>
                            </div>
                            <div className="input select input_margin">
                                <select id="FilterLibraryBranchId">
                                    <option value="">All Branch</option>
                                    <option value="10">Gulshan</option>
                                    <option value="11">Banani</option>
                                </select>
                            </div>
                            <div className="input text input_margin">
                                <input name="data[Filter][q]" tabIndex="0" autoFocus="autoFocus" type="text" id="FilterQ" />
                            </div>
                            <div className="submit input_margin">
                                <button className='btn-sm btn btn-dark' type="button">Search</button>
                            </div>
                            <div className="submit input_margin">
                                <button className='btn-sm btn btn-dark' type="button">Clear</button>
                            </div>
                        </form>
                    </div>
                </div>
                    {/* table  */}
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

                                {allBooks.map(book => (
                                    <tr>
                                        <td className=''>
                                            <img height="100px" src={book.img} alt="" />
                                        </td>
                                        <td><span className='text_bold'>
                                            <Link to={`/dashboard/requestforABook/${book._id}`}>{book.title}</Link>
                                        </span>
                                            <br />
                                            <span>Year: {book.publicationYear} </span> <br />
                                            <span>Call No: {book.callNo} </span>
                                        </td>
                                        <td>{book.authors}</td>
                                        <td>{book.publisher}</td>
                                        <td>{book.type}</td>
                                        <td className='text-center'>{book.copies}</td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>


            </Container>
        </div>
    );
};

export default Books;