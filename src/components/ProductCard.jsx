import React from "react";

function ProductCard({ product, onDelete }) {
  const {
    id,
    title,
    category,
    price,
    description,
    image,
  } = product;

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={image}
          alt={title}
          className="product-image"
        />
      </div>

      <div className="product-content">
        <span className="category">{category}</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="product-bottom">
          <strong>${Number(price).toFixed(2)}</strong>

          <button
            type="button"
            className="delete-btn"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;