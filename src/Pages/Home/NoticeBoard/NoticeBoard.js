import React, { useState, useEffect } from 'react';
import './NoticeBoard.css';
import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const NoticeBoard = () => {
  const [notice, setNotice] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/noticeboard")
      .then(res => res.json())
      .then(data => setNotice(data[0]))
  })
  return (
    <div className="noticebanner">

      <Row md={12}>
        <Col md={8}></Col>
        <Col md={4}>
         <div className='nText'>
        <h2>Notice--</h2>
         <h3>{notice.notice}</h3>
         </div>
      <button type="" className='btn btn-dark'>
        <Link to="/" className='nav_design1'>Back to Home</Link>
      </button>
        </Col>
      </Row>
    </div>
  );
};

export default NoticeBoard;