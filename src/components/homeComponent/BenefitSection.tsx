import { benefits } from "../constants/benefits";

const BenefitSection = () => {
  return (
    <>
      <div className="benefits-section py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10">Why Choose Our Products?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit relative group">
                <div
                  className="benefit-image"
                  style={{
                    backgroundImage: `url(${benefit.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "25em",
                    borderRadius: "15px",
                  }}
                ></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
                  <h3 className="text-3xl font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-white">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitSection;

// const BenefitSection = () => {
//   return (
//     <>
//       <div className="benefits-section py-20 bg-gray-100">
//         <div className="container mx-auto text-center">
//           <h2 className="text-5xl font-bold mb-10">
//             Why Choose Our Fitness Tools?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {/*  Benefit 1: Dumbbells  */}
//             <div className="benefit">
//               <div
//                 className="benefit-image"
//                 style={{
//                   backgroundImage:
//                     "url('https://i.postimg.cc/nzYbhKGJ/gym-tool-dumble.avif')",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   height: "25em",
//                   borderRadius: "15px",
//                 }}
//               ></div>
//               <h3 className="text-3xl font-semibold mt-5">Dumbbells</h3>
//               <p className="mt-3 text-xl font-medium">
//                 Dumbbells are perfect for a range of exercises, helping you
//                 build muscle, improve strength, and enhance flexibility.
//               </p>
//             </div>

//             {/*  Benefit 2: Yoga Mats  */}
//             <div className="benefit">
//               <div
//                 className="benefit-image"
//                 style={{
//                   backgroundImage:
//                     "url('https://i.postimg.cc/Bbp0M5jg/exercise-and-mat.webp')",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   height: "25em",
//                   borderRadius: "15px",
//                 }}
//               ></div>
//               <h3 className="text-3xl font-semibold mt-5">Yoga Mats</h3>
//               <p className="mt-3 text-xl font-medium">
//                 Our high-quality yoga mats provide excellent grip and comfort,
//                 making your yoga sessions more enjoyable and effective.
//               </p>
//             </div>

//             {/* Benefit 3: Resistance Bands  */}
//             <div className="benefit">
//               <div
//                 className="benefit-image"
//                 style={{
//                   backgroundImage:
//                     "url('https://i.postimg.cc/RVPmtR5C/resistance-bands.jpg')",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   height: "25em",
//                   borderRadius: "15px",
//                 }}
//               ></div>
//               <h3 className="text-3xl font-semibold mt-5">Resistance Bands</h3>
//               <p className="mt-3 text-xl font-medium">
//                 Resistance bands are versatile tools that can be used for
//                 strength training, stretching, and rehabilitation exercises.
//               </p>
//             </div>

//             {/*  Benefit 4: Treadmills  */}
//             <div className="benefit">
//               <div
//                 className="benefit-image"
//                 style={{
//                   backgroundImage:
//                     "url('https://i.postimg.cc/cJ3GVGK6/intenza-fitness-8uz-JGg-J1-3w-unsplash.jpg')",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   height: "25em",
//                   borderRadius: "15px",
//                 }}
//               ></div>
//               <h3 className="text-3xl font-semibold mt-5">Treadmills</h3>
//               <p className="mt-3 text-xl font-medium">
// Our treadmills offer advanced features to help you track your
// progress and achieve your cardiovascular fitness goals.
//               </p>
//             </div>

//             {/* Benefit 5: Kettlebells */}
//             <div className="benefit">
//               <div
//                 className="benefit-image"
//                 style={{
//                   backgroundImage:
//                     "url('https://i.postimg.cc/4dTRG2tP/kattelbells.avif')",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   height: "25em",
//                   borderRadius: "15px",
//                 }}
//               ></div>
//               <h3 className="text-3xl font-semibold mt-5">Kettlebells</h3>
//               <p className="mt-3 text-xl font-medium">
//                 Kettlebells are great for dynamic workouts that improve
//                 strength, endurance, and coordination.
//               </p>
//             </div>

//             {/* <Benefit 6: Foam Rollers  */}
//             <div className="benefit">
//               <div
//                 className="benefit-image"
//                 style={{
//                   backgroundImage:
//                     "url('https://i.postimg.cc/RVPmtR5C/resistance-bands.jpg')",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   height: "25em",
//                   borderRadius: "15px",
//                 }}
//               ></div>
//               <h3 className="text-3xl font-semibold mt-5">Foam Rollers</h3>
//               <p className="mt-3 text-xl font-medium">
//                 Foam rollers help in muscle recovery by reducing soreness and
//                 improving blood flow after intense workouts.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BenefitSection;
