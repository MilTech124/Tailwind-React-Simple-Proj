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
          <SwiperSlide key={item.id}>
            <Image 
              src={item.full_image_url}
              sizes="100vw"
              width="565"
              height="668"
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

