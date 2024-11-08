"use client";
import React, { useEffect } from "react";
import styles from "./portfolio.module.css";
import { Carousel } from "react-responsive-carousel";
import PortfolioCard from "./portfoliocard";
import { portfolioList } from "../lib/placeholder-data";
import type { getDictionary } from "@/get-dictionary";
import { portfolioAnimations } from "../lib/utils";

export default function Portfolio({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["portfolio"];
}) {
  useEffect(() => {
    portfolioAnimations();
  }, []);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>{dictionary.subtitle}</h2>
      <div className={styles.portfolioWrapper}>
        <Carousel
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          thumbWidth={100}
          transitionTime={500}
          interval={3000}
          ariaLabel={dictionary.carouselImgAriaLabel}
          centerMode
          swipeable={true}
          emulateTouch={true}
        >
          {portfolioList.map((item) => {
            return <PortfolioCard key={item.id} {...item} />;
          })}
        </Carousel>
      </div>
    </section>
  );
}
