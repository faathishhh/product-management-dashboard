import React, { useState } from "react";
import { X, Package, IndianRupee, Tag, Image, Plus, Save } from "lucide-react";

const ProductForm = ({
  addProduct,
  onClose,
  editProduct,
  editingProduct,
  darkMode
}) => {

  const [productForm, setProductForm] = useState({
    name: editingProduct?.name || "",
    price: editingProduct?.price || "",
    category: editingProduct?.category || "",
    image: editingProduct?.image || ""
  });

  const categories = [
    "Beauty",
    "Fragrances",
    "Furniture",
    "Groceries",
    "Laptops",
    "Smartphones"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProductForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !productForm.name.trim() ||
      !productForm.price ||
      !productForm.category ||
      !productForm.image.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (Number(productForm.price) <= 0) {
      alert("Please enter a valid price.");
      return;
    }

    const productData = {
      ...productForm,
      price: Number(productForm.price)
    };

    if (editingProduct) {
      editProduct({
        ...editingProduct,
        ...productData
      });
    } else {
      addProduct(productData);
    }

    onClose();
  };

  const inputClass = `w-full rounded-xl border px-4 py-3 pl-11 outline-none transition focus:ring-2 focus:ring-blue-500 ${darkMode
      ? "bg-[#171923] border-gray-700 text-white placeholder-gray-500"
      : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400"
    }`;

  const labelClass = `block text-sm font-semibold mb-2 ${darkMode ? "text-gray-200" : "text-gray-700"
    }`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

      <div
        className={`w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${darkMode
            ? "bg-[#202230] text-white"
            : "bg-white text-gray-900"
          }`}
      >

        {/* Header */}
        <div className={`flex items-center justify-between border-b p-6 ${darkMode ? "border-gray-700" : "border-gray-100"
          }`}>

          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-blue-100 p-2 text-blue-600">
                <Package size={21} />
              </div>

              <h2 className="text-xl font-bold">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h2>
            </div>

            <p className={`mt-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-500"
              }`}>
              {editingProduct
                ? "Update your product information."
                : "Enter the details to add a new product."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`rounded-lg p-2 transition ${darkMode
                ? "hover:bg-gray-700 text-gray-300"
                : "hover:bg-gray-100 text-gray-500"
              }`}
          >
            <X size={21} />
          </button>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 p-6">

          {/* Product Name */}
          <div>
            <label className={labelClass}>
              Product Name
            </label>

            <div className="relative">
              <Package
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                name="name"
                value={productForm.name}
                onChange={handleChange}
                placeholder="Enter product name"
                className={inputClass}
                required
              />
            </div>
          </div>

          {/* Price */}
          <div>
            <label className={labelClass}>
              Product Price (₹)
            </label>

            <div className="relative">
              <IndianRupee
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="number"
                name="price"
                value={productForm.price}
                onChange={handleChange}
                placeholder="Enter product price"
                min="1"
                className={inputClass}
                required
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className={labelClass}>
              Product Category
            </label>

            <div className="relative">
              <Tag
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select
                name="category"
                value={productForm.category}
                onChange={handleChange}
                className={`${inputClass} appearance-none`}
                required
              >
                <option value="">Select a category</option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className={labelClass}>
              Product Image URL
            </label>

            <div className="relative">
              <Image
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="url"
                name="image"
                value={productForm.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className={inputClass}
                required
              />
            </div>

            <p className="mt-2 text-xs text-gray-400">
              Paste a valid image URL for your product.
            </p>
          </div>

          {/* Image Preview */}
          {productForm.image && (
            <div className={`rounded-xl border p-3 ${darkMode ? "border-gray-700" : "border-gray-200"
              }`}>
              <p className="mb-2 text-xs font-semibold text-gray-400">
                IMAGE PREVIEW
              </p>

              <img
                src={productForm.image}
                alt="Product preview"
                className="h-36 w-full rounded-lg object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}

          {/* Buttons */}
          <div className={`flex gap-3 border-t pt-5 ${darkMode ? "border-gray-700" : "border-gray-100"
            }`}>

            <button
              type="button"
              onClick={onClose}
              className={`flex-1 rounded-xl border px-4 py-3 font-semibold transition ${darkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              {editingProduct ? <Save size={18} /> : <Plus size={18} />}

              {editingProduct ? "Update Product" : "Add Product"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default ProductForm;