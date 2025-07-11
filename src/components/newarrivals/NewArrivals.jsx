import React, { useState } from "react";
import Slider from "react-slick";
import { BsHeart, BsEye } from "react-icons/bs";
import "./NewArrivals.css";

const products = [
    {
        id: 1,
        title: "Blonde Hair Wig",
        price: 500,
        image: "/blondehairwig.webp",
    },
    {
        id: 2,
        title: "Golden Brown Hair",
        price: 700,
        image: "/goldenbrownhair.webp",
    },
    {
        id: 3,
        title: "Human Hair Long",
        price: 300,
        image: "/humanhairlong.webp",
    },
    {
        id: 4,
        title: "Long Golden Wig",
        price: 300,
        image: "/longgoldenwig.webp",
    },
    {
        id: 5,
        title: "Brown Hair Wig",
        price: 200,
        image: "/brownhairwig.webp",
    },
    {
        id: 6,
        title: "Brunette Long Hair",
        price: 500,
        image: "/brunettelonghair.webp",
    },
    {
        id: 7,
        title: "Jet Black Wig",
        price: 500,
        image: "/jetblackwig.webp",
    },
    {
        id: 8,
        title: "Long Hair Wig",
        price: 100,
        image: "/longhairwig.webp",
    },
    {
        id: 9,
        title: "Silky Human Hair",
        price: 300,
        image: "/silkyhumanhair.webp",
    },
    {
        id: 10,
        title: "Long Curly Wig",
        price: 200,
        image: "/longcurlywig.webp",
    },
];


const NewArrivals = () => {
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [quickViewProduct, setQuickViewProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleAddToWishlist = (product) => {
        setWishlist((prev) => [...prev, product]);
        // connect to global state or backend later
    };

    const handleAddToCart = () => {
        setCart((prev) => [
            ...prev,
            { ...quickViewProduct, quantity },
        ]);
        setQuickViewProduct(null);
        setQuantity(1);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="new-arrivals-section">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="section-title">New Arrivals</h2>
                    <p className="section-subtitle">Just in store</p>
                </div>


                <Slider {...settings}>
                    {products.map((product) => (
                        <div className="product-card" key={product.id}>
                            <div className="product-image-wrapper">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="product-img"
                                />
                                <div className="product-hover-actions">
                                    <BsHeart
                                        title="Add to Wishlist"
                                        onClick={() => handleAddToWishlist(product)}
                                    />
                                    <BsEye
                                        title="Quick View"
                                        onClick={() => {
                                            setQuickViewProduct(product);
                                            setQuantity(1);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="product-details">
                                <p className="product-title">{product.title}</p>
                                <p className="product-price">₦{product.price.toLocaleString()}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Quick View Modal */}
            {quickViewProduct && (
                <div className="quickview-modal-overlay" onClick={() => setQuickViewProduct(null)}>
                    <div className="quickview-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setQuickViewProduct(null)}>×</button>
                        <div className="quickview-content">
                            <img src={quickViewProduct.image} alt={quickViewProduct.title} />
                            <div className="quickview-info">
                                <h3>{quickViewProduct.title}</h3>
                                <p className="price">₦{quickViewProduct.price.toLocaleString()}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity((q) => q + 1)}>+</button>
                                </div>
                                <p className="details">{quickViewProduct.details}</p>
                                <div className="modal-actions">
                                    <button className="btn-add" onClick={handleAddToCart}>Add to Cart</button>
                                    <button className="btn-wishlist" onClick={() => handleAddToWishlist(quickViewProduct)}>Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default NewArrivals;