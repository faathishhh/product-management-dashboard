import React from 'react'

const CategoryFilter = ({category,setCategory,darkMode }) => {
    return (
        <div>
            <select  value={category} onChange={(e)=>setCategory(e.target.value)} className={`rounded-lg px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${
          darkMode
            ? "bg-[#262626] text-white border-[#404040] focus:border-[#60A5FA]"
            : "bg-white text-[#374151] border-[#D1D5DB] focus:border-[#2563EB]"
        }`}>
                <option value="All" >All</option>
                <option value="Beauty">Beauty</option>
                <option value="Fragrances">Fragrances</option>
                <option value="Furniture">Furniture</option>
                <option value="Groceries">Groceries</option>
                <option value="Laptops">Laptops</option>
                <option value="Smartphones">Smartphones</option>
            </select>
        </div>
    )
}

export default CategoryFilter