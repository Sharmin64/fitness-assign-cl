// import { useNavigate } from "react-router-dom";
// import { Category } from "../../types";
// import { categories } from "../constants";
// import AwesomeSlider from "react-awesome-slider";
// import AwesomeSliderStyles from "react-awesome-slider/src/styled/cube-animation/cube-animation.scss";
// import "react-awesome-slider/dist/styles.css";

// const Categories = () => {
//   const navigate = useNavigate();

//   const handleCategoryClick = (category: Category) => {
//     navigate("/productPage", { state: { selectedCategory: category } });
//   };
//   return (
//     <>
//       <AwesomeSlider cssModule={AwesomeSliderStyles}>
//         <div className="categories-section py-20 bg-gray-100">
//           <div className="container mx-auto text-center">
//             <h2 className="text-5xl font-bold mb-10">Product Categories</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//               {categories.map((category) => (
//                 <div
//                   key={category.id}
//                   className="category bg-white p-5 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
//                   onClick={() => handleCategoryClick(category)}
//                 >
//                   <div
//                     className="category-image mb-5 rounded-lg overflow-hidden bg-center bg-cover h-64"
//                     style={{
//                       backgroundImage: `url(${category.image})`,
//                     }}
//                   ></div>
//                   <h3 className="text-3xl font-semibold">{category.name}</h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </AwesomeSlider>
//     </>
//   );
// };

// export default Categories;

const Categories = () => {
  return (
    <div>
      <h1 className="text-4xl">Categories will be render later</h1>
    </div>
  );
};

export default Categories;
