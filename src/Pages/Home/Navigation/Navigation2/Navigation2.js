import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useAuth from '../../../hooks/useAuth';
import '../Navigation/Navigation.css'
const Navigation2 = () => {
    const { user, logout } = useAuth();

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    const showDropdown1 = (e) => {
        setShow1(!show1);
    }
    const hideDropdown1 = e => {
        setShow1(false);
    }
    return (
        <div>
            <Navbar className="nav_bg" expand="lg">
                <Container>
                    <NavLink className='navlink_design' to="/"><img height="50px"
                        src="https://i.ibb.co/y48PY0V/pu-logo-1.png" alt="" /> Presidency University Library
                    </NavLink>

                    {/* jhgfyujhvy8u */}
                    <Nav className="ms-auto">
                        <NavLink className='navlink_design2' to="/login"><button className='btn btn-dark nav2-login-btn'>Login</button>
                        </NavLink>
                    </Nav>
                    {/* jhgfyujhvy8u */}
                </Container>
            </Navbar>
            <Navbar className="nav_bg1" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='navlink_design2' to="/">Home</NavLink>
                            <NavLink className='navlink_design2' to="/about">About </NavLink>
                            <NavLink className='navlink_design2' to="/catalog">Catalog </NavLink>
                            <NavLink className='navlink_design2' to="/searchcatalog">Search Catalog </NavLink>


                            <NavLink
                                className="navlink_design2"

                                to="/alldatabase"
                            >
                                All Database
                            </NavLink>
                            <NavLink
                                className="navlink_design2"

                                to="/topcollection"
                            >
                                Top Collection
                            </NavLink>
                            <NavLink
                                className="navlink_design2"

                                to="/asklibrarian"
                            >
                                Ask a librarian?
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation2;