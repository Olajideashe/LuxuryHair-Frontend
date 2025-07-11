import React from 'react';
import './HairCosmetics.css'; // 👈 Import custom styles (create this file)

const HairCosmetics = () => {
    const itemsLeft = [
        {
            icon: '/curly.png',
            title: "Curly Comb",
            text: "Perfect for detangling and defining curls with care.",
        },
        {
            icon: '/mirror.webp',
            title: "Mirror",
            text: "Reflect your beauty from every angle in high clarity.",
        },
        {
            icon: '/straightner.png',
            title: "Hair Straightener",
            text: "Smooth and sleek results, perfect for any style.",
        },
    ];

    const itemsRight = [
        {
            icon: '/chair.png',
            title: "Salon Chair",
            text: "Sit back in luxury while your style is perfected.",
        },
        {
            icon: '/scissors.webp',
            title: "Scissors",
            text: "Crafted for precision cuts and flawless finishes.",
        },
        {
            icon: '/comb.png',
            title: "Comb",
            text: "Essential styling tool for everyday grooming.",
        },
    ];

    return (
        <section className=" text-light py-5 playfair-font">
            <div className="container text-center">
                <h2 className="mb-2">Hair Cosmetics</h2>
                <p className="mb-5">Discover our luxurious tools designed for ultimate hair care.</p>

                <div className="row align-items-center">
                    {/* Left Image Icons */}
                    <div className="col-md-4">
                        {itemsLeft.map(({ icon, title, text }, i) => (
                            <div className="d-flex mb-4" key={i}>
                                <img
                                    src={icon}
                                    alt={title}
                                    className="me-3 icon-hover"
                                />
                                <div className="text-start text-md-start">
                                    <h5 className="mb-1">{title}</h5>
                                    <p className="mb-0">{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Product Image */}
                    <div className="col-md-4 text-center my-4 my-md-0">
                        <img
                            src="/product.webp"
                            alt="Hair Product"
                            className="img-fluid"
                            style={{ maxHeight: "400px", objectFit: "contain" }}
                        />
                    </div>

                    {/* Right Image Icons */}
                    <div className="col-md-4">
                        {itemsRight.map(({ icon, title, text }, i) => (
                            <div className="d-flex mb-4" key={i}>
                                <img
                                    src={icon}
                                    alt={title}
                                    className="me-3 icon-hover"
                                />
                                <div className="text-start text-md-start">
                                    <h5 className="mb-1">{title}</h5>
                                    <p className="mb-0">{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HairCosmetics;
