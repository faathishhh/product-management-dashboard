
import React from "react";
import { PackageOpen, SearchX } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductList = ({ product, onDelete, onEdit, darkMode }) => {
  return (
    <div className="w-full">

      {/* SECTION HEADER */}
      <div className="flex items-center justify-between mb-6 px-2">

        <div>
          <h2 className={`text - lg font - bold ${darkMode ? "text-white" : "text-slate-800"
            } `}>
            All Products
          </h2>

          <p className="text-xs text-slate-400 mt-1">
            Browse and manage your inventory
          </p>
        </div>

        <span className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-semibold">
          {product.length} Products
        </span>

      </div>

      {/* PRODUCT GRID */}
      {product.length > 0 ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">

          {product.map((prod) => (
            <div
              key={prod.id}
              className="transform transition-all duration-300 hover:-translate-y-1"
            >
              <ProductCard
                product={prod}
                onDelete={onDelete}
                onEdit={onEdit}
                darkMode={darkMode}
              />
            </div>
          ))}

        </div>

      ) : (

        /* EMPTY STATE */
        <div className={`flex flex - col items - center justify - center py - 20 px - 5 rounded - 2xl border border - dashed ${darkMode
            ? "bg-[#151F32] border-slate-700"
            : "bg-slate-50 border-slate-200"
          } `}>

          <div className={`w - 16 h - 16 rounded - 2xl flex items - center justify - center mb - 5 ${darkMode
              ? "bg-slate-800 text-slate-400"
              : "bg-indigo-100 text-indigo-500"
            } `}>
            {product.length === 0 ? (
              <PackageOpen size={30} />
            ) : (
              <SearchX size={30} />
            )}
          </div>

          <h3 className={`text - lg font - bold ${darkMode ? "text-white" : "text-slate-800"
            } `}>
            No products found
          </h3>

          <p className="text-sm text-slate-400 mt-2 text-center">
            Try changing your search or filters to find products.
          </p>

        </div>

      )}

    </div>
  );
};

export default ProductList;
