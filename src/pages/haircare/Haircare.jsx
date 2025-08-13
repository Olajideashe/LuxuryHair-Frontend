import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsHeart, BsHeartFill, BsEye } from "react-icons/bs";
import QuickViewModal from "../../components/QuickViewModal/QuickViewModal";
import "./Haircare.css"; // reuse the Shop styles

// Dummy Haircare Products
const haircareProducts = [
  { id: 1, title: "Argan Oil Shampoo", price: 120,type: "haircare", image: "/argan-shampoo.jpg", category: "Hair Treatments", type: "haircare",
  options: [
    { label: "100ml", price: 30 },
    { label: "250ml", price: 60 },
    { label: "500ml", price: 100 },
  ] },
  { id: 2, title: "Hot Comb", price: 120, image: "/hotcomb.jpg", category: "Hair Tools", type: "hairtool" },
  { id: 3, title: "Keratin Repair Conditioner", price: 150, image: "/keratin-conditioner.jpg", category: "Hair Treatments", type: "haircare",
  options: [
    { label: "100ml", price: 30 },
    { label: "250ml", price: 60 },
    { label: "500ml", price: 100 },
  ] },
  { id: 4, title: "Wig Net", price: 25, image: "/wignet.jpg", category: "Hair Accessories", type: "accessory",
  options: [
    { label: "S", price: 10 },
    { label: "M", price: 15 },
    { label: "L", price: 20 },
  ] },
  { id: 5, title: "Scalp Treatment Oil", price: 200, image: "/scalp-treatment.jpg", category: "Hair Treatments", type: "haircare",
  options: [
    { label: "100ml", price: 30 },
    { label: "250ml", price: 60 },
    { label: "500ml", price: 100 },
  ] },
  { id: 6, title: "Mannequin Head", price: 300, image: "/mannequinhead.jpg", category: "Mannequin & Stands", type: "accessory",
  options: [
    { label: "S", price: 10 },
    { label: "M", price: 15 },
    { label: "L", price: 20 },
  ] },
  { id: 7, title: "Leave-In Hair Mask", price: 180, image: "/hair-mask.jpg", category: "Hair Treatments", type: "haircare",
  options: [
    { label: "100ml", price: 30 },
    { label: "250ml", price: 60 },
    { label: "500ml", price: 100 },
  ] },
  { id: 8, title: "Straightener", price: 180, image: "/straightener.jpg", category: "Hair Tools", type: "hairtool" },
  { id: 9, title: "Hydrating Hair Serum", price: 220, image: "/hair-serum.jpg", category: "Hair Treatments", type: "haircare",
  options: [
    { label: "100ml", price: 30 },
    { label: "250ml", price: 60 },
    { label: "500ml", price: 100 },
  ] },
  { id: 10, title: "Deep Moisture Cream", price: 190, image: "/moisture-cream.jpg", category: "Hair Treatments", type: "haircare",
  options: [
    { label: "100ml", price: 30 },
    { label: "250ml", price: 60 },
    { label: "500ml", price: 100 },
  ] },
  { id: 11, title: "Comb Set", price: 45, image: "/combset.jpg", category: "Styling Essentials", type: "accessory",
  options: [
    { label: "S", price: 10 },
    { label: "M", price: 15 },
    { label: "L", price: 20 },
  ] },
  { id: 12, title: "Wig Stand", price: 70, image: "/wigstand.jpg", category: "Mannequin & Stands", type: "accessory",
  options: [
    { label: "S", price: 10 },
    { label: "M", price: 15 },
    { label: "L", price: 20 },
  ] },
  { id: 13, title: "Curling Iron", price: 200, image: "/curlingiron.jpg", category: "Hair Tools", type: "hairtool" },
  { id: 14, title: "Wig Cap", price: 45, image: "/wigcap.jpg", category: "Hair Accessories", type: "accessory",
  options: [
    { label: "S", price: 10 },
    { label: "M", price: 15 },
    { label: "L", price: 20 },
  ] },
  { id: 15, title: "Bonnet", price: 50, image: "/bonnet.jpg", category: "Hair Accessories", type: "accessory",
  options: [
    { label: "S", price: 10 },
    { label: "M", price: 15 },
    { label: "L", price: 20 },
  ] },
  { id: 16, title: "Edge Control brush", price: 45, image: "/edgecontrol.jpg", category: "Styling Essentials", type: "accessory",
  options: [
    { label: "S", price: 10 },
    { label: "M", price: 15 },
    { label: "L", price: 20 },
  ] },

];

const categories = [
  "Hair Treatments",
  "Hair Tools",
  "Hair Accessories",
  "Styling Essentials",
  "Mannequin & Stands",
];

const Haircare = () => {
  const [products, setProducts] = useState(haircareProducts);
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

  const resetFilters = () => {
    setSelectedPrice(null);
    queryParams.delete("category");
    navigate("/haircare");
  };

  useEffect(() => {
    let filtered = [...haircareProducts];

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

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedLength, setSelectedLength] = useState(null);

  const handleAddToWishlist = (product) => {
    console.log("Added to wishlist:", product);
  };

  const handleAddToCart = () => {
    console.log("Add to cart:", {
      ...quickViewProduct,
      quantity,
      selectedLength,
    });
    setQuickViewProduct(null);
  };

  return (
    <div className="shop-page">
      <div className="login-hero">
        <div className="login-hero-overlay">
          <h2>HAIRCARE</h2>
          <p>Home / Haircare</p>
        </div>
      </div>
      <div className="container d-flex">
        <aside className="shop-sidebar">
          <h5 className="shop-sidebar-heading">Category</h5>
          <ul>
            {categories.map((cat) => (
              <li key={cat}>
                <Link to={`/haircare?category=${encodeURIComponent(cat)}`}>
                  {cat}
                </Link>
              </li>
            ))}
          </ul>

          <h5 className="shop-sidebar-heading">Shop By Price</h5>
          <div className="shop-price-filters">
            <button onClick={() => setSelectedPrice([100, 150])}>₦100 - ₦150</button>
            <button onClick={() => setSelectedPrice([150, 250])}>₦150 - ₦250</button>
            <button onClick={resetFilters}>Reset Filters</button>
          </div>
        </aside>

        <main className="product-grid-section">
          <h2 className="shop-title">Haircare Products</h2>

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
                  <div className="icon-actions">
                    <span onClick={() => toggleWishlist(product.id)}>
                      {wishlist.includes(product.id) ? (
                        <BsHeartFill color="red" />
                      ) : (
                        <BsHeart />
                      )}
                    </span>
                    <span
                      onClick={() => {
                        setQuickViewProduct(product);
                        setQuantity(1);
                        setSelectedLength(null);
                      }}
                    >
                      <BsEye title="Quick View" />
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="pagination">
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </main>
      </div>

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        quantity={quantity}
        setQuantity={setQuantity}
        selectedLength={selectedLength}
        setSelectedLength={setSelectedLength}
        handleAddToCart={handleAddToCart}
        handleAddToWishlist={handleAddToWishlist}
      />
    </div>
  );
};

export default Haircare;
