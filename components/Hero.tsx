"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

function Hero() {
  return (
    <div className="mt-2">
      <div className="main-container">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          speed={500}
          autoplay={{
            delay: 5000,
          }}
          modules={[Autoplay, Pagination]}
          className="h-full md:h-96 w-full"
        >
          <SwiperSlide>
            <img
              src="/slider-image-1.png"
              alt="Slider Image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/slider-image-2.png"
              alt="Slider Image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
