"use client";
import Image from "next/image";
import styles from "./team.module.css";
import Link from "next/link";
import type { getDictionary } from "@/get-dictionary";
import { useEffect } from "react";
import { teamAnimations } from "../lib/utils";

const SOCIAL_MEDIA_ICON = 40;
const SOCIAL_MEDIA_ICON_WIDTH = SOCIAL_MEDIA_ICON;
const SOCIAL_MEDIA_ICON_HEIGHT = SOCIAL_MEDIA_ICON;

export default function Team({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["team"];
}) {
  useEffect(() => {
    teamAnimations();
  }, []);

  return (
    <section id="team" className={styles.team}>
      <h2>{dictionary.title}</h2>
      <ul>
        <li>
          <div className={styles.header}>
            <Image
              src="/team_filipa_phizz.jpg"
              alt={dictionary.team1.imgAltText}
              width={200}
              height={200}
            />
            <div>
              <h3>
                {dictionary.team1.djName}
                <br />
                <span className={styles.name}>{dictionary.team1.name}</span>
              </h3>
              <ul className={styles.socialMediaList}>
                <li>
                  <Link href="https://www.instagram.com/phizzdjset/">
                    <Image
                      src="/icon-instagram.svg"
                      alt={dictionary.team1.instagram}
                      width={SOCIAL_MEDIA_ICON_WIDTH}
                      height={SOCIAL_MEDIA_ICON_HEIGHT}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/phizzdjset">
                    <Image
                      src="/icon-facebook.svg"
                      alt={dictionary.team1.facebook}
                      width={SOCIAL_MEDIA_ICON_WIDTH}
                      height={SOCIAL_MEDIA_ICON_HEIGHT}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.mixcloud.com/_Phizz/">
                    <Image
                      src="/icon-mixcloud.svg"
                      alt={dictionary.team1.mixcloud}
                      width={SOCIAL_MEDIA_ICON_WIDTH}
                      height={SOCIAL_MEDIA_ICON_HEIGHT}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.body}>
            <h4>{dictionary.team1.subtitle}</h4>
            <p>{dictionary.team1.description}</p>
          </div>
        </li>

        <li>
          <div className={styles.header}>
            <Image
              src="/team_filipe_castor-mateus.jpg"
              alt={dictionary.team2.imgAltText}
              width={200}
              height={200}
            />
            <div>
              <h3>
                {dictionary.team2.djName}
                <br />
                <span className={styles.name}>{dictionary.team2.name}</span>
              </h3>
              <ul className={styles.socialMediaList}>
                <li>
                  <Link href="https://www.instagram.com/castormateusdj/">
                    <Image
                      src="/icon-instagram.svg"
                      alt={dictionary.team2.instagram}
                      width={SOCIAL_MEDIA_ICON_WIDTH}
                      height={SOCIAL_MEDIA_ICON_HEIGHT}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/castormateus/">
                    <Image
                      src="/icon-facebook.svg"
                      alt={dictionary.team2.facebook}
                      width={SOCIAL_MEDIA_ICON_WIDTH}
                      height={SOCIAL_MEDIA_ICON_HEIGHT}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.mixcloud.com/castormateus/">
                    <Image
                      src="/icon-mixcloud.svg"
                      alt={dictionary.team2.mixcloud}
                      width={SOCIAL_MEDIA_ICON_WIDTH}
                      height={SOCIAL_MEDIA_ICON_HEIGHT}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.body}>
            <h4>{dictionary.team2.subtitle}</h4>
            <p>{dictionary.team2.description}</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
