import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const testimonials = [
  {
    name: "Amope M.",
    message: "Absolutely love the quality of the hair. I felt like royalty the moment I wore it!",
    image: "/user1.webp",
  },
  {
    name: "Kofoworola O.",
    message: "Fast delivery and even better service. This is my go-to hair brand now.",
    image: "/user2.webp",
  },
  {
    name: "Iretomiwa B.",
    message: "The texture is everything. I received so many compliments at the event!",
    image: "/user3.webp",
  },
];

// Custom arrows
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <BsArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <BsArrowLeft />
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Testimonial = () => {
  return (
    <section className="testimonial-section py-5">
      <div className="container text-center position-relative">
        <h2 className="section-title mb-5">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map(({ name, message, image }, i) => (
            <div key={i}>
              <div className="testimonial-box p-4 mx-auto">
                <img
                  src={image}
                  alt={name}
                  className="testimonial-avatar mb-3"
                />
                <p className="testimonial-message mb-3">“{message}”</p>
                <h6 className="testimonial-name">{name}</h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
