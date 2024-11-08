"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import styles from "./topcarousel.module.css";
import { heroImages } from "../lib/placeholder-data";
import type { getDictionary } from "@/get-dictionary";
import Link from "next/link";
import { useEffect } from "react";
import { topCarouselAnimations } from "../lib/utils";

const TopCarousel = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["topcarousel"];
}) => {
  const { lang } = useParams();

  useEffect(() => {
    topCarouselAnimations();
  }, []);

  return (
    <div id="top-carousel" className={styles.topcarousel}>
      <div className={styles.titles}>
        <Image
          src="/casamentocool-logo-light-colored.svg"
          alt="Casamento cool logo"
          width={260}
          height={122}
        />
        <h1>{dictionary.title}</h1>
        <h2>{dictionary.subtitle}</h2>
        <h3>{dictionary.claim}</h3>
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={true}
        showThumbs={false}
        showArrows={false}
        interval={3000}
        ariaLabel={"Carousel"}
        emulateTouch={true}
        className="top-carousel-element"
      >
        {heroImages.map((element) => {
          const { id, image, name, width, height } = element;
          return (
            <div key={id}>
              <Image
                src={`${lang}/${image}`}
                alt={name}
                width={width}
                height={height}
                priority
                style={{
                  height: "auto",
                  width: "100%",
                }}
              />
            </div>
          );
        })}
      </Carousel>

      <Link href="/#about" className={styles.arrow}>
        <Image
          src="/icon-arrow.svg"
          aria-hidden="true"
          alt="icon arrow"
          width={53}
          height={30}
        />
      </Link>
    </div>
  );
};

export default TopCarousel;
