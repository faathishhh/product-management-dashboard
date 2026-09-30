import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({product,onDelete,onEdit,darkMode}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-10'>
        {product.map((prod)=>{
            return<ProductCard onDelete={onDelete} key={prod.id} product={prod} onEdit={onEdit} darkMode={darkMode} />
        })}

    </div>
  )
}

export default ProductList