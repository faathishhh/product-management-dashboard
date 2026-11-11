import React, { useEffect, useState } from "react";

import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Settings,
  Bell,
  Plus,
  Moon,
  Sun,
  TrendingUp,
  Layers,
  IndianRupee,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Trash2,
  RotateCcw,
} from "lucide-react";

import ProductList from "./components/ProductList";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import ProductForm from "./components/ProductForm";
import SortProduct from "./components/SortProduct";
import PriceRange from "./components/PriceRange";


// ========================================
// INITIAL PRODUCTS
// ========================================

const initialProducts = [
  { id: 1, name: "Face Cream", price: 450, category: "Beauty", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b" },
  { id: 2, name: "Vitamin C Serum", price: 650, category: "Beauty", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19" },
  { id: 3, name: "Skin Care Kit", price: 1200, category: "Beauty", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8" },
  { id: 4, name: "Moisturizer", price: 550, category: "Beauty", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03" },
  { id: 5, name: "Sunscreen", price: 399, category: "Beauty", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571" },

  { id: 6, name: "Luxury Perfume", price: 2500, category: "Fragrances", image: "https://images.unsplash.com/photo-1541643600914-78b084683601" },
  { id: 7, name: "Rose Perfume", price: 1800, category: "Fragrances", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f" },
  { id: 8, name: "Men's Cologne", price: 2200, category: "Fragrances", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539" },
  { id: 9, name: "Floral Fragrance", price: 1500, category: "Fragrances", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144" },
  { id: 10, name: "Premium Perfume", price: 3200, category: "Fragrances", image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d" },

  { id: 11, name: "Modern Sofa", price: 25000, category: "Furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc" },
  { id: 12, name: "Wooden Chair", price: 4500, category: "Furniture", image: "https://images.unsplash.com/photo-1503602642458-232111445657" },
  { id: 13, name: "Office Desk", price: 8500, category: "Furniture", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72" },
  { id: 14, name: "Coffee Table", price: 5500, category: "Furniture", image: "https://images.unsplash.com/photo-1499933374294-4584851497cc" },
  { id: 15, name: "Bedroom Bed", price: 32000, category: "Furniture", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },

  { id: 16, name: "Organic Rice", price: 120, category: "Groceries", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c" },
  { id: 17, name: "Fresh Vegetables", price: 180, category: "Groceries", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999" },
  { id: 18, name: "Fresh Fruits", price: 250, category: "Groceries", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b" },
  { id: 19, name: "Coffee Powder", price: 350, category: "Groceries", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e" },
  { id: 20, name: "Healthy Snacks", price: 199, category: "Groceries", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32" },

  { id: 21, name: "MacBook Pro", price: 150000, category: "Laptops", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { id: 22, name: "Dell Laptop", price: 75000, category: "Laptops", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },
  { id: 23, name: "HP Pavilion", price: 65000, category: "Laptops", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed" },
  { id: 24, name: "Gaming Laptop", price: 110000, category: "Laptops", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302" },
  { id: 25, name: "Lenovo ThinkPad", price: 85000, category: "Laptops", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed" },

  { id: 26, name: "iPhone 16", price: 75000, category: "Smartphones", image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab" },
  { id: 27, name: "Samsung Galaxy", price: 55000, category: "Smartphones", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf" },
  { id: 28, name: "Google Pixel", price: 65000, category: "Smartphones", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97" },
  { id: 29, name: "OnePlus Smartphone", price: 42000, category: "Smartphones", image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e" },
  { id: 30, name: "Redmi Smartphone", price: 18000, category: "Smartphones", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
];


// ========================================
// MAIN APP
// ========================================

const App = () => {

  // PRODUCTS

  const [products, setProducts] = useState(() => {
    try {
      const savedProducts = localStorage.getItem("nexora-products");

      return savedProducts
        ? JSON.parse(savedProducts)
        : initialProducts;

    } catch (error) {
      console.error(error);
      return initialProducts;
    }
  });

  useEffect(() => {
    localStorage.setItem("nexora-products", JSON.stringify(products));
  }, [products]);


  // STATES

  const [activePage, setActivePage] = useState("Dashboard");

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [sortBy, setSortBy] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  // THEME

  const theme = darkMode
    ? "bg-[#0B1120] text-white"
    : "bg-[#F8FAFC] text-slate-800";

  const card = darkMode
    ? "bg-[#151F32] border-[#263449]"
    : "bg-white border-slate-100";


  // SIDEBAR

  const closeSidebar = () => setSidebarOpen(false);

  const navigate = (page) => {
    setActivePage(page);
    closeSidebar();
  };


  // PRODUCT FUNCTIONS

  const addProduct = (newProduct) => {
    const product = {
      ...newProduct,
      id: Date.now(),
      price: Number(newProduct.price),
    };

    setProducts((prev) => [...prev, product]);
  };


  const editProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );
  };


  const deleteProduct = (id) => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    );
  };


  const closeForm = () => {
    setShowForm(false);
    setEditingProduct(null);
  };


  // RESET INVENTORY

  const resetInventory = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset your inventory to the original sample products?"
    );

    if (confirmed) {
      setProducts(initialProducts);
      setCategory("All");
      setSearch("");
      setMinPrice("");
      setMaxPrice("");
      setSortBy("");
    }
  };


  // FILTER PRODUCTS

  const filteredProducts = products.filter((product) => {

    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    const matchesMinPrice =
      minPrice === "" || product.price >= Number(minPrice);

    const matchesMaxPrice =
      maxPrice === "" || product.price <= Number(maxPrice);

    return (
      matchesCategory &&
      matchesSearch &&
      matchesMinPrice &&
      matchesMaxPrice
    );
  });


  // SORT PRODUCTS

  const sortedProducts = [...filteredProducts].sort((a, b) => {

    switch (sortBy) {

      case "priceLow":
        return a.price - b.price;

      case "priceHigh":
        return b.price - a.price;

      case "nameAZ":
        return a.name.localeCompare(b.name);

      case "nameZA":
        return b.name.localeCompare(a.name);

      default:
        return 0;
    }
  });


  // CATEGORIES

  const categories = [
    ...new Set(products.map((product) => product.category))
  ];

  const totalValue = products.reduce(
    (total, product) => total + Number(product.price),
    0
  );


  // REUSABLE STATISTICS

  const statistics = [
    {
      title: "Total Products",
      value: products.length,
      icon: Package,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Categories",
      value: categories.length,
      icon: Layers,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Inventory Value",
      value: `₹${totalValue.toLocaleString("en-IN")}`,
      icon: IndianRupee,
      color: "bg-amber-100 text-amber-600",
    },
    {
      title: "Filtered Products",
      value: filteredProducts.length,
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-600",
    },
  ];


  // PAGE TITLES

  const pageDescriptions = {
    Dashboard: "Here's what's happening with your inventory today.",
    Products: "Manage, search and organise your products.",
    Categories: "Explore and manage your product categories.",
    Settings: "Manage your application preferences.",
  };


  // ========================================
  // DASHBOARD SECTION
  // ========================================

  const DashboardSection = () => (
    <div>

      <div className="mb-8">

        <div className="flex items-center gap-2 mb-2">
          <Sparkles size={17} className="text-indigo-500" />

          <span className="text-xs font-semibold text-indigo-500">
            YOUR BUSINESS AT A GLANCE
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold">
          Welcome back, Admin 👋
        </h1>

        <p className="text-sm text-slate-400 mt-2">
          Here's an overview of your inventory.
        </p>

      </div>


      {/* STATISTICS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-9">

        {statistics.map((stat, index) => {

          const Icon = stat.icon;

          return (
            <div
              key={index}
              className={`p-6 rounded-2xl border shadow-sm hover:-translate-y-1 transition duration-300 ${card}`}
            >

              <div className="flex justify-between items-start">

                <div>
                  <p className="text-sm text-slate-400 font-medium">
                    {stat.title}
                  </p>

                  <h3 className="text-2xl font-bold mt-3">
                    {stat.value}
                  </h3>
                </div>

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <Icon size={23} />
                </div>

              </div>

            </div>
          );
        })}

      </div>


      {/* RECENT PRODUCTS */}

      <div className={`rounded-2xl border p-5 md:p-7 ${card}`}>

        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-lg font-bold">
              Recent Products
            </h2>

            <p className="text-sm text-slate-400 mt-1">
              Your latest inventory items.
            </p>
          </div>

          <button
            onClick={() => navigate("Products")}
            className="flex items-center gap-2 text-sm text-indigo-500 font-semibold hover:gap-3 transition-all"
          >
            View All <ArrowRight size={17} />
          </button>

        </div>


        <div className="space-y-3">

          {products.slice(-4).reverse().map((product) => (

            <div
              key={product.id}
              className={`flex items-center gap-4 p-3 rounded-xl border ${darkMode ? "border-slate-700" : "border-slate-100"}`}
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-14 h-14 object-cover rounded-xl"
              />

              <div className="flex-1 min-w-0">

                <h3 className="font-semibold text-sm truncate">
                  {product.name}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  {product.category}
                </p>

              </div>

              <p className="font-bold text-sm">
                ₹{Number(product.price).toLocaleString("en-IN")}
              </p>

            </div>

          ))}

          {products.length === 0 && (
            <p className="text-center text-slate-400 py-8">
              No products available.
            </p>
          )}

        </div>

      </div>

    </div>
  );


  // ========================================
  // PRODUCTS SECTION
  // ========================================

  const ProductsSection = () => (

    <div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">

        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Products
          </h1>

          <p className="text-sm text-slate-400 mt-2">
            Manage all your inventory products.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingProduct(null);
            setShowForm(true);
          }}
          className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl text-sm font-semibold transition"
        >
          <Plus size={19} />
          Add New Product
        </button>

      </div>


      {/* FILTER SECTION */}

      <section className={`rounded-2xl border shadow-sm overflow-hidden ${card}`}>

        <div className="p-5 md:p-7 border-b border-slate-100 dark:border-slate-700">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">

            <div>
              <h2 className="text-lg font-bold">
                Product Inventory
              </h2>

              <p className="text-sm text-slate-400 mt-1">
                Search and filter your products.
              </p>
            </div>

            <p className="text-sm text-slate-400">
              Showing{" "}
              <span className="text-indigo-500 font-bold">
                {filteredProducts.length}
              </span>
              {" "}of {products.length} products
            </p>

          </div>


          <div className="flex flex-col gap-5 mt-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <CategoryFilter
                category={category}
                setCategory={setCategory}
                darkMode={darkMode}
              />

              <SearchBar
                search={search}
                setSearch={setSearch}
                darkMode={darkMode}
              />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <SortProduct
                sortBy={sortBy}
                setSortBy={setSortBy}
                darkMode={darkMode}
              />

              <PriceRange
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                darkMode={darkMode}
              />

            </div>

          </div>

        </div>


        {/* PRODUCT LIST */}

        <div className="p-4 md:p-6">

          <ProductList
            product={sortedProducts}
            onDelete={deleteProduct}
            onEdit={(product) => {
              setEditingProduct(product);
              setShowForm(true);
            }}
            darkMode={darkMode}
          />

        </div>

      </section>

    </div>
  );


  // ========================================
  // CATEGORIES SECTION
  // ========================================

  const CategoriesSection = () => (

    <div>

      <div className="mb-8">

        <h1 className="text-2xl md:text-3xl font-bold">
          Categories
        </h1>

        <p className="text-sm text-slate-400 mt-2">
          Browse your products by category.
        </p>

      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

        {categories.map((cat, index) => {

          const count = products.filter(
            (product) => product.category === cat
          ).length;

          const icons = [
            "bg-pink-100 text-pink-600",
            "bg-purple-100 text-purple-600",
            "bg-amber-100 text-amber-600",
            "bg-emerald-100 text-emerald-600",
            "bg-blue-100 text-blue-600",
            "bg-indigo-100 text-indigo-600",
          ];

          return (

            <div
              key={cat}
              className={`p-6 rounded-2xl border shadow-sm hover:-translate-y-1 transition duration-300 ${card}`}
            >

              <div className="flex items-center justify-between">

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${icons[index % icons.length]}`}>
                  <Layers size={23} />
                </div>

                <span className="text-xs font-semibold text-slate-400">
                  CATEGORY {index + 1}
                </span>

              </div>


              <h2 className="text-lg font-bold mt-5">
                {cat}
              </h2>

              <p className="text-sm text-slate-400 mt-2">
                {count} products available
              </p>


              <button
                onClick={() => {
                  setCategory(cat);
                  setActivePage("Products");
                }}
                className="flex items-center gap-2 text-indigo-500 text-sm font-semibold mt-6 hover:gap-3 transition-all"
              >
                View Products <ArrowRight size={17} />
              </button>

            </div>

          );
        })}

      </div>


      {categories.length === 0 && (

        <div className={`p-10 text-center rounded-2xl border ${card}`}>
          <Layers size={35} className="mx-auto text-slate-400 mb-3" />

          <p className="font-semibold">
            No categories available
          </p>

          <p className="text-sm text-slate-400 mt-2">
            Add products to create categories.
          </p>
        </div>

      )}

    </div>
  );


  // ========================================
  // SETTINGS SECTION
  // ========================================

  const SettingsSection = () => (

    <div>

      <div className="mb-8">

        <h1 className="text-2xl md:text-3xl font-bold">
          Settings
        </h1>

        <p className="text-sm text-slate-400 mt-2">
          Manage your dashboard preferences.
        </p>

      </div>


      {/* APPEARANCE */}

      <div className={`rounded-2xl border p-6 md:p-8 mb-6 ${card}`}>

        <div className="flex items-center gap-3 mb-6">

          <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <Sun size={22} />
          </div>

          <div>
            <h2 className="font-bold text-lg">
              Appearance
            </h2>

            <p className="text-sm text-slate-400">
              Customize your dashboard theme.
            </p>
          </div>

        </div>


        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="font-semibold text-sm">
              Dark Mode
            </p>

            <p className="text-xs text-slate-400 mt-1">
              Switch between light and dark themes.
            </p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-14 h-7 rounded-full relative transition ${darkMode ? "bg-indigo-600" : "bg-slate-300"}`}
            aria-label="Toggle dark mode"
          >

            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${darkMode ? "left-8" : "left-1"}`}
            />

          </button>

        </div>


        <div className="flex gap-3 mt-7">

          <button
            onClick={() => setDarkMode(false)}
            className={`flex-1 flex items-center justify-center gap-2 border rounded-xl p-4 text-sm font-semibold ${!darkMode ? "border-indigo-500 text-indigo-600 bg-indigo-50" : "border-slate-600"}`}
          >
            <Sun size={18} />
            Light
          </button>

          <button
            onClick={() => setDarkMode(true)}
            className={`flex-1 flex items-center justify-center gap-2 border rounded-xl p-4 text-sm font-semibold ${darkMode ? "border-indigo-500 text-indigo-400 bg-indigo-500/10" : "border-slate-600"}`}
          >
            <Moon size={18} />
            Dark
          </button>

        </div>

      </div>


      {/* INVENTORY SETTINGS */}

      <div className={`rounded-2xl border p-6 md:p-8 ${card}`}>

        <div className="flex items-center gap-3 mb-6">

          <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <Package size={22} />
          </div>

          <div>
            <h2 className="font-bold text-lg">
              Inventory Settings
            </h2>

            <p className="text-sm text-slate-400">
              Manage your stored product data.
            </p>
          </div>

        </div>


        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

          <div>
            <p className="font-semibold text-sm">
              Reset Inventory
            </p>

            <p className="text-xs text-slate-400 mt-1">
              Restore the original sample products.
            </p>
          </div>

          <button
            onClick={resetInventory}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 text-sm font-semibold transition"
          >
            <RotateCcw size={17} />
            Reset Products
          </button>

        </div>

      </div>


      {/* APPLICATION INFORMATION */}

      <div className={`rounded-2xl border p-6 mt-6 ${card}`}>

        <h2 className="font-bold text-lg mb-4">
          Application Information
        </h2>

        <div className="space-y-3 text-sm">

          <div className="flex justify-between">
            <span className="text-slate-400">Application</span>
            <span className="font-semibold">Nexora</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Version</span>
            <span className="font-semibold">1.0.0</span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Total Products</span>
            <span className="font-semibold">{products.length}</span>
          </div>

        </div>

      </div>

    </div>
  );


  // ========================================
  // MAIN RETURN
  // ========================================

  return (

    <div className={`min-h-screen transition-colors duration-300 ${theme}`}>

      {/* MOBILE OVERLAY */}

      {sidebarOpen && (

        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />

      )}


      {/* SIDEBAR */}

      <aside
        className={`
                    fixed top-0 left-0 z-50
                    h-screen w-[260px]
                    border-r
                    transition-transform duration-300
                    ${darkMode
            ? "bg-[#111B2E] border-[#263449]"
            : "bg-white border-slate-100"
          }
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                `}
      >

        {/* LOGO */}

        <div className="p-7 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
              <Package className="text-white" size={23} />
            </div>

            <div>
              <h1 className="text-xl font-bold">
                Nexora
              </h1>

              <p className="text-xs text-slate-400">
                Inventory Suite
              </p>
            </div>

          </div>

          <button
            onClick={closeSidebar}
            className="lg:hidden p-2 rounded-lg"
          >
            <X size={20} />
          </button>

        </div>


        {/* NAVIGATION */}

        <div className="px-5 mt-8">

          <p className="text-[11px] font-bold tracking-[2px] text-slate-400 mb-5 px-3">
            WORKSPACE
          </p>


          <nav className="space-y-2">

            {[
              {
                name: "Dashboard",
                icon: LayoutDashboard,
              },
              {
                name: "Products",
                icon: ShoppingBag,
              },
              {
                name: "Categories",
                icon: Layers,
              },
            ].map((item) => {

              const Icon = item.icon;

              return (

                <button
                  key={item.name}
                  onClick={() => navigate(item.name)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
                                    ${activePage === item.name
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                      : darkMode
                        ? "text-slate-300 hover:bg-[#202D43]"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                >

                  <Icon size={19} />

                  {item.name}

                </button>

              );

            })}

          </nav>


          <p className="text-[11px] font-bold tracking-[2px] text-slate-400 mt-10 mb-5 px-3">
            PREFERENCES
          </p>


          <button
            onClick={() => navigate("Settings")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
                        ${activePage === "Settings"
                ? "bg-indigo-600 text-white"
                : darkMode
                  ? "text-slate-300 hover:bg-[#202D43]"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
          >

            <Settings size={19} />
            Settings

          </button>

        </div>


        {/* ADMIN PROFILE */}

        <div className={`absolute bottom-6 left-5 right-5 p-4 rounded-2xl border ${card}`}>

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
              A
            </div>

            <div>
              <p className="text-sm font-semibold">
                Admin User
              </p>

              <p className="text-xs text-slate-400">
                Administrator
              </p>
            </div>

          </div>

        </div>

      </aside>


      {/* MAIN CONTENT */}

      <main className="lg:ml-[260px] min-h-screen">


        {/* HEADER */}

        <header
          className={`h-[82px] border-b px-5 md:px-8 flex items-center justify-between sticky top-0 z-30 backdrop-blur-xl
                    ${darkMode
              ? "bg-[#0B1120]/90 border-[#263449]"
              : "bg-white/90 border-slate-100"
            }`}
        >

          <div className="flex items-center gap-4">

            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg"
            >
              <Menu size={23} />
            </button>

            <div>
              <h2 className="text-lg font-bold">
                {activePage}
              </h2>

              <p className="text-xs text-slate-400 mt-1">
                {pageDescriptions[activePage]}
              </p>
            </div>

          </div>


          <div className="flex items-center gap-3">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border ${card}`}
            >
              {darkMode
                ? <Sun size={19} />
                : <Moon size={19} />
              }
            </button>

            <button className={`relative p-2.5 rounded-xl border ${card}`}>
              <Bell size={19} />

              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <div className="hidden sm:flex w-10 h-10 rounded-full bg-indigo-600 text-white items-center justify-center font-bold">
              A
            </div>

          </div>

        </header>


        {/* PAGE CONTENT */}

        <div className="p-5 md:p-8">

          {activePage === "Dashboard" && (
            <DashboardSection />
          )}

          {activePage === "Products" && (
            <ProductsSection />
          )}

          {activePage === "Categories" && (
            <CategoriesSection />
          )}

          {activePage === "Settings" && (
            <SettingsSection />
          )}

          <footer className="text-center text-xs text-slate-400 py-8">
            © 2026 Nexora Inventory Suite. All rights reserved.
          </footer>

        </div>

      </main>


      {/* PRODUCT FORM */}

      {showForm && (

        <ProductForm
          onClose={closeForm}
          addProduct={addProduct}
          editProduct={editProduct}
          editingProduct={editingProduct}
          darkMode={darkMode}
        />

      )}

    </div>

  );

};

export default App;