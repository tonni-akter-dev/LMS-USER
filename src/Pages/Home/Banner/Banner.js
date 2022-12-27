import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
  return (
    <div>
      <Carousel>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/2Wd4Q9z/banner-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div  className="banner_bg_color">
             <div>
             <h4>Notice Board</h4>
              <p>Sunday to Thursday : 08.00 am - 09.30 pm</p>
              <p>Friday: 10.00 am - 06.00 pm</p>
              <p>Saturday : 10.00 am -09.00 pm</p>
             </div>
             </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/10v1F5m/banner3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div  className="banner_bg_color">
             <div>
             <h4>Notice Board</h4>
              <p>Sunday to Thursday : 08.00 am - 09.30 pm</p>
              <p>Friday: 10.00 am - 06.00 pm</p>
              <p>Saturday : 10.00 am -09.00 pm</p>
             </div>
             </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/2Wd4Q9z/banner-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div  className="banner_bg_color">
             <div>
             <h4>Notice Board</h4>
              <p>Sunday to Thursday : 08.00 am - 09.30 pm</p>
              <p>Friday: 10.00 am - 06.00 pm</p>
              <p>Saturday : 10.00 am -09.00 pm</p>
             </div>
             </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/10v1F5m/banner3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div  className="banner_bg_color">
             <div>
             <h4>Notice Board</h4>
              <p>Sunday to Thursday : 08.00 am - 09.30 pm</p>
              <p>Friday: 10.00 am - 06.00 pm</p>
              <p>Saturday : 10.00 am -09.00 pm</p>
             </div>
             </div>
          </Carousel.Caption>
        </Carousel.Item>




        {/*   <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/10v1F5m/banner3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/2Wd4Q9z/banner-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/10v1F5m/banner3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default Banner;