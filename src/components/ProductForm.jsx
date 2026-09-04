import React, { useState } from "react";
import Button from "./Button";

const emptyForm = {
  title: "",
  category: "",
  price: "",
  description: "",
  image: "",
};

function ProductForm({ onAddProduct }) {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const product = {
      title: form.title.trim(),
      category: form.category.trim(),
      price: Number(form.price),
      description: form.description.trim(),
      image: form.image.trim(),
    };

    if (
      !product.title ||
      !product.category ||
      !product.price ||
      !product.description ||
      !product.image
    ) {
      return;
    }

    onAddProduct(product);

    setForm(emptyForm);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <h2>Add New Product</h2>

        <p>
          Fill in the details below to add a product to your store.
        </p>
      </div>

      <div className="form-grid">
        <label>
          Product Name

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Gaming Mouse"
          />
        </label>

        <label>
          Category

          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="e.g. Accessories"
          />
        </label>

        <label>
          Price

          <input
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            placeholder="99"
          />
        </label>

        <label>
          Image URL

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://..."
          />
        </label>

        <label className="full-width">
          Description

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="3"
            placeholder="Write a short product description..."
          />
        </label>
      </div>

      <Button type="submit" text="Add Product" />
    </form>
  );
}

export default ProductForm;