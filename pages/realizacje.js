import React from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { Fade } from "react-awesome-reveal";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
import Head from "next/head";

function realizacje() {
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
  const css = { width: "100%", height: "object-fit" };
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  };
  const [toggler, setToggler] = useState(false);
  const [imgs, setImg] = useState(null);

  const setTogle = (imgs) => {
    setImg(imgs);
    setToggler(!toggler);
  };
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
          content="usługi glazurnicze, układanie płytek, układanie glazury, układanie płytek słopnice, układanie płytek limanowa, glazurnik limanowa "
        />
        <title>Realizacje</title>
      </Head>
      <section>
        <FsLightbox toggler={toggler} sources={[imgs]} />

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid overflow-hidden"
          columnClassName="my-masonry-grid_column cursor-pointer"
        >
          {images.map((image, index) => (
            <Fade>
              {" "}
              <Image
                key={index}
                src={image.src}
                width="565"
                height="668"
                sizes="100vw"
                style={css}
                className="img-fluid "
                onClick={() => setTogle(image.src)}
              />
            </Fade>
          ))}
        </Masonry>
      </section>
    </>
  );
}

export default realizacje;
