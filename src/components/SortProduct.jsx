import React from 'react'

const SortProduct = ({sortBy,setSortBy,darkMode}) => {
  return (
    <div>
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className={`rounded-lg px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${
          darkMode
            ? "bg-[#262626] text-white border-[#404040] focus:border-[#60A5FA]"
            : "bg-white text-[#374151] border-[#D1D5DB] focus:border-[#2563EB]"
        }`}>
            <option value="">Sort By</option>
            <option value="priceLow">Price: Low → High</option>
            <option value="priceHigh">Price:High → Low</option>
            <option value="nameAz">Name: A → Z</option>
            <option value="nameZA">Nmae: Z → A</option>
        </select>
    </div>
  )
}

export default SortProduct