import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

export default function Carousel() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        effect="coverflow"
        centeredSlides="true"
        spaceBetween={5}
        slidesPerView={5}
        pagination={{ dynamicBullets: true }}
        loop="true"
      >
        <SwiperSlide className="cursor-move group relative">
          <img
            src="https://images.unsplash.com/photo-1621951753163-ee63e7fc147e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="absolute group-hover:scale-95 group-hover:rotate-1 group-hover:rounded-xl duration-500 transition  "
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-move group relative">
          <img
            src="https://images.unsplash.com/photo-1621951753163-ee63e7fc147e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="absolute group-hover:scale-95 group-hover:rotate-1 group-hover:rounded-xl duration-500 transition  "
          />
        </SwiperSlide>
        <SwiperSlide className="cursor-move group relative">
          <img
            src="https://images.unsplash.com/photo-1621951753163-ee63e7fc147e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
            className="absolute group-hover:scale-95 group-hover:rotate-1 group-hover:rounded-xl duration-500 transition  "
          />
        </SwiperSlide>

        <div className="relative hidden">
          <SwiperSlide className="cursor-move group absolute">
            <img
              src="https://images.unsplash.com/photo-1621951753163-ee63e7fc147e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
              className=" group-hover:scale-95 group-hover:rotate-1 group-hover:rounded-xl duration-500 transition  "
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
