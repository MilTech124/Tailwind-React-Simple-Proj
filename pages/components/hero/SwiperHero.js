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

export default function swiperHero({ data }) {
  const css = { width: "100%", height: "100%" };
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
        {data.data.acf.photo_gallery.glowna[0].map((item) => (
          <SwiperSlide id={item.id}>
            <img
              src={item.full_image_url}
              sizes="100vw"
              style={css}
              className="img-fluid"
              alt={item.caption}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
