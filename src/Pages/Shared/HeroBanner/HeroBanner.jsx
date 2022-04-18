import React, { useEffect } from "react";
import "./HeroBanner.css";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import Slider1 from '../../../Assets/Images/slide-1.jpg'
import Slider2 from '../../../Assets/Images/slide-2.jpg'
import Slider3 from '../../../Assets/Images/slide-3.jpg'
import Slider4 from '../../../Assets/Images/slide-4.jpg'
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  SwiperCore.use([Autoplay]);
  const navigate = useNavigate();

  

 
  return (
    <>
      <Swiper
      
        modules={[Autoplay]}
        slidesPerView={1}
        // spaceBetween={8}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper pb-5"
      >
        <SwiperSlide className="swiper-slider-parent">
            <img src={Slider1} alt="Slider1" />
            <div className="slider-inner-info">
                <h1 className="mb-3">Our Independence Make the Difference</h1>
                <h4 className="mb-3">NATIONALLY ESTABLISHED. INTERNATIONALLY RECOGNIZED</h4>
                <button className="slider-read-btn">FREE CONSULTATION</button>
            </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slider-parent">
            <img src={Slider2} alt="Slider2" />
            <div className="slider-inner-info">
                <h1 className="mb-3">Our Independence Make the Difference</h1>
                <h4 className="mb-3">NATIONALLY ESTABLISHED. INTERNATIONALLY RECOGNIZED</h4>
                <button className="slider-read-btn">FREE CONSULTATION</button>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider-parent">
            <img src={Slider3} alt="Slider3" />
            <div className="slider-inner-info">
                <h1 className="mb-3">Our Independence Make the Difference</h1>
                <h4 className="mb-3">NATIONALLY ESTABLISHED. INTERNATIONALLY RECOGNIZED</h4>
                <button className="slider-read-btn">FREE CONSULTATION</button>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider-parent">
            <img src={Slider4} alt="Slider4" />
            <div className="slider-inner-info">
                <h1 className="mb-3">Our Independence Make the Difference</h1>
                <h4 className="mb-3">NATIONALLY ESTABLISHED. INTERNATIONALLY RECOGNIZED</h4>
                <button className="slider-read-btn">FREE CONSULTATION</button>
            </div>
        </SwiperSlide>
        

      </Swiper>
    </>
  );
};

export default HeroBanner;