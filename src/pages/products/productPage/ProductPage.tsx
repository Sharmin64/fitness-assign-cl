// import { categories } from "../../../components/constants";
import Header from "../../../components/homeComponent/Header";
// import { Product } from "../../../types";
// import { useState, useEffect } from "react";
// import { allProducts } from "../../../components/constants/products/products";
// import Categories from "../../../components/homeComponent/Categories";
// // import { categories } from "../data/categories";
// // import { Product } from "../types";

// const ProductPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [sortOption, setSortOption] = useState("price-asc");
//   const [filteredProducts, setFilteredProducts] =
//     useState<Product[]>(allProducts);

//   useEffect(() => {
//     let filtered = allProducts.filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (selectedCategories.length > 0) {
//       filtered = filtered.filter((product) =>
//         selectedCategories.includes(product.category)
//       );
//     }

//     if (sortOption === "price-asc") {
//       filtered.sort((a, b) => a.price - b.price);
//     } else if (sortOption === "price-desc") {
//       filtered.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(filtered);
//   }, [searchTerm, selectedCategories, sortOption]);

//   const clearFilters = () => {
//     setSelectedCategories([]);
//   };
//   return (
//     <>
//       <Header />
//       <div className="product-page container mx-auto py-20">
//         <h1 className="text-5xl font-bold mb-10 text-center">Products</h1>

//         {/* Search Bar */}
//         <div className="mb-10">
//           <input
//             type="text"
//             className="w-full p-3 rounded-lg border border-gray-300"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* Filters and Sorting */}
//         <div className="mb-10 flex flex-col lg:flex-row lg:justify-between">
//           {/* Filters */}
//           <div className="filters mb-5 lg:mb-0">
//             <h3 className="text-xl font-bold mb-2">Categories</h3>
//             <div className="flex flex-wrap gap-2">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   className={`px-4 py-2 rounded-lg border ${
//                     selectedCategories.includes(category)
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100"
//                   }`}
//                   onClick={() => {
//                     if (selectedCategories.includes(category)) {
//                       setSelectedCategories(
//                         selectedCategories.filter((cat) => cat !== category)
//                       );
//                     } else {
//                       setSelectedCategories([...selectedCategories, category]);
//                     }
//                   }}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//             <button
//               className="mt-5 px-4 py-2 bg-red-500 text-white rounded-lg"
//               onClick={clearFilters}
//             >
//               Clear Filters
//             </button>
//           </div>

//           {/* Sorting */}
//           <div className="sorting">
//             <select
//               className="w-full p-3 rounded-lg border border-gray-300"
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//             >
//               <option value="price-asc">Price: Low to High</option>
//               <option value="price-desc">Price: High to Low</option>
//             </select>
//           </div>
//         </div>

//         {/* Product List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="product bg-white p-5 rounded-lg shadow-lg"
//             >
//               <div
//                 className="product-image mb-5 rounded-lg overflow-hidden bg-center bg-cover h-64 transform transition-transform duration-300 hover:scale-105"
//                 style={{
//                   backgroundImage: `url(${product.image})`,
//                 }}
//               ></div>
//               <h3 className="text-2xl font-bold">{product.name}</h3>
//               <p className="text-xl font-semibold text-gray-700">
//                 ${product.price}
//               </p>
//               <button className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg">
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductPage;

const ProductPage = () => {
  return (
    <>
      <Header />
      <div>
        <h1 className="text-5xl mt-36">Product Page will be render here.!</h1>
      </div>
    </>
  );
};

export default ProductPage;
