import React from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ search, setSearch, darkMode }) => {

  return (
    <div className="relative w-full sm:w-72 lg:w-80">

      {/* Search Icon */}
      <Search
        size={19}
        className={`absolute left-4 top-1/2 -translate-y-1/2 ${darkMode ? "text-gray-400" : "text-gray-500"
          }`}
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`w-full rounded-xl border py-3 pl-11 pr-10 text-sm outline-none transition-all duration-200 focus:ring-4 focus:ring-blue-500/10 ${darkMode
            ? "border-gray-700 bg-[#202230] text-white placeholder-gray-500 focus:border-blue-500"
            : "border-gray-200 bg-white text-gray-800 placeholder-gray-400 shadow-sm focus:border-blue-500"
          }`}
      />

      {/* Clear Search Button */}
      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          className={`absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 transition ${darkMode
              ? "text-gray-400 hover:bg-gray-700 hover:text-white"
              : "text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            }`}
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}

    </div>
  );
};

export default SearchBar;