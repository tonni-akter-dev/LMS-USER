import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Books = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [state, setState] = useState({ type: '', branch: '', search_field: "title", search_text: "" });
    const [searchValue, setSearchValue] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/allBooks`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllBooks(data));
    }, []);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const prev_state = { ...state };
        prev_state[name] = value;
        setState(prev_state);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        const url = `http://localhost:5000/search`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        })
            .then((res) => res.json())
            .then((data) => {
                setSearchValue(data.data)
            });
    }

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
                        <form onSubmit={handleSearch} className='search_bar'>
                            {/* <h2>Search</h2> */}
                            <div className="input select input_margin">
                                <select onChange={handleChange} name="type" >
                                    <option value=''>All</option>
                                    <option value="Audio/Visuals">Audio/Visuals</option>
                                    <option value="Book">Books</option>
                                    <option value="E-Books">E-Books</option>
                                    <option value="E-Journals">E-Journals</option>
                                    <option value="Journals">Journals</option>
                                    <option value="News Clippings">News Clippings</option>
                                    <option value="Other">Other</option>
                                    <option value="Publications">Publications</option>
                                    <option value="References">References</option>
                                    <option value="Software">Software</option>
                                    <option value="Thesis">Thesis</option>
                                </select>
                            </div>
                            <div className="input select input_margin">
                                <select onChange={handleChange} id="FilterLibraryBranchId" name='branch'>
                                    <option value=''>All Branch</option>
                                    <option value="Gulshan">Gulshan</option>
                                    <option value="Banani">Banani</option>
                                    <option value="Baridhara">Baridhara</option>
                                </select>
                            </div>
                            <div className="input select input_margin">
                                <select onChange={handleChange} name="search_field" id="FilterField">
                                    <option value="title">Default</option>
                                    <option value="title">Title</option>
                                    <option value="callNo">Call No</option>
                                    <option value="ISBN10">ISBN</option>
                                    <option value="ISBN13">ISSN</option>
                                    <option value="authors">Author</option>
                                    <option value="publisher">Publisher</option>
                                    <option value="category">Category</option>
                                    <option value="tags">Tags</option>
                                    <option value="category">Subject</option>
                                    <option value="abstract">Abstract</option>
                                    <option value="description">Description</option>
                                </select>
                            </div>
                            <div className="input text input_margin">
                                <input onChange={handleChange} name="search_text" tabIndex="0" required autoFocus="autoFocus" type="text" id="FilterQ" />
                            </div>
                            <div className="submit  input_margin">
                                <button className='btn-sm btn btn-dark' type="submit" >Search</button>
                            </div>
                            <div className="submit input_margin">
                                <button className='btn-sm btn btn-dark'>Clear</button>
                            </div>
                            <div>
                                <input type="hidden" name="" value="" id="" />
                            </div>
                        </form>
                        {/*search value */}

                    </div>
                </div>
                {/* table  */}
                {
                    searchValue.length === 0 ? (
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
                                        <th scope="col">Actions</th>
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
                                            <td className="text-center">
                                                {/* <Link to={`/viewBook/${book._id}`}
                                                    className='btn btn-outline-dark btn-sm'
                                                >View</Link> */}

                                                <Link to={`/dashboard/requestforABook/${book._id}`}
                                                    className='btn btn-dark btn-sm mt-2'
                                                >Issue</Link>
                                            </td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    ) : (
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
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchValue.map(book => (
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
                                            <td className="text-center">
                                                {/* <Link to={`/viewBook/${book._id}`}
                                                    className='btn btn-outline-dark btn-sm'
                                                >View</Link> */}
                                                <Link to={`/dashboard/requestforABook/${book._id}`}
                                                    className='btn btn-dark btn-sm'
                                                >Issue</Link>
                                            </td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }

            </Container>
        </div>
    );
};

export default Books;