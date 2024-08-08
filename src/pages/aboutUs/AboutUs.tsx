// import { Parallax } from "react-parallax";
import Header from "../../components/homeComponent/Header";
// import AboutPara from "./AboutPara";
import aboutImage from "../../assets/images/3d-gym-equipment_23-2151114219.avif";
import AboutTeam from "./AboutTeam";
import AFeature from "./AFeature";
import { Parallax } from "react-parallax";
import AboutHistory from "./AboutHistory";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Parallax
        strength={200}
        blur={{ min: -15, max: 15 }}
        bgImage={aboutImage}
      >
        <div
          style={{
            zIndex: 10,
            height: "1000px",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
          }}
        >
          <AboutHistory />
        </div>
      </Parallax>
      <AFeature />
      <AboutTeam />
    </>
  );
};

export default AboutUs;

{
  /* <div className="relative">
        <img
          src={aboutImage}
          alt="Background"
          className=" sticky inset-0 object-cover w-full h-full z-[-1]"
        />
        <div className="container mx-auto py-12 ">
          <div className="break-words">
            <h1 className="text-6xl font-extrabold text-center antialiased mb-4 ">
              History
            </h1>
            <article className="break-words min-w-full justify-center text-wrap font-sans text-2xl italic m-auto p-[1.5em]">
              Founded in 2010, CoreMuscles began as a small local shop dedicated
              to providing high-quality fitness equipment and apparel. Over the
              years, we have grown into a trusted online retailer, serving
              fitness enthusiasts across the globe. Our commitment to excellence
              and passion for fitness drives us to continually expand our
              product range and enhance our customer experience.
            </article>
          </div>
        </div>
      </div> */
}
{
  /* <AboutPara /> */
}
