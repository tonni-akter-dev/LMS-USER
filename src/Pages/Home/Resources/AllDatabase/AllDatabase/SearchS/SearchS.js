import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Navigation2 from '../../../../Navigation/Navigation2/Navigation2';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableBody, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
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
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const SearchS = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/allBooks`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => filterDataValue(data));
    }, []);

    const filterDataValue = (data) => {
        const datas = data.filter(books => books.title.startsWith('S'))
        console.log(datas);
        setAllBooks(datas)
    }
    return (
        <div>
            <div>
                <Navigation2 />
                {/* catalog  */}
                <div>
                    <Container className="catalog-nav1 mt-3">
                        <Navbar expand="lg">
                            <Container className="catalog-nav">
                                <div>
                                    <h2>Results For 'S'</h2>
                                </div>
                            </Container>
                        </Navbar>
                        {/* table  */}
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
                                    {allBooks.map((books) => (
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
                    </Container>
                </div>
            </div>
        </div >
    );
};

export default SearchS;