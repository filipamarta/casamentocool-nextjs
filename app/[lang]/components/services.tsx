"use client";
import type { getDictionary } from "@/get-dictionary";
import styles from "./services.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { servicesAnimations } from "../lib/utils";

const SERVICE_IMAGE_WIDTH_AND_HEIGHT = 160;

export default function Services({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["services"];
}) {
  useEffect(() => {
    servicesAnimations();
  }, []);

  return (
    <section id="services" className={styles.services}>
      <h2>{dictionary.subtitle}</h2>
      <ul>
        <li>
          <Image
            src="/services-dj.svg"
            alt={dictionary.service1.imgAltText}
            width={SERVICE_IMAGE_WIDTH_AND_HEIGHT}
            height={SERVICE_IMAGE_WIDTH_AND_HEIGHT}
          />
          <p>{dictionary.service1.name}</p>
        </li>
        <li>
          <Image
            src="/services-vj.svg"
            alt={dictionary.service1.imgAltText}
            width={SERVICE_IMAGE_WIDTH_AND_HEIGHT}
            height={SERVICE_IMAGE_WIDTH_AND_HEIGHT}
          />
          <p>{dictionary.service2.name}</p>
        </li>
        <li>
          <Image
            src="/services-travel-expenses.svg"
            alt={dictionary.service3.imgAltText}
            width={SERVICE_IMAGE_WIDTH_AND_HEIGHT}
            height={SERVICE_IMAGE_WIDTH_AND_HEIGHT}
          />
          <p>{dictionary.service3.name}</p>
        </li>
        <li>
          <Image
            src="/services-work-hours.svg"
            alt={dictionary.service4.imgAltText}
            width={SERVICE_IMAGE_WIDTH_AND_HEIGHT}
            height={SERVICE_IMAGE_WIDTH_AND_HEIGHT}
          />
          <p>{dictionary.service4.name}</p>
        </li>
        <li>
          <Image
            src="/services-set-up.svg"
            alt={dictionary.service4.imgAltText}
            width={SERVICE_IMAGE_WIDTH_AND_HEIGHT}
            height={SERVICE_IMAGE_WIDTH_AND_HEIGHT}
          />
          <p>{dictionary.service5.name}</p>
        </li>
      </ul>
    </section>
  );
}
