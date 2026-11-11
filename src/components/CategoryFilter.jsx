import React from "react";
import { Layers, ChevronDown } from "lucide-react";

const CategoryFilter = ({ category, setCategory, darkMode }) => {

    const categories = [
        "All",
        "Beauty",
        "Fragrances",
        "Furniture",
        "Groceries",
        "Laptops",
        "Smartphones"
    ];

    return (
        <div className="w-full sm:w-auto">

            <label
                className={`mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
            >
                <Layers size={14} />
                Filter by Category
            </label>

            <div className="relative">

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={`w-full sm:min-w-[190px] appearance-none rounded-xl border px-4 py-3 pr-10 text-sm font-medium outline-none transition-all duration-200 focus:ring-4 focus:ring-blue-500/10 ${darkMode
                            ? "border-gray-700 bg-[#202230] text-white hover:border-gray-500 focus:border-blue-500"
                            : "border-gray-200 bg-white text-gray-700 shadow-sm hover:border-blue-300 focus:border-blue-500"
                        }`}
                >
                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item === "All" ? "All Categories" : item}
                        </option>
                    ))}
                </select>

                <ChevronDown
                    size={17}
                    className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 ${darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                />

            </div>

        </div>
    );
};

export default CategoryFilter;