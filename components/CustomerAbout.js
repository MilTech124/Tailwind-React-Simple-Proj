import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function CustomerAbout() {
  return (
    <>
    <section className='container py-20 text-center   max-w-2xl m-auto'>
     <h2 className='text-4xl font-bold' >Zadowoleni klienci o nas</h2>
      <Swiper    
        centeredSlides={true}  
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}    
        pagination={{
          clickable: true,
        }}
      
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
     
        <SwiperSlide>          
            <div className="relative py-20 ">              
              <p className='font-allura font-medium text-4xl'>Firma godna polecenia! <br></br>
              Szybko i sprawnie , jestem w 100% zadowolony</p>
              <p className='text-center pl-20 pt-10 font-allura '>Grzegorz Bień</p>
              <img className='absolute top-5 left-0'src='/images/Quot.png'></img>
              <img className='absolute bottom-0 right-0 rotate-180'  src='/images/Quot.png'></img>
            </div>       
        </SwiperSlide> 
        <SwiperSlide>          
            <div className="relative py-20 w-full">              
              <p className='font-allura font-medium text-4xl'>Precyzja na najwyższym stopniu! <br></br> 
              Polecam Mariusza Nowaka !</p>
              <p className='text-center pl-20 pt-10 font-allura '>Jarosław Matusiak</p>
              <img className='absolute top-2 left-0'src='/images/Quot.png'></img>
              <img className='absolute bottom-0 right-0 rotate-180'  src='/images/Quot.png'></img>
            </div>       
        </SwiperSlide> 
        
      </Swiper>
      </section>  
    </>
  );
}

