import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = ({search,setSearch,darkMode}) => {
  return (
    <div className='relative flex items-center'>
        <input type="text" placeholder='search products... ' value={search} onChange={(e)=>setSearch(e.target.value)} className={`border rounded-2xl px-18 py-3 ${
          darkMode
            ? "bg-[#262626] text-white border-[#404040] placeholder:text-[#9CA3AF]"
            : "bg-white text-[#171717] border-[#6B7280] placeholder:text-[#6B7280]"
        }`} />
        <span className='absolute left-4    '>
          {/* <img src="/search.svg" alt="search" className=' w-7 ' /> */}
          <CiSearch size={22} color='blue'  />
        </span>
    </div>
  )
}

export default SearchBar