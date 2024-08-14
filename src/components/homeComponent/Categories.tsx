// import  useHistory  from "react-router-dom";

// type TCatagories = {
//   name: string;
//   image: string;
// };

// const categories: TCatagories[] = [
//   {
//     name: "Dumbbells",
//     image: "https://example.com/dumbbells.jpg",
//   },
//   {
//     name: "Yoga Mats",
//     image: "https://example.com/yoga-mats.jpg",
//   },
//   {
//     name: "Resistance Bands",
//     image: "https://example.com/resistance-bands.jpg",
//   },
//   {
//     name: "Treadmills",
//     image: "https://example.com/treadmills.jpg",
//   },
//   {
//     name: "Kettlebells",
//     image: "https://example.com/kettlebells.jpg",
//   },
//   {
//     name: "Foam Rollers",
//     image: "https://example.com/foam-rollers.jpg",
//   },
// ];

// const Categories = () => {
//   const history = useHistory();

//   const handleCategoryClick = (category: string) => {
//     history.push(`/products?category=${category}`);
//   };

//   return (
//     <div className="py-20 bg-white">
//       <div className="container mx-auto text-center">
//         <h2 className="text-5xl font-bold mb-10">Product Categories</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 p-4">
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="category-item cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//               onClick={() => handleCategoryClick(category.name)}
//             >
//               <img
//                 src={category.image}
//                 alt={category.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4 bg-gray-100">
//                 <h3 className="text-xl font-semibold">{category.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;

const Categories = () => {
  return <div>Categories</div>;
};

export default Categories;
