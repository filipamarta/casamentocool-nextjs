"use client";
import Image from "next/image";
import styles from "./contacts.module.css";
import Link from "next/link";
import type { getDictionary } from "@/get-dictionary";
import { useEffect } from "react";
import { contactsAnimations } from "../lib/utils";

export default function Contacts({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["contacts"];
}) {
  useEffect(() => {
    contactsAnimations();
  }, []);

  return (
    <section id="contacts" className={styles.contacts}>
      <div className={styles.info}>
        <h2>{dictionary.subtitle}</h2>
        <p>{dictionary.description1}</p>
        <br />
        <h4>{dictionary.description2}</h4>
        <Link
          href={
            "mailto:ocasamentocool@gmail.com?subject=casamentocool%20e%20um%20caf%C3%A9"
          }
          title={dictionary.ctaTitle}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.first}>{dictionary.ctaText} ☕</span>
          <span className={styles.second}>{dictionary.ctaText} 👍</span>
        </Link>
      </div>
      <div className={styles.image}>
        <Image
          src="/Casamento Cool.webp"
          alt={dictionary.imgAltText}
          width={360}
          height={360}
        />
      </div>
    </section>
  );
}
