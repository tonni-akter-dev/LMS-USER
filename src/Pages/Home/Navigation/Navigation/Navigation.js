import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
import './Navigation.css';
const Navigation = () => {
    // const { user, logout } = useAuth();

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
    // login logout matter
    const isLoggedIn = window.localStorage.getItem('loggedIn');
    const logout = () => {
        window.localStorage.clear();
        window.location.href = "/login"
    }
    return (
        <div>

            <Navbar className="nav_bg" expand="lg">
                <Container>
                    <NavLink className='navlink_design' to="/"><img height="50px"
                        src="https://i.ibb.co/y48PY0V/pu-logo-1.png" alt="" /> Presidency University Library
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className='navlink_design1' to="/">Home</NavLink>
                            <NavLink className='navlink_design1' to="/catalog">Catalog </NavLink>
                            <NavLink className='navlink_design1' to="/searchcatalog">Search Catalog </NavLink>

                            <NavDropdown
                                className="navDesign1"
                                id="basic-nav-dropdown"
                                title={
                                    <span className="navlink_design1">Resources</span>
                                }
                                show={show}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}
                            >
                                <NavDropdown.Item to="/alldatabase">
                                    <NavLink
                                        className=""
                                        style={{ color: "black", textDecoration: "none" }}
                                        to="/alldatabase"
                                    >
                                        All Database
                                    </NavLink>
                                </NavDropdown.Item>
                                {/* <NavDropdown.Item to="/newcollection">
                                    <NavLink
                                        className=""
                                        style={{ color: "black", textDecoration: "none" }}
                                        to="/newcollection"
                                    >
                                        New Collection
                                    </NavLink>
                                </NavDropdown.Item> */}
                                {/* <NavDropdown.Item to="/topcollection">
                                    <NavLink
                                        className=""
                                        style={{ color: "black", textDecoration: "none" }}
                                        to="/topcollection"
                                    >
                                        Top Collection
                                    </NavLink>
                                </NavDropdown.Item> */}
                                <NavDropdown.Item to="/asklibrarian">
                                    <NavLink
                                        className=""
                                        style={{ color: "black", textDecoration: "none" }}
                                        to="/asklibrarian"
                                    >
                                        Ask a librarian?
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            {isLoggedIn==='true' ? (
                                <NavDropdown
                                    className="navDesign1 dropdown"
                                    id="basic-nav-dropdown"
                                    title="dropdown"
                                    // title={
                                    //     <span className="navlink_design1"> {user.email && user.photoURL ? (
                                    //         <img
                                    //             src={user.photoURL}
                                    //             className="ms-3 rounded-pill"
                                    //             style={{ width: "30px" }}
                                    //             alt=""
                                    //         />
                                    //     ) : (
                                    //         <img
                                    //             src="https://i.ibb.co/gPS4kB7/women.png"
                                    //             className="ms-3 rounded-pill"
                                    //             style={{ width: "50px" }}
                                    //             alt=""
                                    //         />
                                    //     )}</span>
                                    // }
                                    show={show1}
                                    onMouseEnter={showDropdown1}
                                    onMouseLeave={hideDropdown1}
                                >
                                    <NavDropdown.Item to="/dashboard/myaccount">
                                        <NavLink className='navlink_design1' to="/dashboard/myaccount">My Profile</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item to="/dashboard">
                                        <NavLink className='navlink_design1' to="/dashboard">Dashboard</NavLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item to="/">
                                        <NavLink className='navlink_design1' to="/login"><button
                                            className="btn btn-dark"
                                            style={{ width: "150px" }}
                                            onClick={logout}
                                        >
                                            Logout
                                        </button>
                                        </NavLink>
                                    </NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                <NavLink className='navlink_design1' to="/login">Login</NavLink>)}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;