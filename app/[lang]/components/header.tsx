"use client";

import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import type { getDictionary } from "@/get-dictionary";
import LocaleSwitcher from "./locale-switcher";
import { useEffect } from "react";
import { headerAnimations } from "../lib/utils";

export default function Header({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["header"];
}) {
  useEffect(() => {
    headerAnimations();
  }, []);

  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.logo}>
        <Image
          src="/casamentocool-logo-dark.svg"
          alt={dictionary.logoAltText}
          width={54}
          height={24}
          priority
        />
      </Link>
      <ul>
        <li>
          <Link href="/#about" scroll={true}>
            {dictionary.menu1}
          </Link>
        </li>
        <li>
          <Link href="/#services" scroll={true}>
            {dictionary.menu2}
          </Link>
        </li>
        <li>
          <Link href="/#portfolio" scroll={true}>
            {dictionary.menu3}
          </Link>
        </li>
        <li>
          <Link href="/#team" scroll={true}>
            {dictionary.menu4}
          </Link>
        </li>
        <li>
          <Link href="/#work-packs" scroll={true}>
            {dictionary.menu5}
          </Link>
        </li>
        <li>
          <Link href="/#contacts" scroll={true}>
            {dictionary.menu6}
          </Link>
        </li>
      </ul>
      <LocaleSwitcher />
    </header>
  );
}
