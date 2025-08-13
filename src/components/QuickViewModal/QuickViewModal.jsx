import React, { useState, useEffect } from "react";
import "./QuickViewModal.css";

const QuickViewModal = ({ product, onClose, onAddToCart, onAddToWishlist }) => {
    if (!product) return null;

    const [quantity, setQuantity] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);
    const [price, setPrice] = useState(product.price);

    const { type, options = [], colors = [] } = product;

    useEffect(() => {
        if (selectedOption) {
            const match = options.find((opt) => opt.label === selectedOption);
            if (match) setPrice(match.price);
        } else {
            setPrice(product.price);
        }
    }, [selectedOption, product.price, options]);

    const getLabel = () => {
        switch (type) {
            case "hair":
                return "Length:";
            case "haircare":
                return "Size (ml):";
            case "accessory":
                return "Size:";
            default:
                return "Option:";
        }
    };

    return (
        <div className="quickview-modal-wrapper">

            <div className="quickview-modal-overlay" onClick={onClose}>
                <div className="quickview-modal" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={onClose}>×</button>

                    <div className="quickview-content">
                        <img src={product.image} alt={product.title} className="quickview-img" />
                        <div className="quickview-info">
                            <h3 className="quickview-title">{product.title}</h3>
                            <h4 className="quickview-description">Description</h4>
                            <p className="quickview-description-text">{product.description}</p>
                            <p className="quickview-price">₦{price.toLocaleString()}</p>

                            {/* Size/Length Selection */}
                            {options.length > 0 && (
                                <div className="length-options">
                                    <strong>{getLabel()}</strong>
                                    <select
                                        className="size-dropdown"
                                        value={selectedOption || ""}
                                        onChange={(e) => setSelectedOption(e.target.value)}
                                    >
                                        <option value="">Choose...</option>
                                        {options.map((opt) => (
                                            <option key={opt.label} value={opt.label}>
                                                {opt.label} - ₦{opt.price}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {/* Color only for hair */}
                            {type === "hair" && colors.length > 0 && (
                                <div className="color-options">
                                    <strong>Color:</strong>
                                    <p>{colors.join(", ")}</p>
                                </div>
                            )}

                            {/* Quantity */}
                            <div className="quantity-controls">
                                <strong>Quantity:</strong>
                                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity((q) => q + 1)}>+</button>
                            </div>

                            {/* Action Buttons */}
                            <div className="modal-actions">
                                <button
                                    className="btn-add"
                                    onClick={() =>
                                        onAddToCart({
                                            ...product,
                                            quantity,
                                            selectedOption,
                                            price,
                                        })
                                    }
                                >
                                    Add to Cart
                                </button>
                                <button className="btn-wishlist" onClick={() => onAddToWishlist(product)}>
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;
