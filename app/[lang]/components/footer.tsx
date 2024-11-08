"use client";
import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
import type { getDictionary } from "@/get-dictionary";

const SOCIAL_MEDIA_ICON = 40;
const SOCIAL_MEDIA_ICON_WIDTH = SOCIAL_MEDIA_ICON;
const SOCIAL_MEDIA_ICON_HEIGHT = SOCIAL_MEDIA_ICON;

export default function Footer({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["footer"];
}) {
  return (
    <footer className={styles.footer}>
      <Link href={"/"}>
        <Image
          src="/casamentocool-logo-light-colored.svg"
          alt={dictionary.logoAltText}
          width={100}
          height={50}
        />
      </Link>
      <ul>
        <li>
          <Link href="mailto:ocasamentocool@gmail.com">
            <Image
              src="/icon-email.svg"
              alt={dictionary.emailAltText}
              width={SOCIAL_MEDIA_ICON_WIDTH}
              height={SOCIAL_MEDIA_ICON_HEIGHT}
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/casamentocool">
            <Image
              src="/icon-instagram.svg"
              alt={dictionary.instagramAltText}
              width={SOCIAL_MEDIA_ICON_WIDTH}
              height={SOCIAL_MEDIA_ICON_HEIGHT}
            />
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/casamentocool">
            <Image
              src="/icon-facebook.svg"
              alt={dictionary.facebookAltText}
              width={SOCIAL_MEDIA_ICON_WIDTH}
              height={SOCIAL_MEDIA_ICON_HEIGHT}
            />
          </Link>
        </li>
      </ul>
      <p>{dictionary.madeBy}</p>
      <p>{dictionary.copyright}</p>
    </footer>
  );
}
