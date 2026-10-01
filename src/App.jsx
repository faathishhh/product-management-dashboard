import React, { useState } from 'react'
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import ProductForm from './components/ProductForm';
import SortProduct from './components/SortProduct';
import PriceRange from './components/PriceRange';

const initialProducts = [
  {
    id: 1,
    name: "Essence Mascara Lash Princess",
    price: 499,
    category: "Beauty",
    image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
  },
  {
    id: 2,
    name: "Eyeshadow Palette with Mirror",
    price: 999,
    category: "Beauty",
    image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
  },
  {
    id: 3,
    name: "Powder Canister",
    price: 649,
    category: "Beauty",
    image: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
  },
  {
    id: 4,
    name: "Red Lipstick",
    price: 799,
    category: "Beauty",
    image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
  },
  {
    id: 5,
    name: "Red Nail Polish",
    price: 599,
    category: "Beauty",
    image: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
  },
  {
    id: 6,
    name: "Dior J'adore Eau de Parfum",
    price: 8999,
    category: "Fragrances",
    image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp"
  },
  {
    id: 7,
    name: "Chanel Coco Noir",
    price: 7499,
    category: "Fragrances",
    image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp"
  },
  {
    id: 8,
    name: "Calvin Klein CK One",
    price: 4999,
    category: "Fragrances",
    image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp"
  },
  {
    id: 9,
    name: "Dolce Shine Eau de",
    price: 5999,
    category: "Fragrances",
    image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp"
  },
  {
    id: 10,
    name: "Gucci Bloom Eau de",
    price: 6999,
    category: "Fragrances",
    image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp"
  },
  {
    id: 11,
    name: "Annibale Colombo Bed",
    price: 89999,
    category: "Furniture",
    image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp"
  },
  {
    id: 12,
    name: "Annibale Colombo Sofa",
    price: 74999,
    category: "Furniture",
    image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp"
  },
  {
    id: 13,
    name: "Bedside Table African Cherry",
    price: 24999,
    category: "Furniture",
    image: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp"
  },
  {
    id: 14,
    name: "Knoll Saarinen Executive Conference Chair",
    price: 45999,
    category: "Furniture",
    image: "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp"
  },
  {
    id: 15,
    name: "Wooden Bathroom Sink With Mirror",
    price: 65999,
    category: "Furniture",
    image: "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp"
  },
  {
    id: 16,
    name: "Apple",
    price: 199,
    category: "Groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
  },
  {
    id: 17,
    name: "Beef Steak",
    price: 1099,
    category: "Groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"
  },
  {
    id: 18,
    name: "Cat Food",
    price: 499,
    category: "Groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"
  },
  {
    id: 19,
    name: "Chicken Meat",
    price: 699,
    category: "Groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp"
  },
  {
    id: 20,
    name: "Cooking Oil",
    price: 299,
    category: "Groceries",
    image: "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"
  },
  {
    id: 21,
    name: "Apple MacBook Pro",
    price: 149999,
    category: "Laptops",
    image: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro/1.webp"
  },
  {
    id: 22,
    name: "Asus Zenbook Pro Dual Screen",
    price: 129999,
    category: "Laptops",
    image: "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-duo/1.webp"
  },
  {
    id: 23,
    name: "Huawei Matebook X Pro",
    price: 109999,
    category: "Laptops",
    image: "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp"
  },
  {
    id: 24,
    name: "Lenovo Yoga 920",
    price: 89999,
    category: "Laptops",
    image: "https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/1.webp"
  },
  {
    id: 25,
    name: "Samsung Galaxy Book",
    price: 79999,
    category: "Laptops",
    image: "https://cdn.dummyjson.com/product-images/laptops/samsung-galaxy-book/1.webp"
  },
  {
    id: 26,
    name: "iPhone 12",
    price: 49999,
    category: "Smartphones",
    image: "https://cdn.dummyjson.com/product-images/smartphones/iphone-12/1.webp"
  },
  {
    id: 27,
    name: "iPhone 13 Pro",
    price: 69999,
    category: "Smartphones",
    image: "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp"
  },
  {
    id: 28,
    name: "Samsung Galaxy S21",
    price: 54999,
    category: "Smartphones",
    image: "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s21/1.webp"
  },
  {
    id: 29,
    name: "Samsung Galaxy S22",
    price: 64999,
    category: "Smartphones",
    image: "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s22/1.webp"
  },
  {
    id: 30,
    name: "Google Pixel 6",
    price: 45999,
    category: "Smartphones",
    image: "https://cdn.dummyjson.com/product-images/smartphones/google-pixel-6/1.webp"
  }
];




const App = () => {

  const [products, setProducts] = useState(initialProducts)
  const [category, setCategory] = useState("All")
  const [search, setSearch] = useState()
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [sortBy, setSortBy] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [darkMode, setDarkMode] = useState(false)




  const deleteProduct = (id) => {
    setProducts(products.filter((prod) => prod.id !== id))
  }


  const addProduct = (newProduct) => {

    const product = {
      id: Date.now(),
      name: newProduct.name,
      category: newProduct.category,
      price: Number(newProduct.price),
      image: newProduct.image
    };

    setProducts((products) => [...products, product]);
  };


  const editProduct = (updatedProduct) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );
  };


  const filteredProducts = products.filter((product) => {

    const matchesCategory = product.category === category || category === "All"

    const matchesSearch = (product?.name ?? "").toLowerCase().includes((search ?? "").toLowerCase());

    const matchesMinPrice = minPrice === "" || product.price >= Number(minPrice)

    const matchesMaxPrice = maxPrice === "" || product.price <= Number(maxPrice)

    return matchesCategory && matchesSearch && matchesMinPrice && matchesMaxPrice
  })

  const sortedProdects = [...filteredProducts].sort((a, b) => {

    if (sortBy === "priceLow") {
      return a.price - b.price
    }
    else if (sortBy === "priceHigh") {
      return b.price - a.price

    }
    else if (sortBy === "nameAZ") {
      return a.name.localeCompare(b.name)
    }

    else if (sortBy === "nameZA") {
      return b.name.localeCompare(a.name)
    }
    return 0



  })







  return (
    <div className={`min-h-screen  p-10 transition-colors duration-300 ${darkMode
      ? "bg-[#171717] text-white"
      : "bg-[#F8F8F6] text-[#171717]"
      }`}>

      <h1 className={`text-4xl font-serif font-[400px] uppercase text-center mb-10 transition-colors duration-300 ${darkMode
        ? "bg-[#171717] text-white"
        : "bg-[#F8F8F6] text-[#171717]"
        }`} >Product Managemnet Dashboard</h1>

      <div className='flex justify-between items-center '>

        <CategoryFilter category={category} setCategory={setCategory} darkMode={darkMode} />

        <SortProduct sortBy={sortBy} setSortBy={setSortBy} darkMode={darkMode} />

        <PriceRange minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} darkMode={darkMode} />

        <SearchBar search={search} setSearch={setSearch} darkMode={darkMode} />

        <h1 className={`text-[18px] font-[400] transition-colors duration-300 ${darkMode
          ? "bg-[#171717] text-white"
          : "bg-[#F8F8F6] text-[#171717]"
          }`}>Total Products:{filteredProducts.length}</h1>

        <button onClick={() => setShowForm(true)} className={`rounded-lg px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${darkMode
            ? "bg-[#262626] text-white border-[#404040] focus:border-[#60A5FA]"
            : "bg-white text-[#374151] border-[#D1D5DB] focus:border-[#2563EB]"
          }`} > Add Products</button>

        {showForm && (
          <ProductForm onClose={() => {
            setShowForm(false);
            setEditingProduct(null);
          }}
            addProduct={addProduct}
            editProduct={editProduct}
            editingProduct={editingProduct}
            darkMode={darkMode}

          />

        )

        }
        <button onClick={() => setDarkMode(!darkMode)} className={`px-4 py-2 absolute top-6 right-3 rounded-xl border transition-all duration-300 ${darkMode
            ? "bg-white text-[#171717] border-white hover:bg-[#E5E7EB]"
            : "bg-[#171717] text-white border-[#171717] hover:bg-[#374151]"
          }`}>
          {darkMode ? " Light Mode" : "Dark Mode"}  </button>



      </div>
      <ProductList product={sortedProdects}
        onDelete={deleteProduct}
        onEdit={(product) => {
          setEditingProduct(product);
          setShowForm(true)
        }}
        darkMode={darkMode} />

    </div>
  )
}

export default App