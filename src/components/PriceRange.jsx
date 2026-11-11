import React from "react";
import { IndianRupee, SlidersHorizontal, X } from "lucide-react";

const PriceRange = ({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  darkMode
}) => {

  const inputClass = `w-full rounded-xl border py-3 pl-9 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${darkMode
      ? "bg-[#202230] border-gray-700 text-white placeholder-gray-500"
      : "bg-white border-gray-200 text-gray-700 placeholder-gray-400 shadow-sm"
    }`;

  const labelClass = `mb-2 block text-xs font-semibold uppercase tracking-wider ${darkMode ? "text-gray-400" : "text-gray-500"
    }`;

  const clearFilters = () => {
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="w-full">

      {/* Heading */}
      <label className={labelClass}>
        <span className="flex items-center gap-2">
          <SlidersHorizontal size={14} />
          Price Range
        </span>
      </label>

      <div className="flex items-center gap-2">

        {/* Minimum Price */}
        <div className="relative flex-1">

          <IndianRupee
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="number"
            min="0"
            placeholder="Min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className={inputClass}
          />

        </div>

        <span className="text-gray-400">–</span>

        {/* Maximum Price */}
        <div className="relative flex-1">

          <IndianRupee
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="number"
            min="0"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className={inputClass}
          />

        </div>

        {/* Clear Button */}
        {(minPrice !== "" || maxPrice !== "") && (
          <button
            type="button"
            onClick={clearFilters}
            title="Clear price filters"
            className={`shrink-0 rounded-xl p-3 transition ${darkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
          >
            <X size={17} />
          </button>
        )}

      </div>

    </div>
  );
};

export default PriceRange;