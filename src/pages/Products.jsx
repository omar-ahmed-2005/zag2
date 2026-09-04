import React from "react";
import ProductForm from "../components/ProductForm";
import ProductsSection from "../components/ProductsSection";

function Products({
  products,
  onAddProduct,
  onDeleteProduct,
}) {
  return (
    <>
      <section className="page-heading container">
        <p className="eyebrow">PRODUCT MANAGEMENT</p>

        <h1>Products</h1>

        <p>
          Add, browse, and delete products from your store.
        </p>
      </section>

      <ProductForm onAddProduct={onAddProduct} />

      <ProductsSection
        products={products}
        onDeleteProduct={onDeleteProduct}
      />
    </>
  );
}

export default Products;