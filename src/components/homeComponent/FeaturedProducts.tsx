import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import slideImg1 from "../../assets/images/3d-gym-equipment_23-2151114134.avif";
import slideImg2 from "../../assets/images/gym-tools-img/gym-tool-cycle.avif";
import slideImg3 from "../../assets/images/gym-trainer/gym-man-8.jfif";
import slideImg4 from "../../assets/images/barbells.avif";
import slideImg5 from "../../assets/images/ropingMan.jpg";
import slideImg6 from "../../assets/images/3d-gym-equipment_23-2151114248.avif";
import slideImg7 from "../../assets/images/3d-gym-equipment_23-2151114219.avif";
import slideImg8 from "../../assets/images/3d-gym-equipment_23-2151114191.avif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeaturedProducts = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ snapOnRelease: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="h-[20em]">
            <img src={slideImg1} alt="slideimage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slideImg2} alt="slideimage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slideImg3} alt="slideimage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slideImg4} alt="slideimage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slideImg5} alt="slideimage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slideImg6} alt="slideimage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slideImg7} alt="slideimage" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slideImg8} alt="slideimage" />
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </>
  );
};

export default FeaturedProducts;
