import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Navigation2 from '../../Navigation/Navigation2/Navigation2';
import './AllDatabase.css'
const AllDatabase = () => {
    return (
        <div>
            <Navigation2 />
            <Container className='database_bg'>
                <h2 className="margin-b30">Database A-Z</h2>
                <div className='database_div'>
                    <div className="col-md-12">
                        <div className="media index content-body border-r5">
                            <div className="text-center" >
                                <div className="database buttons buttons-medium buttons-secondary buttons-space">
                                    <Link to="/letterA">A</Link>

                                    <Link to="/letterB">B</Link>

                                    <Link to="/letterC">C</Link>
                                    <Link to="/letterD">D</Link>
                                    <Link to="/letterE">E</Link>
                                    <Link to="/letterF">F</Link>
                                    <Link to="/letterG">G</Link>
                                    <Link to="/letterH">H</Link>
                                    <Link to="/letterI">I</Link>
                                    <Link to="/letterJ">J</Link>
                                    <Link to="/letterK">K</Link>
                                    <Link to="/letterL">L</Link>
                                    <Link to="/letterM">M</Link>
                                    <Link to="/letterN">N</Link>
                                    <Link to="/letterO">O</Link>
                                    <Link to="/letterP">P</Link>
                                    <Link to="/letterQ">Q</Link>
                                    <Link to="/letterR">R</Link>
                                    <Link to="/letterS">S</Link>
                                    <Link to="/letterT">T</Link> <br /> <br />
                                    <Link to="/letterU">U</Link>
                                    <Link to="/letterV">V</Link>
                                    <Link to="/letterW">W</Link>
                                    <Link to="/letterX">X</Link>
                                    <Link to="/letterY">Y</Link>
                                    <Link to="/letterZ">Z
                                    </Link>
                                </div>

                                <div className="mt-5 database buttons buttons-medium buttons-dark buttons-space margin-t15">
                                    <Link to="/letter0">0</Link>
                                    <Link to="/letter1">1</Link>
                                    <Link to="/letter2">2</Link>
                                    <Link to="/letter3">3</Link>
                                    <Link to="/letter4">4</Link>
                                    <Link to="/letter5">5</Link>
                                    <Link to="/letter6">6</Link>
                                    <Link to="/letter7">7</Link>
                                    <Link to="/letter8">8</Link>
                                    <Link to="/letter9">9</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default AllDatabase;