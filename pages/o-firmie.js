import React from "react";
import Image from "next/image";

function ofirmie() {
  const css = {
    width: "100%",
    height: "800px",
    objectFit: "cover",
    objectPosition: "center",
    zIndex: 0,
  };
  return (
    <section id="ofirmie" className="relative sm:h-50 overflow-hidden">
      <div className="relative flex">
        <Image
          src="/images/5.jpg"
          width="565"
          height="668"
          sizes="100vw"
          style={css}
          className="img-fluid"
          alt="o-firmie"
          priority
        />
        <div className=" text-white absolute top-0 left-0 ml-auto mt-auto w-full h-full flex flex-col justify-center items-center  bg-black bg-opacity-50">
          <h2 className=" text-7xl max-sm:text-3xl bold font-cinzel">Mariusz Nowak</h2>
          <p> Usługi Glazurnicze</p>
          <p className="max-w-4xl text-lg max-sm:text-sm mt-10 backdrop-blur bg-white/30 p-5 rounded-md">
            FIRMA MN-Fliz Mariusz Nowak od lat zajmuje się układaniem płytek oraz
            realizacją standardowych i nietypowych usług glazurniczych na
            terenie Limanowej i okolic.Do każdego zlecenia podchodzimy
            indywidualnie, wyceniając koszty po zapoznaniu się z zakresem robót
            na miejscu. Na Państwa życzenie chętnie pomożemy dobrać
            najlepsze materiały oraz zajmiemy się ich zakupem i transportem.
            Naszym priorytetem jest satysfakcja Klienta, dlatego kompleksowy
            charakter usług zawsze idzie w parze z terminowością, wysoką
            estetyką oraz przystępnymi cenami. <span className="text-2xl font-semibold"><br></br><br></br>Zapraszamy do współpracy!</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ofirmie;
