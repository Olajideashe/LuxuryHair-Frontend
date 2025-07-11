import React from "react";
import { Link } from "react-router-dom";
import "./Collection.css";
import dummyProducts from "./product"; // Make sure this path is correct based on your folder structure

const collections = [
  { id: 1, title: "Best Seller", slug: "bestseller", image: "/blondehairwig.webp" },
  { id: 2, title: "Curly Hair", slug: "curly", image: "/orangecurly.webp" },
  { id: 3, title: "Demand Product", slug: "demand", image: "/sensualtouchhair.webp" },
  { id: 4, title: "Featured Product", slug: "featured", image: "/jetblackwig.webp" },
  { id: 5, title: "New Product", slug: "new", image: "/goldenbrownhair.webp" },
  { id: 6, title: "Silky Hair", slug: "silky", image: "/silkyhumanhair.webp" },
  { id: 7, title: "Straight Hair", slug: "straight", image: "/brownextension.webp" },
  { id: 8, title: "Thick Hair", slug: "thick", image: "/wavyextension.webp" },
];

const Collection = () => {
  return (
    <section className="collection-page">
      <div className="collection-header">
        <h2>COLLECTIONS</h2>
        <p>Home / Collections</p>
      </div>

      <div className="collection-grid container">
        {collections.map((item) => {
          const productCount = dummyProducts.filter(
            (product) => product.collectionSlug === item.slug
          ).length;

          return (
            <div className="collection-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h5>{item.title}</h5>
              <p>{productCount} items</p>
              <Link to={`/collection/${item.slug}`} className="btn-collection">
                Read More
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Collection;
