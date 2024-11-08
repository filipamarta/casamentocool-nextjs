"use client";

import { useParams } from "next/navigation";
import { PortfolioItem } from "../lib/definitions";
import styles from "./portfoliocard.module.css";
import Image from "next/image";

const PortfolioCard = ({
  image,
  local,
  names,
  year,
  testimonial,
}: PortfolioItem) => {
  const { lang } = useParams();

  return (
    <div className={styles.card}>
      <div className={styles.weddingPhoto}>
        <Image
          src={`${lang}/${image}`}
          alt={`Casamento cool de ${names}`}
          width={200}
          height={200}
        />
        <div className={styles.weddingPhotoText}>
          <h3>{names}</h3>
          <p>
            {local}, {year}
          </p>
        </div>
      </div>

      {testimonial && <blockquote>&quot;{testimonial}&quot;</blockquote>}
    </div>
  );
};

export default PortfolioCard;
