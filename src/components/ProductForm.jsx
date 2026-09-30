import React from 'react'
import { useState } from "react";


const ProductForm = ({ addProduct, onClose,editProduct,editingProduct,darkMode }) => {

  const [productForm, setProductForm] = useState({
    name: editingProduct ?.name || "",
    price: editingProduct ?.price || "",
    category: editingProduct ?.category || "",
    image: editingProduct ?.image || ""

  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductForm({
      ...productForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !productForm.name ||
      !productForm.price ||
      !productForm.category ||
      !productForm.image
    ) {
      alert("Please fill all feilds");
      return;
    }


    if(editingProduct){
      editProduct({
        ...editingProduct,
        name:productForm.name,
        price:productForm.price,
        category:productForm.category,
        image:productForm.image,
      })
    }
    else {

      addProduct(productForm)

    }


    onClose()
  }






  //   addProduct(productForm);

  //   setProductForm({
  //     name: "",
  //     price: "",
  //     category: "",
  //     image:""
  //   });

  //   if (onClose) {
  //     onClose();
  //   }

  // };


  return (
    <div>
      <form onSubmit={handleSubmit} className={`flex flex-col gap-5 border-2 rounded-2xl px-10 py-5 ${
          darkMode
            ? "bg-[#262626] border-[#404040] text-white"
            : "bg-white border-[#2563EB] text-[#374151]"
        }`}>

        <input name="name" value={productForm.name} onChange={handleChange} placeholder=' Enter product Name ' className={`p-5 border-2 rounded-[10px] focus:outline-none ${
            darkMode
              ? "bg-[#171717] text-white border-[#404040] placeholder-[#9CA3AF]"
              : "bg-[#3741516a] text-[#171717] border-[#2563EB] placeholder-[#171717]"
          }`} />

        <input name="price" value={productForm.price} onChange={handleChange} placeholder=' Enter product Price' type="number" className={`p-5 border-2 rounded-[10px] focus:outline-none ${
            darkMode
              ? "bg-[#171717] text-white border-[#404040] placeholder-[#9CA3AF]"
              : "bg-[#3741516a] text-[#171717] border-[#2563EB] placeholder-[#171717]"
          }`} />

        <input name="category" value={productForm.category} onChange={handleChange} placeholder=' Enter product category' className={`p-5 border-2 rounded-[10px] focus:outline-none ${
            darkMode
              ? "bg-[#171717] text-white border-[#404040] placeholder-[#9CA3AF]"
              : "bg-[#3741516a] text-[#171717] border-[#2563EB] placeholder-[#171717]"
          }`} />

        <input name="image" value={productForm.image} onChange={handleChange} placeholder=' Enter product image URL' className='p-5  bg-[#3741516a] text-[#171717] border-2 border-[#2563EB] placeholder-[#171717] rounded-[10px] ' />

        <button type="submit" className='px-5 py-2 bg-[#2563EB] text-white rounded-xl'>Add Product</button>

      </form>

    </div>

  );







}

export default ProductForm