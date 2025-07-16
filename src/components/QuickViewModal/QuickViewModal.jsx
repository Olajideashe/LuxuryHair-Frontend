import React, { useState, useEffect } from "react";
import "./QuickViewModal.css";

const QuickViewModal = ({ product, onClose, onAddToCart, onAddToWishlist }) => {
    // ✅ Return nothing if product is not passed
    if (!product) return null;

    const [quantity, setQuantity] = useState(1);
    const [selectedLength, setSelectedLength] = useState(null);
    const [price, setPrice] = useState(product.price);

    const lengths = product.lengths || [
        { label: '8"', price: 99 },
        { label: '10"', price: 119 },
        { label: '12"', price: 139 },
        { label: '14"', price: 159 },
        { label: '16"', price: 179 },
        { label: '18"', price: 199 },
        { label: '20"', price: 179 },
        { label: '22"', price: 219 },
    ];

    const colors = product.colors || ["Jet Black", "Golden Brown"];

    useEffect(() => {
        if (selectedLength) {
            const selected = lengths.find((len) => len.label === selectedLength);
            if (selected) setPrice(selected.price);
        } else {
            setPrice(product.price);
        }
    }, [selectedLength, product]);

    return (
        <div className="quickview-modal-overlay" onClick={onClose}>
            <div className="quickview-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                <div className="quickview-content">
                    <img src={product.image} alt={product.title} className="quickview-img" />
                    <div className="quickview-info">
                        <h3 className="quickview-title">{product.title}</h3>
                        <p className="quickview-price">₦{price.toLocaleString()}</p>

                        {/* Length Options */}
                        <div className="length-options">
                            <strong>Length:</strong>
                            <div className="length-buttons">
                                {lengths.map((len) => (
                                    <button
                                        key={len.label}
                                        className={selectedLength === len.label ? "active" : ""}
                                        onClick={() => setSelectedLength(len.label)}
                                    >
                                        {len.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color Options */}
                        <div className="color-options">
                            <strong>Color:</strong>
                            <p>{colors.join(", ")}</p>
                        </div>

                        {/* Quantity */}
                        <div className="quantity-controls">
                            <strong>Quantity:</strong>
                            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
                        </div>

                        {/* Buttons */}
                        <div className="modal-actions">
                            <button
                                className="btn-add"
                                onClick={() => onAddToCart({ ...product, quantity, price })}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="btn-wishlist"
                                onClick={() => onAddToWishlist(product)}
                            >
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;
