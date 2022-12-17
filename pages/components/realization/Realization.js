import React from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

function Realization() {
  const css = { width: "100%", height: "500px" };
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  const images = [
    {
      src: "/images/7.jpg",
    },
    {
      src: "/images/6.jpg",
    },
    {
      src: "/images/5.jpg",
    },
    {
      src: "/images/12.jpg",
    },
    {
      src: "/images/3.jpg",
    },
    {
      src: "/images/2.jpg",
    },
    {
      src: "/images/1.jpg",
    },
    {
      src: "/images/10.jpg",
    },
  ];
  return (
    <div className="text-center pt-10 pb-20 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold pb-5">Realizacje</h2>
      <p className="container m-auto py-5 max-w-4xl text-xl">
        W swoim dorobku posiadamy prace o zróżnicowanym stopniu trudności,
        poczynając od prostych standardowych rozwiązań, na skomplikowanych,
        nieszablonowych projektach architektonicznych kończąc, wykraczających
        niekiedy daleko poza tradycyjne układanie glazury, gresu i terakoty.
      </p>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid overflow-hidden"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image,index) => (
          
              <Image
                key={index}
                src={image.src}
                width="565"
                height="668"
                sizes="100vw"
                style={css}
                className="img-fluid glightbox3 max-w-full w-full h-auto hover:scale-105 transition-all ease-in cursor-pointer"
              />           
         
        ))}
      </Masonry>
    </div>
  );
}

export default Realization;
