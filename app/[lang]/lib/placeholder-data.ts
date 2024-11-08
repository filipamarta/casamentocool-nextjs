import { HeroImage, PortfolioItem } from "./definitions";

const portfolioList: PortfolioItem[] = [
  {
    id: 18,
    local: "Avis",
    year: "2023",
    names: "Rafaela e Pedro",
    image: "2023_Rafaela&Pedro_Avis.png",
    testimonial:
      "Queridos Filipa e Filipe, não temos mesmo palavras para vos agradecer. Fizeram toda a diferença no nosso dia, foram a aposta certa e ganha. O ambiente que criaram esteve sempre como queríamos. Conseguiram gerir a parte da festa muito bem, agradando a toda a gente. Ouvi imensos comentários sobre o quão diferente (em bom) tinha sido o som. Vocês são os maiores, espero mesmo que nos continuemos a cruzar por aí. Não podíamos recomendar mais o vosso trabalho.",
  },
  {
    id: 15,
    local: "Arraiolos",
    year: "2021",
    names: "Paulo e Cristiana",
    image: "2021_Arraiolos_Paulo&Cristiana.png",
    testimonial:
      "Mais uma vez um muito obrigado. Foram estrondosos. Ganharam fãs e musas! Vemo-nos por aí numa festa. (...) Se virem nas notícias um indivíduo a dançar todo doido e feliz nas Maldivas a culpa é vossa!",
  },
  {
    id: 10,
    local: "Arraiolos",
    year: "2018",
    names: "Filipa e Joao",
    image: "2018_Arraiolos_Filipa & Joao.png",
    testimonial:
      "Gostámos imenso do vosso trabalho e sabendo que é sempre difícil agradar a todos, toda a gente adorou!!!",
  },
  {
    id: 9,
    local: "Alcobaça",
    year: "2017",
    names: "Cláudia e Nuno",
    image: "2017_Alcobaça_Claudia e Nuno.png",
    testimonial:
      "Foi mesmo incrível. Obrigada pela vossa presença e espectacular trabalho, adorei. Se pudessem ter continuado até ao meio dia tinha ficado a dançar até ao fim. Foi mesmo o melhor dia das nossas vidas e nunca nos esqueceremos.",
  },
  {
    id: 7,
    local: "Gaia",
    year: "2017",
    names: "Inês e Lieven",
    image: "2017_Gaia_Inês&Lieven.png",
    testimonial:
      "Nós simplesmente adorámos o vosso trabalho, estamos super contentes com a música da nossa festa (a música é importante para nós 🙂) até o mix pimba caiu bem (/shame) mas para nós não foi só a música que foi ótima, mas também a vossa atitude hands-on e simpatia 🙂 não sei como dizer em português, mas it seemed like we all kind of clicked. Mais uma vez obrigada pelo excelente trabalho!",
  },
];

/* const portfolioList: PortfolioItem[] = [
    {
      id: 1,
      local: 'Lisboa',
      year: '2014',
      names: 'Catarina e António',
      image: '',
    },
    { id: 2, local: 'Meco', year: '2015', names: 'Ana e Nuno', image: '' },
    {
      id: 3,
      local: 'Mafra',
      year: '2016',
      names: 'Sergio e Eleonora',
      image: '',
    },
    { id: 4, local: 'Sintra', year: '2016', names: 'Mafalda e David', image: '' },
    { id: 5, local: 'Olhão', year: '2016', names: 'Joana e Miguel', image: '' },
    { id: 6, local: 'Portimão', year: '2017', names: 'Rita e David', image: '' },
    { id: 7, local: 'Gaia', year: '2017', names: 'Inês e Lieven', image: '' },
    { id: 8, local: 'Óbidos', year: '2017', names: 'Filipa e João', image: '' },
    {
      id: 9,
      local: 'Alcobaça',
      year: '2017',
      names: 'Claudia e Nuno',
      image: '/2017_Alcobaça_Claudia e Nuno.png',
    },
    {
      id: 10,
      local: 'Arraiolos',
      year: '2018',
      names: 'Filipa e Joao',
      image: '',
    },
    {
      id: 11,
      local: 'Torres Vedras',
      year: '2018',
      names: 'Marina e Eduardo',
      image: '',
    },
    {
      id: 12,
      local: 'Lisboa',
      year: '2019',
      names: 'Patrícia e Joaquim',
      image: '',
    },
    { id: 13, local: 'Lisboa', year: '2019', names: 'Ana e Maxime', image: '' },
    {
      id: 14,
      local: 'Palmela',
      year: '2020',
      names: 'Rui e Barbara',
      image: '/2020_Palmela_Rui&Barbara.png',
    },
    {
      id: 15,
      local: 'Arraiolos',
      year: '2021',
      names: 'Paulo e Cristiana',
      image: '/2021_Arraiolos_Paulo&Cristiana.png',
    },
    {
      id: 16,
      local: 'Zambujeira do Mar',
      year: '2022',
      names: 'Karine e Florian',
      image: '',
    },
    {
      id: 17,
      local: 'Sintra',
      year: '2022',
      names: 'Leonor e Francisco',
      image: '',
    },
    { id: 18, local: 'Avis', year: '2023', names: 'Rafaela e Pedro', image: '' },
  ]; */

const heroImages: HeroImage[] = [
  {
    id: 1,
    image: "hero-banner-1.jpg",
    name: "Casamento cool",
    width: 1500,
    height: 844,
  },
  {
    id: 2,
    image: "hero-banner-2.jpg",
    name: "Casamento cool",
    width: 1500,
    height: 844,
  },
  {
    id: 3,
    image: "hero-banner-3.jpg",
    name: "Casamento cool",
    width: 1500,
    height: 844,
  },
  {
    id: 4,
    image: "hero-banner-4.jpg",
    name: "Casamento cool",
    width: 1500,
    height: 844,
  },
];
export { portfolioList, heroImages };
