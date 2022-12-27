import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeBooks.css'
const HomeBooks = () => {
    const [homeBooks, setHomeBooks] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/homebooks`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setHomeBooks(data));
    }, []);
    /* 
https://i.ibb.co/5c6HgQ9/8.jpg
https://i.ibb.co/SrM4hHd/7.jpg
https://i.ibb.co/SrM4hHd/7.jpg
https://i.ibb.co/GHwRc70/5.jpg
https://i.ibb.co/HzsgtJd/4.jpg
https://i.ibb.co/ZH7R3X2/3.jpg
https://i.ibb.co/QdKdQtT/2.jpg
https://i.ibb.co/tsNq57c/1.jpg
    
    */
    return (
        <div className="homebooks_background">
            <div class="team-grid">
                <div class="container">
                    <div class="intro">
                        <h4 class="finding_books">--Find Books Here--</h4>
                    </div>
                    <div class="row people d-flex justify-content-center">
                        {
                            homeBooks.map(homebook => (
                                <div class="col-md-3 col-lg-3 item">
                                    <div class="box" style={{
                                        backgroundImage: `url(${homebook.img})`,
                                    }}>
                                        <div class="cover">
                                            <h6 class="name">{homebook.title}</h6>
                                            <p class="title">Author: {homebook.authors}</p>
                                            <p>ISBN: {homebook.ISBN10}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Link to='/' className=' ms-auto homebooks_btn' > <h4 class="finding_books">More Books</h4></Link>
                </div>
            </div>
        </div >
    );
};

export default HomeBooks;