// import bannerGym from "../../assets/images/gym-banner.webp";
import Button from "../Buttton";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-image">
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-start">
        <div>
          <h2 className="mb-5 text-pretty text-7xl bg-gradient-to-r from-[#06768d] to-[#ffffff] text-transparent bg-clip-text font-bold">
            Welcome to CoreMuscles.we believe in empowering
          </h2>
          <h3 className="text-3xl font-bold text-clip bg-inherit ">
            {" "}
            At CoreMuscles,individuals to achieve their health and fitness
            goals.will help you every step of the way.
          </h3>
          <p className="mb-5 text-xl">
            Discover the best in:
            <ul className="list-disc list-inside">
              <li>
                Fitness Equipment: From treadmills to free weights, find
                everything you need for a complete workout.
              </li>
              <li>
                Apparel: Stay comfortable and stylish with our range of
                performance gear.
              </li>
              <li>
                Supplements: Boost your nutrition with our carefully selected
                supplements.
              </li>
              <li>
                Accessories: Enhance your workouts with essential accessories
                like yoga mats, resistance bands, and more.
              </li>
            </ul>
          </p>
          <p className="mb-5">
            Join the FitZone Community: Experience the support and motivation of
            a community dedicated to fitness and wellness.
          </p>
          <Button buttonName="ShopNow" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
