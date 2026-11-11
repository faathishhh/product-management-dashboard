
import React from "react";

import {
  Pencil,
  Trash2,
  Tag,
  ArrowUpRight,
} from "lucide-react";

const ProductCard = ({ product, onDelete, onEdit, darkMode }) => {

  const categoryColors = {
    Beauty: "bg-pink-100 text-pink-600",
    Fragrances: "bg-purple-100 text-purple-600",
    Furniture: "bg-amber-100 text-amber-700",
    Groceries: "bg-green-100 text-green-700",
    Laptops: "bg-blue-100 text-blue-700",
    Smartphones: "bg-indigo-100 text-indigo-700",
  };

  return (

    <div
      className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${darkMode
          ? "bg-[#151F32] border-[#263449] hover:shadow-black/20"
          : "bg-white border-slate-100 hover:shadow-indigo-100/70"
        }`}
    >

      {/* PRODUCT IMAGE */}
      <div
        className={`relative h-52 flex items-center justify-center p-5 overflow-hidden ${darkMode ? "bg-[#1C2940]" : "bg-slate-50"
          }`}
      >

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* CATEGORY BADGE */}
        <span
          className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${categoryColors[product.category] ||
            "bg-indigo-100 text-indigo-600"
            }`}
        >
          {product.category}
        </span>

        {/* EDIT BUTTON */}
        <button
          onClick={() => onEdit(product)}
          aria-label={`Edit ${product.name}`}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white text-indigo-600 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-600 hover:text-white"
        >
          <Pencil size={16} />
        </button>

      </div>

      {/* PRODUCT DETAILS */}
      <div className="p-5">

        {/* PRODUCT ID */}
        <div className="flex items-center justify-between mb-3">

          <span className="text-[11px] font-medium text-slate-400">
            PRODUCT ID
          </span>

          <span className="text-[11px] font-semibold text-slate-400">
            #{product.id}
          </span>

        </div>

        {/* PRODUCT NAME */}
        <h3
          className={`text-[15px] font-bold leading-6 min-h-[48px] line-clamp-2 ${darkMode ? "text-white" : "text-slate-800"
            }`}
        >
          {product.name}
        </h3>

        {/* PRICE SECTION */}
        <div className="flex items-center justify-between mt-5">

          <div>

            <p className="text-[11px] text-slate-400 font-medium mb-1">
              PRODUCT PRICE
            </p>

            <h2
              className={`text-xl font-extrabold tracking-tight ${darkMode ? "text-white" : "text-indigo-600"
                }`}
            >
              ₹{Number(product.price).toLocaleString("en-IN")}
            </h2>

          </div>

          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Tag size={19} />
          </div>

        </div>

        {/* DIVIDER */}
        <div
          className={`border-t my-5 ${darkMode ? "border-[#263449]" : "border-slate-100"
            }`}
        />

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-3">

          <button
            onClick={() => onEdit(product)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-all duration-300"
          >
            <Pencil size={14} />
            Edit Product
          </button>

          <button
            onClick={() => onDelete(product.id)}
            aria-label={`Delete ${product.name}`}
            className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-300 ${darkMode
                ? "border-red-900/50 text-red-400 hover:bg-red-500 hover:text-white"
                : "border-red-100 text-red-500 hover:bg-red-500 hover:text-white"
              }`}
          >
            <Trash2 size={17} />
          </button>

        </div>

      </div>

    </div>

  );
};

export default ProductCard;
