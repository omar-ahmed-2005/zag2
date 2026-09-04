import React from "react";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

function ProductsSection({
  products,
  onDeleteProduct,
}) {
  return (
    <section className="products-section container">
      <SectionTitle
        title="Our Products"
        subtitle={`${products.length} products available in our store.`}
      />

      {products.length === 0 ? (
        <div className="empty-state">
          <span>📦</span>

          <h3>No products yet</h3>

          <p>
            Add your first product using the form above.
          </p>
        </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={onDeleteProduct}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductsSection;