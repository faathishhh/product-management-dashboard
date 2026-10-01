import React from 'react'

const ProductCard = ({ product, onDelete, onEdit, darkMode }) => {
  return (
    <div className={`relative flex flex-col gap-3 border-2 p-10 hover:scale-102 transition-colors ${darkMode
        ? "border-[#404040] bg-[#262626]"
        : "border-[#E5E7EB] bg-white"
      }`}>
      <img src={product.image} alt={product.name} className="w-full rounded-xl" />
      <div className='flex gap-2'>
        <img src="/stars.png" alt="rate" />
        <img src="/stars.png" alt="rate" />
        <img src="/stars.png" alt="rate" />
        <img src="/stars.png" alt="rate" />
        <img src="/stars.png" alt="rate" />
      </div>

      <h1 className={`font-semibold text-[18px] mt-4 ${darkMode ? "text-white" : "text-[#171717]"
        }`}>{product.name}</h1>

      <p className={`font-bold text-2xl mt-3 ${darkMode ? "text-white" : "text-[#171717]"
        }`} >₹{product.price}</p>

      <p className={darkMode ? "text-[#D1D5DB]" : "text-[#6B7280]"}>{product.category}</p>

      <button className='bg-[#2563EB] text-white px-5 py-2 rounded-full '>Add to cart</button>

      <button  onClick={() => onDelete(product.id)} className=' absolute hover:scale-110 top-4 right-3 bg-red-800 text-white rounded-full px-4 py-1'>
        Delete
         </button>
      <button onClick={() => onEdit(product)} className=' absolute hover:scale-110 top-4 left-3 bg-green-800 text-white rounded-full px-4 py-1'>
        {/* <img src="/edit.svg" alt="edit" /> */}
        Edit
      </button>
    </div>
  )
}

export default ProductCard