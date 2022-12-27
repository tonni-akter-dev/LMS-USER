import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation2 from '../Navigation/Navigation2/Navigation2';

const AskALibrarian = () => {
    return (
        <div>
            <Navigation2 />
            <Container className='database_bg'>
                <h2 className="margin-b30">Ask a Librarian.....</h2>
                <h6>A dedicated institute for quality higher education.</h6>
                <h6>Email: library@pu.edu.bd</h6>
                <h6>Phone:+8801766554433</h6>
                <h6>Website: <a className='text-dark' href="http://presidency.edu.bd">http://presidency.edu.bd</a></h6>
            </Container>
            <Footer />

        </div>
    );
};

export default AskALibrarian; 