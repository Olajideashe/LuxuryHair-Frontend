import React, { useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { BsHeartFill, BsHeart, BsEye } from "react-icons/bs";
import "./CollectionDetail.css";
import QuickViewModal from "../../components/QuickViewModal/QuickViewModal";


// Dummy product data
const dummyProducts = [
  { id: 1, title: "Silky Human Hair", price: 300, image: "/silkyhumanhair.webp" },
  { id: 2, title: "Wavy Extension", price: 250, image: "/wavyextension.webp" },
  { id: 3, title: "Straight Hair Wig", price: 200, image: "/straighthairwig.webp" },
  { id: 4, title: "Long Hair Wig", price: 150, image: "/longhairwig.webp" },
  { id: 5, title: "Golden Brown Hair Wig", price: 400, image: "/goldenbrownhair.webp" },
  { id: 6, title: "Black Curly Wig", price: 100, image: "/jetblackwig.webp" },
  { id: 7, title: "Blonde Extension", price: 350, image: "/blondehairwig.webp" },
];

const collections = [
  { title: "Best Seller", slug: "bestseller" },
  { title: "Curly Hair", slug: "curly" },
  { title: "Demand Product", slug: "demand" },
  { title: "Featured Product", slug: "featured" },
  { title: "New Product", slug: "new" },
  { title: "Silky Hair", slug: "silky" },
  { title: "Straight Hair", slug: "straight" },
  { title: "Thick Hair", slug: "thick" },
];

const CollectionDetail = () => {
  const { slug } = useParams();
  const [priceFilter, setPriceFilter] = useState(null);
  const [sortOption, setSortOption] = useState("featured");
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlist, setWishlist] = useState([]);

  // Filter by price
  const priceFiltered = priceFilter
    ? dummyProducts.filter(p => p.price >= priceFilter.min && p.price <= priceFilter.max)
    : dummyProducts;

  // Filter by search
  const searched = priceFiltered.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort
  const sorted = [...searched].sort((a, b) => {
    if (sortOption === "low") return a.price - b.price;
    if (sortOption === "high") return b.price - a.price;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const paginated = sorted.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const resetFilters = () => {
    setPriceFilter(null);
    setSortOption("featured");
    setItemsPerPage(6);
    setCurrentPage(1);
    setSearchTerm("");
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // quick view modal state
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedLength, setSelectedLength] = useState(null);


  const handleAddToWishlist = (product) => {
    // You can integrate backend/global logic later
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
    <div className="collection-detail-page">
      <div className="container d-flex">
        {/* Sidebar */}
        <aside className="filter-sidebar">
          <div className="filter-sidebar-heading">Category</div>
          <ul>
            {collections.map((col) => (
              <li key={col.slug}>
                <Link to={`/collection/${col.slug}`}>{col.title}</Link>
              </li>
            ))}
          </ul>

          <div className="filter-sidebar-heading">Shop By Price</div>
          <div className="price-filters">
            <button onClick={() => { setPriceFilter({ min: 100, max: 200 }); setCurrentPage(1); }}>₦100 - ₦200</button>
            <button onClick={() => { setPriceFilter({ min: 201, max: 300 }); setCurrentPage(1); }}>₦201 - ₦300</button>
            <button onClick={() => { setPriceFilter({ min: 301, max: 500 }); setCurrentPage(1); }}>₦301 - ₦500</button>
            <button onClick={resetFilters}>Reset</button>
          </div>
        </aside>

        {/* Main */}
        <main className="product-grid-section">
          <h2 className="collection-title">
            {slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Collection"}
          </h2>

          <div className="toolbar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            />

            <select value={itemsPerPage} onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}>
              <option value={6}>6 per page</option>
              <option value={9}>9 per page</option>
            </select>

            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <div className="product-grid">
            {paginated.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="wishlist-icon">
                  <span onClick={() => toggleWishlist(product.id)}>
                    {wishlist.includes(product.id) ? <BsHeartFill color="red" /> : <BsHeart />}
                  </span>
                  <span onClick={() => {
                    setQuickViewProduct(product);
                    setQuantity(1);
                    setSelectedLength(null);
                  }}>
                    <BsEye title="Quick View" />
                  </span>
                </div>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <span>₦{product.price.toLocaleString()}</span>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Prev</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
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

export default CollectionDetail;
