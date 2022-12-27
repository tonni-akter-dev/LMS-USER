import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation2 from '../../Navigation/Navigation2/Navigation2';
import './SearchCatalog.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableBody, TableHead, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        borderleft: 1
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const SearchCatalog = () => {
    const [state, setState] = useState({ type: '', branch: '', search_field: "title", search_text: "" });
    const [searchValue, setSearchValue] = useState([])
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
            <Navigation2 />
            <Container className="bg">
                <div className='search-outer'>
                    <div>
                        <h2>Search</h2>
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
                <div style={{ backgroundColor: "#F5F5F5" }}>
                    {/* table  */}
                    {
                        searchValue.length === 0 ? (
                            <p className='text-center mt-5 pd' >Please enter a search keyword to search the entire library catalog items. Use specific search field to fine tune your search result for ISBN/ISSN, Author, Publisher etc.</p>
                        ) : (
                            <TableContainer component={Paper}>
                                <Table aria-label="customized table">
                                    <TableHead>
                                        <TableRow >
                                            <StyledTableCell sx={{ border: 1 }} ></StyledTableCell>
                                            <StyledTableCell sx={{ fontSize: 13, border: 1 }}>Title</StyledTableCell>
                                            <StyledTableCell sx={{ fontSize: 13, border: 1 }} align="left">	Authors/Editors</StyledTableCell>
                                            <StyledTableCell sx={{ fontSize: 13, border: 1 }} align="left">Publisher</StyledTableCell>
                                            <StyledTableCell sx={{ fontSize: 13, border: 1 }} align="left">Type</StyledTableCell>
                                            <StyledTableCell sx={{ fontSize: 13, border: 1 }} align="left">Copies</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                 {searchValue.map((books) => (
                                            <StyledTableRow key={books._id}>
                                                <StyledTableCell component="th" scope="row" sx={{ borderRight: 1, borderColor: 'white' }} >
                                                    <img width="90px" src={books.img} alt="" />
                                                </StyledTableCell>
                                                <StyledTableCell component="th" scope="row" sx={{ borderRight: 1, borderColor: 'white' }}>
                                                    <Typography sx={{ fontWeight: 'bold' }} component="h6">
                                                        <Link to={`/letterA/${books._id}`}>{books.title}</Link>
                                                    </Typography>
                                                    <Typography sx={{ fontSize: 13 }}>Edition:{books.edition}</Typography>
                                                    <Typography sx={{ fontSize: 13 }}>Year:{books.publicationYear}</Typography>
                                                    <Typography sx={{ fontSize: 13 }}>ISBN 13:{books.ISBN13}</Typography>
                                                    <Typography sx={{ fontSize: 13 }}>Call No:{books.callNo}</Typography>
                                                </StyledTableCell>
                                                <StyledTableCell align="left" sx={{ borderRight: 1, borderColor: 'white' }}>{books.authors}</StyledTableCell>
                                                <StyledTableCell align="left" sx={{ borderRight: 1, borderColor: 'white' }}>{books.publisher}</StyledTableCell>
                                                <StyledTableCell align="left" sx={{ borderRight: 1, borderColor: 'white' }}>{books.type}</StyledTableCell>
                                                <StyledTableCell align="left">{books.copies}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )
                    }
                </div>
            </Container>
            <Footer />
        </div>
    );

};

export default SearchCatalog;