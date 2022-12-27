import { Container, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Navigation2 from '../../../../../Navigation/Navigation2/Navigation2';
import './DetailsA.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const DetailsA = () => {
    let { id } = useParams();
    const [bookDetail, setBookDetail] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/allBooks/${id}`)
            .then((res) => res.json())
            .then((data) => setBookDetail(data));
    }, [id]);
    return (
        <div>
            <Navigation2 />
            <Container className='mt-5 booksDetails_Design'>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <TableContainer component={Paper}>
                            <h2>{bookDetail.title}</h2>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Type: </TableCell>
                                        <TableCell>{bookDetail.type}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Authors: </TableCell>
                                        <TableCell>{bookDetail.authors}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>ISBN 10: </TableCell>
                                        <TableCell>{bookDetail.ISBN10}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>ISBN 13: </TableCell>
                                        <TableCell>{bookDetail.ISBN13}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Category: </TableCell>
                                        <TableCell>{bookDetail.category}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Publication Year: </TableCell>
                                        <TableCell>{bookDetail.publicationYear}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Publisher: </TableCell>
                                        <TableCell>{bookDetail.publisher}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Tags: </TableCell>
                                        <TableCell>{bookDetail.tags}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Abstract: </TableCell>
                                        <TableCell>{bookDetail.abstract}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Description: </TableCell>
                                        <TableCell>{bookDetail.description}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Biblio Notes: </TableCell>
                                        <TableCell>{bookDetail.biblioNotes}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Number of Copies: </TableCell>
                                        <TableCell>{bookDetail.copies}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={3}>
                        <img src={bookDetail.img} alt="" />
                    </Grid>

                </Grid>

            </Container>





        </div>
    );
};

export default DetailsA;