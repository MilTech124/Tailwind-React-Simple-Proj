import React from "react";
import Masonry from "react-masonry-css";


function Realization({data}) {
  const css = { width: "100%", height: "500px" };
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  
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
        
        {data.data.acf.galeria_na_dole.map((item)=>(
           <img
           key={item.id}
           src={item.full_image_url}
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
