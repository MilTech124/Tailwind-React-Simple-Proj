import React from "react";
import Head from "next/head";

function kontakt() {
  return (
  <>
     <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Usługi glazurnicze" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta
          name="keywords"
          content="nm-fliz, usługi glazurnicze, układanie płytek, układanie glazury, układanie płytek słopnice, układanie płytek limanowa, glazurnik limanowa "
        />
        <title>Kontakt MN-Fliz</title>
      </Head>    
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
  </>
   
  );
}

export default kontakt;
