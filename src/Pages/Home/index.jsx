import React from "react";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
// import Button from "../../Components/Button";
// import Card from "../../Components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Milestone</title>
      </Helmet>

      <div className="">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className=" py-10"
        >
          <SwiperSlide
            as="div"
            className="bg-center bg-cover items-center block"
          >
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="slide"
              className="block w-96"
            />
          </SwiperSlide>
          <SwiperSlide as="div" className="bg-center bg-cover w-80 h-80">
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="slide"
              className="block w-96"
            />
          </SwiperSlide>
          <SwiperSlide as="div" className="bg-center bg-cover w-80 h-80">
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="slide"
              className="block w-96"
            />
          </SwiperSlide>
          <SwiperSlide as="div" className="bg-center bg-cover w-80 h-80">
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="slide"
              className="block w-96"
            />
          </SwiperSlide>
          <SwiperSlide as="div" className="bg-center bg-cover w-80 h-80">
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="slide"
              className="block w-96"
            />
          </SwiperSlide>
          <SwiperSlide as="div" className="bg-center bg-cover w-80 h-80">
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="slide"
              className="block w-96"
            />
          </SwiperSlide>
          <SwiperSlide as="div" className="bg-center bg-cover w-80 h-80">
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="slide"
              className="block w-96"
            />
          </SwiperSlide>
          <SwiperSlide as="div" className="bg-center bg-cover w-80 h-80">
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt="slide"
              className="block w-96"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Home;
