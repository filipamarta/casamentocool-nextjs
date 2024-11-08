"use client";
import Image from "next/image";
import styles from "./packs.module.css";
import type { getDictionary } from "@/get-dictionary";
import { useEffect } from "react";
import { packsAnimations } from "../lib/utils";

const IMAGE_DIMENSIONS = 140;

export default function Packs({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["packs"];
}) {
  useEffect(() => {
    packsAnimations();
  }, []);

  return (
    <section id="packs" className={styles.packs}>
      <h2>{dictionary.subtitle}</h2>
      <h3>{dictionary.stepsTitle}</h3>
      <ul className={styles.weddingStages}>
        <li>
          <div className={styles.packImage}>
            <div className={styles.packNumber}>
              {dictionary.step1.stepNumber}
            </div>
            <Image
              src="/pack_cocktail.svg"
              alt={dictionary.step1.imgAltText}
              width={IMAGE_DIMENSIONS}
              height={IMAGE_DIMENSIONS}
            />
          </div>
          <p>{dictionary.step1.description}</p>
        </li>
        <li>
          <div className={styles.packImage}>
            <div className={styles.packNumber}>
              {dictionary.step2.stepNumber}
            </div>
            <Image
              src="/pack_dinner.svg"
              alt={dictionary.step2.imgAltText}
              width={IMAGE_DIMENSIONS}
              height={IMAGE_DIMENSIONS}
            />
          </div>
          <p>{dictionary.step2.description}</p>
        </li>
        <li>
          <div className={styles.packImage}>
            <div className={styles.packNumber}>
              {dictionary.step3.stepNumber}
            </div>
            <Image
              src="/pack_party.svg"
              alt={dictionary.step3.imgAltText}
              width={IMAGE_DIMENSIONS}
              height={IMAGE_DIMENSIONS}
            />
          </div>
          <p>{dictionary.step3.description}</p>
        </li>
      </ul>
      <ul className={styles.packCards}>
        <li>
          <h3>
            {dictionary.pack1.title1}
            <br />
            {dictionary.pack1.title2}
          </h3>
          <p>{dictionary.pack1.text1}</p>
          <p>{dictionary.pack1.text2}</p>
          <p>{dictionary.pack1.text3}</p>
          <p>{dictionary.pack1.text4}</p>
        </li>
        <li>
          <h3>
            {dictionary.pack2.title1}
            <br />
            {dictionary.pack2.title2}
          </h3>
          <p>{dictionary.pack2.text1}</p>
          <p>{dictionary.pack2.text2}</p>
          <p>{dictionary.pack2.text3}</p>
          <p>{dictionary.pack2.text4}</p>
          <p>{dictionary.pack2.text5}</p>
        </li>
        <li>
          <h3>
            {dictionary.pack3.title1}
            <br />
            {dictionary.pack3.title2}
          </h3>
          <p>{dictionary.pack3.text1}</p>
          <p>{dictionary.pack3.text2}</p>
          <p>{dictionary.pack3.text3}</p>
          <p>{dictionary.pack3.text4}</p>
        </li>
      </ul>
      <ul className={styles.packOtherConditions}>
        <li>
          <h3>{dictionary.otherConditions.title1}</h3>
          <p>{dictionary.otherConditions.text1}</p>
          <p>{dictionary.otherConditions.text2}</p>
          <p>{dictionary.otherConditions.text3}</p>
          <p>{dictionary.otherConditions.text4}</p>
        </li>
        <li>
          <h3>{dictionary.notIncluded.title1}</h3>
          <p>{dictionary.notIncluded.text1}</p>
          <p>{dictionary.notIncluded.text2}</p>
          <p>{dictionary.notIncluded.text3}</p>
        </li>
      </ul>
    </section>
  );
}
