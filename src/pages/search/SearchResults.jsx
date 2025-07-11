import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
    BsCart,
    BsSearch,
    BsPerson,
    BsGlobe,
} from "react-icons/bs";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./SearchResults.css";

const SearchResults = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Luxury Wig",
            variant: "Body Wave / 22''",
            price: 120,
            quantity: 1,
            image: "/wig1.webp",
        },
        {
            id: 2,
            name: "Hair Serum",
            variant: "100ml",
            price: 25,
            quantity: 2,
            image: "/serum.webp",
        },
    ]);

    const navigate = useNavigate();

    const handleSearchSubmit = () => {
        navigate(`/search-results?query=${encodeURIComponent(searchInput.trim())}`);
        setShowSearch(false);
        setSearchInput("");
    };

    const updateQuantity = (itemId, delta) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === itemId
                    ? {
                        ...item,
                        quantity: Math.max(1, item.quantity + delta),
                    }
                    : item
            )
        );
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
        <div>
            <header>
                <Navbar expand="lg" className="navbar" variant="dark">
                    <Container fluid>
                        <Link className="navbar-brand d-flex align-items-center" to="/">
                            <img src="/ire-hairmpire-logo.png" alt="Luxury Hair Logo" className="logo-img me-2" />
                            <span className="brand-name">Ire Hairmpire</span>
                        </Link>

                        <Navbar.Toggle aria-controls="main-navbar" />
                        <Navbar.Collapse id="main-navbar" className="justify-content-center">
                            <Nav className="mx-auto text-center">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/collection">Collection</Nav.Link>
                                <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                                <Nav.Link as={Link} to="/haircare">Haircare</Nav.Link>
                                <NavDropdown title="Pages" id="pages-dropdown">
                                    <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>

                        <div className="d-flex align-items-center icon-links ms-auto">
                            <BsSearch className="nav-icon" onClick={() => setShowSearch(true)} />
                            <BsCart className="nav-icon" onClick={() => setShowCart(true)} />
                            <BsGlobe className="nav-icon" />
                            <Link to="/login"><BsPerson className="nav-icon" /></Link>
                        </div>
                    </Container>
                </Navbar>

                {/* Cart Modal */}
                {showCart && (
                    <div className="cart-modal">
                        <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
                        <div className="cart-content">
                            <h4>Your Cart</h4>
                            {cartItems.length === 0 ? (
                                <p>No items in cart.</p>
                            ) : (
                                <>
                                    {cartItems.map(item => (
                                        <div className="cart-item d-flex align-items-center mb-3" key={item.id}>
                                            <img src={item.image} alt={item.name} className="cart-item-img me-3" />
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">{item.name}</h6>
                                                <small className="d-block">{item.variant}</small>
                                                <div className="d-flex align-items-center mt-2">
                                                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                                                    <span className="mx-2">{item.quantity}</span>
                                                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <strong>₦{(item.price * item.quantity).toLocaleString()}</strong>
                                            </div>
                                        </div>
                                    ))}
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <strong>Total:</strong>
                                        <strong>₦{calculateTotal().toLocaleString()}</strong>
                                    </div>
                                    <small className="text-muted d-block mt-2 mb-3">Shipping & taxes calculated at checkout.</small>
                                    <div className="d-grid gap-2">
                                        <Link to="/checkout" className="btn btn-outline-light" onClick={() => setShowCart(false)}>Proceed to Checkout</Link>
                                        <Link to="/cart" className="btn btn-outline-light" onClick={() => setShowCart(false)}>View Cart</Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Search Modal */}
                {showSearch && (
                    <div className="search-modal">
                        <button className="close-btn" onClick={() => setShowSearch(false)}>×</button>
                        <div className="search-content">
                            <h4>Search our store</h4>
                            <input
                                type="text"
                                className="form-control mt-3"
                                placeholder="Type to search..."
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <button className="btn btn-outline-light mt-3" onClick={handleSearchSubmit}>
                                Search
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Search Results Section */}
            <section className="container py-5 text-center">
                <div className="search-results-box">
                    <h2 className="mb-3">Search Results</h2>
                    <p className="lead">You searched for: <strong>{query || "Nothing"}</strong></p>
                    <div className="custom-alert">
                        Search functionality coming soon.
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SearchResults;
