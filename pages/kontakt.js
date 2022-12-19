import React from "react";

function kontakt() {
  return (
    <section
      id="kontakt"
      className=" text-white max-sm:p-5 p-20 bg-no-repeat bg-center bg-cover w-full"
      style={{ backgroundImage: "url(/images/10.jpg)" }}
    >
      <h1 className="text-4xl font-bold font-roboto text-white">Kontakt</h1>
      <div id="center" className="max-sm:flex-col flex max-w-5xl m-auto ">
        <div className="p-20 max-md:p-5  max-sm:text-mdtext-xl backdrop-blur bg-white/40">
          <p className="text-3xl max-sm:text-md py-5 font-semibold">Witaj,</p>
          <p className="py-5">
            Interesuje Cię profesjonalny, solidny <b>glazurnik</b>?
          </p>
          <p>
            Znalazłeś się w odpowiednim miejscu!<br></br>Klikając otrzymasz bezpośredni kontakt.
          </p>
        </div>
        <div className="bg-slate-800 border-l-[20px] p-5 max-sm:border-none border-l-gray-500 flex flex-col items-center justify-center text-white min-w-[40%] gap-10">
          <a
            href="tel:512803243"
            className="p-5 backdrop-blur hover:scale-95 transition-all ease-in-out hover:bg-slate-400 bg-white/40 rounded-lg"
          >
            <img src="/svg/IphoneX.svg" alt="tel" />
          </a>
          <a
            href="mailto:nowakmariusz5225@gmail.com"
            className="p-5 backdrop-blur hover:scale-95 transition-all ease-in-out hover:bg-slate-400 bg-white/40 rounded-lg"
          >
            <img src="/svg/mail.svg" alt="tel" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default kontakt;
