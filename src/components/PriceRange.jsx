import React from 'react'

const PriceRange = ({minPrice,setMinPrice,maxPrice,setMaxPrice,darkMode}) => {
  return (
    <div className='flex gap-3'>

        <input type="number" placeholder='Minimum Price' value={minPrice} onChange={(e)=>setMinPrice(e.target.value)}className={`border px-2 py-2 rounded-xl focus:outline-none focus:border-[#2563EB] ${
          darkMode
            ? "bg-[#262626] text-white border-[#404040] placeholder:text-[#9CA3AF]"
            : "bg-white text-[#374151] border-[#D1D5DB] placeholder:text-[#6B7280]"
        }`} />

        <input type="number" placeholder='Maximum Price' value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)} className={`border px-2 py-2 rounded-xl focus:outline-none focus:border-[#2563EB] ${
          darkMode
            ? "bg-[#262626] text-white border-[#404040] placeholder:text-[#9CA3AF]"
            : "bg-white text-[#374151] border-[#D1D5DB] placeholder:text-[#6B7280]"
        }`} />


    </div>
  )
}

export default PriceRange