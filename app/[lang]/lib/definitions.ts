export type HeroImage = {
  id: number;
  image: string;
  name: string;
  width: number;
  height: number;
};

export type PortfolioItem = {
  id: number;
  local: string;
  year: string;
  names: string;
  image: string;
  testimonial?: string;
};
