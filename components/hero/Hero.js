import React from "react";
import SwiperHero from "./SwiperHero";

function Hero({ data }) {
  return (
    <section
      id="hero"
      className="flex md:!flex-nowrap max-sm:flex-wrap max-h-[600px]  max-sm:max-h-fit "
    >
      <SwiperHero data={data} />
      <div className="bg-gray-800 px-10 py-4 md:pt-[100px]  border-l-[20px] max-sm:border-none max-w-[45%]  max-sm:max-w-none border-l-gray-500">
        <h1 className="text-5xl text-white font-roboto font-bold ">
          Profesjonalne <br></br> Usługi Glazurnicze
        </h1>
        <p className="text-md pr-10 pt-10 text-white">
          Doświadczenie, precyzja, terminowość oraz jakość wykonywanych usług to
          cechy ,które wyrózniają naszą fimę. Wieloletnie doświadczenie zdobyte
          w kraju jak i za granicą wraz z profesjonalnym sprzętem pozwala
          świadczyć usługi na najwyższym poziomie.W ofercie znajdziecie także
          usługi niezbędne do kompleksowego remontu i wykończenia wnętrza takie
          jak: układanie płytek, montaż płyt karton gips, szpachlowanie, malowanie,
          przeróbki hydrauliczne.
        </p>
        <div className="flex gap-10 icons pt-10">
          <a
            href="tel:+48512803243"
            className="hover:scale-110 transition-all ease-in-out"
          >
            {" "}
            <img src="/svg/Iphone.svg" alt="icon" />
          </a>
          <a
            href="mailto:nowakmariusz5225@gmail.com"
            className="hover:scale-110 transition-all ease-in-out"
          >
            {" "}
            <img src="/svg/Mail-hero.svg" alt="icon" />
          </a>
          <a href="#">
            {" "}
            <img
              src="/svg/FacebookIcon.svg"
              className="hover:scale-110 transition-all ease-in-out"
              alt="icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
