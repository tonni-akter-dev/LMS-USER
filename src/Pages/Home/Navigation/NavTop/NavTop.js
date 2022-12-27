import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './NavTop.css';
const NavTop = () => {
    return (
        <div>
            <div className='notice_board'>
                <Container className='link_style'>
                    <div>
                        <span className='office_info'><i className="fas fa-envelope"></i> library@pu.edu.bd</span>
                        <span className='office_info'><i className="fas fa-phone"></i> +8801766554433</span>
                    </div>
                    <Link to="/noticeboard" className='notice'>Notice Board</Link>
                </Container>
            </div>
        </div>
    );
};

export default NavTop;