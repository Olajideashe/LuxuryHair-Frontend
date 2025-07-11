import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Shop.css";
import { BsHeart, BsHeartFill } from "react-icons/bs";

// Dummy data
const allProducts = [
  { id: 1, title: "Silky Human Hair", price: 300, image: "/silkyhumanhair.webp", category: "Silky Hair" },
  { id: 2, title: "Wavy Extension", price: 250, image: "/wavyextension.webp", category: "Thick Hair" },
  { id: 3, title: "Straight Hair Wig", price: 180, image: "/straighthairwig.webp", category: "Straight Hair" },
  { id: 4, title: "Long Hair Wig", price: 100, image: "/longhairwig.webp", category: "Curly Hair" },
  { id: 5, title: "Golden Brown Wig", price: 220, image: "/goldenbrownhair.webp", category: "New Product" },
  { id: 6, title: "Jet Black Wig", price: 310, image: "/jetblackwig.webp", category: "Featured Product" },
  { id: 7, title: "Brown Extension", price: 270, image: "/brownextension.webp", category: "Straight Hair" },
  { id: 8, title: "Orange Curly", price: 290, image: "/orangecurly.webp", category: "Curly Hair" },
  { id: 9, title: "Blonde Wig", price: 350, image: "/blondehairwig.webp", category: "Best Seller" },
];

const categories = [
  "Best Seller",
  "Curly Hair",
  "Demand Product",
  "Featured Product",
  "New Product",
  "Silky Hair",
  "Straight Hair",
  "Thick Hair",
];

const Shop = () => {
  const [products, setProducts] = useState(allProducts);
  const [search, setSearch] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 6;
  const totalPages = Math.ceil(products.length / perPage);

  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  // Reset filters
  const resetFilters = () => {
    setSelectedPrice(null);
    queryParams.delete("category");
    navigate("/shop");
  };

  // Search and filter
  useEffect(() => {
    let filtered = [...allProducts];

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedPrice) {
      const [min, max] = selectedPrice;
      filtered = filtered.filter((p) => p.price >= min && p.price <= max);
    }

    if (search) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setProducts(filtered);
    setCurrentPage(1);
  }, [search, selectedPrice, selectedCategory, sortOrder]);

  // Wishlist toggle
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Pagination
  const paginatedProducts = products.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="collection-detail-page">
      <div className="container d-flex">
        {/* Sidebar */}
        <aside className="filter-sidebar">
          <h5 className="filter-sidebar-heading">Category</h5>
          <ul>
            {categories.map((cat) => (
              <li key={cat}>
                <Link to={`/shop?category=${encodeURIComponent(cat)}`}>
                  {cat}
                </Link>
              </li>
            ))}
          </ul>

          <h5 className="filter-sidebar-heading">Shop By Price</h5>
          <div className="price-filters">
            <button onClick={() => setSelectedPrice([100, 200])}>₦100 - ₦200</button>
            <button onClick={() => setSelectedPrice([200, 300])}>₦200 - ₦300</button>
            <button onClick={() => setSelectedPrice([300, 500])}>₦300 - ₦500</button>
          </div>
          <button onClick={resetFilters} className="reset-btn">Reset Filters</button>
        </aside>

        {/* Main Content */}
        <main className="product-grid-section">
          <h2 className="collection-title">Shop All Products</h2>

          <div className="toolbar">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select onChange={(e) => setSortOrder(e.target.value)}>
              <option value="">Sort by</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>

          <div className="product-grid">
            {paginatedProducts.length === 0 ? (
              <p>No products found.</p>
            ) : (
              paginatedProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                  <span>₦{product.price.toLocaleString()}</span>
                  <button
                    className="wishlist-icon"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    {wishlist.includes(product.id) ? <BsHeartFill color="red" /> : <BsHeart />}
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Pagination Controls */}
          <div className="pagination">
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
