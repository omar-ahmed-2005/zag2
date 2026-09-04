import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO MINISTORE</p>

        <h1>Discover products made for your everyday life.</h1>

        <p>
          Explore a simple collection of technology, accessories, and useful
          products at great prices.
        </p>

        <Link to="/products" className="primary-btn">
          Shop Now →
        </Link>
      </div>

      <div className="hero-decoration">
        <span>✦</span>
        <span>◈</span>
        <span>✧</span>
      </div>
    </section>
  );
}

export default Hero;