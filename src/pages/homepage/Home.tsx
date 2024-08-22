import BenefitSection from "../../components/homeComponent/BenefitSection";
import Categories from "../../components/homeComponent/Categories";
import ExtraFeature from "../../components/homeComponent/ExtraFeature";
import FeaturedProducts from "../../components/homeComponent/FeaturedProducts";
import Hero from "../../components/homeComponent/Hero";
import ImageGallery from "../../components/homeComponent/ImageGallery";
import imgBoy from "../../assets/images/hoody-man.jfif";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <ExtraFeature
          name="Dragos Gontariu"
          title=" Fitness Marketing Manager"
          quote="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure. Blessing welcomed ladyship she met humoured sir breeding her"
          imageUrl={imgBoy}
        />
      </div>
      <BenefitSection />
      <ImageGallery />
    </div>
  );
};

export default Home;
