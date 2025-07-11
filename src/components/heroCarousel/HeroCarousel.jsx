import React from "react";
import { Link } from "react-router-dom";
import "./HeroCarousel.css"; 

const HeroCarousel = () => {
  return (
     <div
                    id="heroCarousel"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                    data-bs-interval="5000"
                    data-bs-pause="hover"
    
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/hero1.webp" className="d-block w-100" alt="Slide 1" />
                            <div className="carousel-caption d-none d-md-block">
                                <span className="badge">Premium Quality</span>
                                <h1 className="display-4 text-gold mt-3">Luxury Hair Collection</h1>
                                <p className="lead">Indulge in elegance, wear confidence.</p>
                                <Link
                                    to="/shop"
                                    className="btn btn-outline-light mt-3"
                                    onClick={(e) => e.stopPropagation()} // prevents triggering the slide
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/hero2.webp" className="d-block w-100" alt="Slide 2" />
                            <div className="carousel-caption d-none d-md-block">
                                <span className="badge">Hair Care Experts</span>
                                <h1 className="display-4 text-gold mt-3">Nourish Your Hair</h1>
                                <p className="lead">Gentle care, luxury results.</p>
                                <Link
                                    to="/haircare"
                                    className="btn btn-outline-light mt-3"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Explore Care
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/hero3.webp" className="d-block w-100" alt="Slide 3" />
                            <div className="carousel-caption d-none d-md-block">
                                <span className="badge">Signature Styles</span>
                                <h1 className="display-4 text-gold mt-3">Wigs for Every Queen</h1>
                                <p className="lead">Confidence starts at the crown.</p>
                                <Link
                                    to="/wigs"
                                    className="btn btn-outline-light mt-3"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    See Collection
                                </Link>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" />
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" />
                    </button>
                </div>
  )
}

export default HeroCarousel