import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function swiperHero() {
  const css = { width: '100%', height: 'auto' }
  return (
    <>
      <Swiper    
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
     
        <SwiperSlide>
          <Image src='/images/4.jpg'
          width="565"
          height="668"
          sizes="100vw"
          style={css}
          className="img-fluid"/>
        </SwiperSlide>       
        <SwiperSlide>
          <Image src='/images/6.jpg'
            width="565"
            height="668"
            sizes="100vw"
            style={css}
          className="img-fluid"/>
        </SwiperSlide>       
      </Swiper>
    </>
  );
}
