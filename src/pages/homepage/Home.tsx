import BenefitSection from "../../components/homeComponent/BenefitSection";
import Categories from "../../components/homeComponent/Categories";
import FeaturedProducts from "../../components/homeComponent/FeaturedProducts";
import Hero from "../../components/homeComponent/Hero";
import ImageGallery from "../../components/homeComponent/ImageGallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BenefitSection />
      <ImageGallery />
    </div>
  );
};

export default Home;
