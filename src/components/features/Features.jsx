import React from 'react'
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: '/quality.png',
            title: 'Top Quality',
            text: 'Only the finest products and materials for your hair.',
        },
        {
            icon: '/delivery.png',
            title: 'Fast Delivery',
            text: 'Swift and secure delivery right to your doorstep.',
        },
        {
            icon: '/support.png',
            title: '24/7 Support',
            text: 'We are here for you anytime you need help.',
        },
    ];

    return (
        <section className="other-features-section py-5">
            <div className="container text-center">
                <h2 className="section-title mb-5">Other Features</h2>
                <div className="row">
                    {features.map(({ icon, title, text }, i) => (
                        <div className="col-md-4 mb-4" key={i}>
                            <div className="feature-box p-4 h-100">
                                <img
                                    src={icon}
                                    alt={title}
                                    className="mb-3 feature-icon"
                                />
                                <h5 className="feature-title mb-2">{title}</h5>
                                <p className="feature-text mb-0">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features