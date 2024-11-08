import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./globals.css";
import { i18n, type Locale } from "../../i18n-config";
import { Metadata } from "next";
import { Params } from "next/dist/server/request/params";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: {
    template: "%s | Casamento Cool",
    default: "Casamento Cool",
  },
  //Basic
  applicationName: "Casamento Cool",
  authors: [
    { name: "Filipa Marta", url: "https://www.linkedin.com/in/filipa-marta/" },
  ],
  keywords:
    "festa de casamento, festa para casamento, dj de casamento, dj para casamento, dj festa casamento, dj em casamento, música de casamento, música para casamento, músicas casamento, casamento, quinta casamento, animação musical para casamentos, musicas para festas de casamento, dj para festas de casamento, casamento cool, dj phizz, dj castor mateus, phizz djset, phizz dj set, filipa marta, filipe mateus pedro, castor mateus djset, castor mateus dj set, castor mateus, organizar casamento, organização de festas de casamento, ideias para casamento, casamento original, casamento alternativo, casamento perfeito, casamento dança, casamento diversão, musica para casamento modern, noivos, banda Sonora casamento, casamento dançar, indie, electrónica, synthpop, rock, electro, independente, casamento indie, casamento sem pimba, casamento vj set, casamento vj, phizz casamento, castor mateus casamento, musica indie casamento, musica rock casamento, djs de casamento, casamento cool",
  category: "casamento",
  description:
    "Para noivos que fogem do pimba, improvisamos a música perfeita e alternativa, sem hora para terminar. Somos dois djs profissionais, Phizz e Castor Mateus, e vestimos a pele casamento cool",
  openGraph: {
    locale: "pt",
    type: "website",
    url: "https://www.casamentocool.pt/",
    title: "Casamento Cool",
    description:
      "Para noivos que fogem do pimba, improvisamos a música perfeita e alternativa, sem hora para terminar. Somos dois djs profissionais, Phizz e Castor Mateus, e vestimos a pele casamento cool",
    siteName: "Casamento Cool",
    images: "/opengraph-image.jpg",
  },
  metadataBase: new URL("https://www.casamentocool.pt/"),
  // Alternate languages
  alternates: {
    canonical: "https://www.casamentocool.pt/",
    languages: {
      en: "https://www.casamentocool.pt/en",
      pt: "https://www.casamentocool.pt/pt",
    },
  },
  // Icons
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
};

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang as Locale}>
      <body>{children}</body>
    </html>
  );
}
