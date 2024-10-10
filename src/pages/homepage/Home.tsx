import BenefitSection from "../../components/homeComponent/BenefitSection";
import Categories from "../../components/homeComponent/Categories";
import ExtraFeature from "../../components/homeComponent/ExtraFeature";
import FeaturedProducts from "../../components/homeComponent/FeaturedProducts";
import Hero from "../../components/homeComponent/Hero";
import ImageGallery from "../../components/homeComponent/ImageGallery";
import imgBoy from "../../assets/images/gym-trainer/body-builder-2.jpg";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <ExtraFeature
        name="Dragos Gontariu"
        title=" Fitness Marketing Manager"
        quote="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure. Blessing welcomed ladyship she met humoured sir breeding her"
        imageUrl={imgBoy}
      />
      <BenefitSection />
      <ImageGallery />
    </>
  );
};

export default Home;
