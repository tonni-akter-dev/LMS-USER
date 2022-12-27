import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
/* 
https://i.ibb.co/ZMGdP18/1.jpg
https://i.ibb.co/MMZHfXK/2.jpg
https://i.ibb.co/r0vbcwm/3.jpg
https://i.ibb.co/F3VpmbP/4.jpg
https://i.ibb.co/KFrGRXz/5.jpg
https://i.ibb.co/SPMDT3s/6.jpg
https://i.ibb.co/MDZvxWM/7.jpg
https://i.ibb.co/XzgsQB3/8.jpg
*/
const images = [
    {
        img: "https://i.ibb.co/ZMGdP18/1.jpg"
    },
    {
        img: "https://i.ibb.co/MMZHfXK/2.jpg"
    },
    {
        img: "https://i.ibb.co/r0vbcwm/3.jpg"
    },
    {
        img: "https://i.ibb.co/F3VpmbP/4.jpg"
    },
    {
        img: "https://i.ibb.co/KFrGRXz/5.jpg"
    },
    {
        img: "https://i.ibb.co/ZMGdP18/1.jpg"
    },
    {
        img: "https://i.ibb.co/MMZHfXK/2.jpg"
    },
    {
        img: "https://i.ibb.co/r0vbcwm/3.jpg"
    },
    {
        img: "https://i.ibb.co/F3VpmbP/4.jpg"
    },
    {
        img: "https://i.ibb.co/KFrGRXz/5.jpg"
    },
]


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}
const BookSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        className: "center",
        centerPadding: "60px",
        slidesToShow: 6,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    return (
        <Container>
            <div className='mt-5'>
                <h4 className="texts mb-4 p_texts">Programming Books</h4>
                <br />
            </div>
            <div>
                <Slider {...settings}>
                    {
                        images.map(image =>
                            <div>
                                <img width="150px" src={image.img} className="img-fluid" alt="" />
                            </div>

                        )
                    }

                </Slider>
            </div>
        </Container>
    );
};

export default BookSlider;