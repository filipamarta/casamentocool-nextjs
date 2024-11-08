import { Params } from "next/dist/server/request/params";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import About from "./components/about";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import Header from "./components/header";
import MiddleBanner from "./components/middleBanner";
import Packs from "./components/packs";
import Portfolio from "./components/portfolio";
import Services from "./components/services";
import Team from "./components/team";
import TopCarousel from "./components/topcarousel";
import styles from "./page.module.css";

export default async function Page({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <>
      <Header dictionary={dictionary.header} />
      <main className={styles.main}>
        <TopCarousel dictionary={dictionary.topcarousel} />
        <About dictionary={dictionary.about} />
        <Services dictionary={dictionary.services} />
        <Portfolio dictionary={dictionary.portfolio} />
        <MiddleBanner />
        <Team dictionary={dictionary.team} />
        <Packs dictionary={dictionary.packs} />
        <Contacts dictionary={dictionary.contacts} />
      </main>

      <Footer dictionary={dictionary.footer} />
    </>
  );
}
