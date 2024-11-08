"use client";
import type { getDictionary } from "@/get-dictionary";
import styles from "./about.module.css";
import { useEffect } from "react";
import { aboutAnimations } from "../lib/utils";

export default function About({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["about"];
}) {
  useEffect(() => {
    aboutAnimations();
  }, []);

  return (
    <section id="about" className={styles.about}>
      <p>{dictionary.text1}</p>
      <div>
        <p>{dictionary.text2}</p>
        <br />
        <p>{dictionary.text3}</p>
      </div>
    </section>
  );
}
