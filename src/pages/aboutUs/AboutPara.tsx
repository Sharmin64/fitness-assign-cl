import { Parallax } from "react-parallax";
import aboutImage from "../../assets/images/abutImage.webp";

const AboutPara = () => {
  return (
    <Parallax strength={300} blur={{ min: -15, max: 15 }} bgImage={aboutImage}>
      <div
        style={{
          zIndex: 10,
          height: "700px",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 className="text-white font-semibold text-6xl break-words mt-52 px-[3em]">
          Core Muscles is a fitness brand specializing in home gym equipment. It
          is our goal to motivate you and provide you with the means to get
          healthy and Core Muscles Fit
        </h2>
      </div>
    </Parallax>
  );
};

export default AboutPara;
