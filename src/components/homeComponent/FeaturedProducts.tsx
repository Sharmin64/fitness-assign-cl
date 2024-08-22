import { Link } from "react-router-dom";
import { featuredProducts } from "../constants/products/products";

const FeaturedProducts = () => {
  return (
    <div className="featured-products-section py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="product bg-white p-5 rounded-lg shadow-lg"
            >
              <div
                className="product-image mb-5 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "25em",
                  borderRadius: "15px",
                }}
              ></div>
              <h3 className="text-3xl font-semibold mb-3">{product.name}</h3>
              <p className="mb-5">{product.description}</p>
              <Link
                to={`/product/${product.id}`}
                className="btn bg-[#cccccc] text-[#06768d] hover:bg-[#519faf] hover:text-[#010c0e] text-xl font-medium"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
        <Link
          to="/productPage"
          className="btn bg-[#06768d] text-white hover:bg-[#b4d6dd] hover:text-black mt-10"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;

// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   EffectFade,
// } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";
// import slideImg1 from "../../assets/images/3d-gym-equipment_23-2151114134.avif";
// import slideImg2 from "../../assets/images/gym-tools-img/gym-tool-cycle.avif";
// import slideImg3 from "../../assets/images/gym-trainer/gym-man-8.jfif";
// import slideImg4 from "../../assets/images/barbells.avif";
// import slideImg5 from "../../assets/images/ropingMan.jpg";
// import slideImg6 from "../../assets/images/3d-gym-equipment_23-2151114248.avif";
// import slideImg7 from "../../assets/images/3d-gym-equipment_23-2151114219.avif";
// import slideImg8 from "../../assets/images/3d-gym-equipment_23-2151114191.avif";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// const FeaturedProducts = () => {
//   return (
//     <>
//       <Swiper
//         // install Swiper modules
//         modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
//         spaceBetween={50}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         scrollbar={{ snapOnRelease: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log("slide change")}
//       >
//         <SwiperSlide>
//           <div className="h-[20em]">
//             <img src={slideImg1} alt="slideimage" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div>
//             <img src={slideImg2} alt="slideimage" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div>
//             <img src={slideImg3} alt="slideimage" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div>
//             <img src={slideImg4} alt="slideimage" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div>
//             <img src={slideImg5} alt="slideimage" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div>
//             <img src={slideImg6} alt="slideimage" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div>
//             <img src={slideImg7} alt="slideimage" />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div>
//             <img src={slideImg8} alt="slideimage" />
//           </div>
//         </SwiperSlide>
//         ...
//       </Swiper>
//     </>
//   );
// };

// export default FeaturedProducts;
