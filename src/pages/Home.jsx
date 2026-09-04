import React from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

function Home({ productCount }) {
  return (
    <>
      <Hero />

      <section className="summary container">
        <SectionTitle
          title="Simple. Useful. Yours."
          subtitle="Everything you need to browse and manage your product collection."
        />

        <div className="summary-grid">
          <div className="summary-card">
            <span>🛍️</span>
            <h3>Browse Products</h3>
            <p>
              Explore our current collection and discover products for your
              everyday needs.
            </p>
          </div>

          <div className="summary-card">
            <span>➕</span>
            <h3>Add Products</h3>
            <p>
              Create product entries with a name, category, price, description,
              and image.
            </p>
          </div>

          <div className="summary-card">
            <span>💾</span>
            <h3>Saved Automatically</h3>
            <p>Your product list stays available after refreshing the browser.</p>
          </div>
        </div>

        <div className="home-cta">
          <div>
            <strong>{productCount} products</strong>
            <span> currently in your store</span>
          </div>

          <Link to="/products" className="secondary-btn">
            View Products →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;