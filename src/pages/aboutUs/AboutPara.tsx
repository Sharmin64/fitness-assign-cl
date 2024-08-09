import { Parallax } from "react-parallax";
import aboutImage from "../../assets/images/abutImage.webp";

type TParallaxDetails = {
  parallaxDetails: string;
};

const AboutPara = ({ parallaxDetails }: TParallaxDetails) => {
  return (
    <Parallax strength={200} blur={{ min: -15, max: 15 }} bgImage={aboutImage}>
      <div
        style={{
          zIndex: 10,
          height: "1000px",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 className="text-white font-semibold text-6xl break-words mt-[14em] px-[3em]">
          {parallaxDetails}
        </h2>
      </div>
    </Parallax>
  );
};

export default AboutPara;
