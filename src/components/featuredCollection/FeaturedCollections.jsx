import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedCollections.css";

const FeaturedCollections = () => {
  return (
    <section className="featured-collections">
      <div className="collections-container">

        {/* left Side (1 tall image, 35%) */}
        <div
          className="collections-left"
          style={{ backgroundImage: "url(/feature1.jpg)" }}
        >
          <div className="collection-content">
              <p>WEEKLY DAYS</p>
              <h4>Explore Great Wigs</h4>
              <Link to="/collection/wigs" className="btn btn-collection">Learn more</Link>
            </div>
        
        </div>
        {/* right Grid (4 blocks, 65%) */}
        <div className="collections-right">
          <div
            className="collection-item"
            style={{ backgroundImage: "url(/feature5.jpg)" }}
          >
             <div className="collection-content">
            <p>SALON SPECIALS</p>
            <h4>Curly Hair</h4>
            <Link to="/collection/curly" className="btn btn-collection">Watch Now</Link>
          </div>
          </div>
          <div
            className="collection-item"
            style={{ backgroundImage: "url(/feature2.jpg)" }}
          >
            <div className="collection-content">
              <p>MEET THE WORLD OF</p>
              <h4>Detox Hair care</h4>
              <Link to="/collection/detox" className="btn btn-collection">Buy Now</Link>
            </div>
          </div>
          <div
            className="collection-item"
            style={{ backgroundImage: "url(/feature3.jpg)" }}
          >
            <div className="collection-content">
              <p>SEE THE PURE</p>
              <h4>Lace Hairstyle</h4>
              <Link to="/collection/lace" className="btn btn-collection">Discover</Link>
            </div>
          </div>
          <div
            className="collection-item"
            style={{ backgroundImage: "url(/feature4.jpg)" }}
          >
            <div className="collection-content">
              <p>NATURE</p>
              <h4>Soft and Smooth</h4>
              <Link to="/collection/smooth" className="btn btn-collection">Shop Now</Link>
            </div>
          </div>
        </div>

   
      </div>
    </section>
  );
};

export default FeaturedCollections;
