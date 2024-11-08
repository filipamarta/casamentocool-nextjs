import { animate, inView } from "motion";

export const headerAnimations = () => {
  animate(
    "header",
    {
      opacity: [0, 0.2, 0.8, 1],
      transform: ["translateY(-100px)", "none"],
    },
    { duration: 0.5, delay: 1 }
  );
};

export const topCarouselAnimations = () => {
  inView("#top-carousel", (info) => {
    const titles = info.target.firstElementChild;

    if (titles) {
      animate(
        titles,
        {
          opacity: [0, 0.2, 0.8, 1],
          transform: ["translateX(-100px)", "none"],
        },
        { duration: 1, easing: "ease-out" }
      );
    }
  });
};

export const aboutAnimations = () => {
  inView("#about", (info) => {
    animate(
      info.target.querySelectorAll("p"),
      { opacity: [0, 0.2, 0.8, 1] },
      { duration: 0.8, delay: 1 }
    );
  });
};

export const contactsAnimations = () => {
  inView("#contacts", (info) => {
    animate(
      info.target.querySelectorAll("h2, img"),
      { opacity: [0, 0.2, 0.8, 1] },
      { duration: 0.8 }
    );
    animate(
      info.target.querySelectorAll("p, h4"),
      { opacity: [0, 0.2, 0.8, 1] },
      { duration: 0.8, delay: 0.5 }
    );
    animate(
      info.target.querySelectorAll("a"),
      { opacity: [0, 0.2, 0.8, 1] },
      { duration: 0.8, delay: 0.8 }
    );
  });
};

export const packsAnimations = () => {
  inView("#packs", (info) => {
    animate(
      info.target.querySelectorAll("h2, h3"),
      { opacity: [0, 0.2, 0.8, 1] },
      { duration: 0.8 }
    );
    animate(
      info.target.querySelectorAll("ul"),
      { opacity: [0, 0.2, 0.8, 1] },
      { duration: 0.8, delay: 0.5 }
    );
  });
};

export const portfolioAnimations = () => {
  inView("#portfolio", (info) => {
    animate(
      info.target.querySelectorAll("h2"),
      { opacity: [0, 0.2, 0.8, 1] },
      { duration: 0.8 }
    );
    animate(
      info.target.querySelectorAll("ul"),
      { opacity: [0, 0.2, 0.8, 1] },
      { duration: 0.8, delay: 0.8 }
    );
  });
};

export const servicesAnimations = () => {
  inView("#services", (info) => {
    animate(
      info.target.querySelectorAll("h2"),
      { opacity: [0, 0.2, 0.8, 1] },
      { duration: 0.8 }
    );
    animate(
      info.target.querySelectorAll("img, p"),
      { opacity: [0, 0.2, 0.8, 1] },
      { duration: 0.8, delay: 0.5 }
    );
  });
};

export const teamAnimations = () => {
  inView("#team", (info) => {
    animate(
      info.target.querySelectorAll("h2"),
      { opacity: [0, 0.2, 0.8, 1] },
      { duration: 0.8 }
    );
    animate(
      info.target.querySelectorAll("ul"),
      { opacity: [0, 0.2, 0.8, 1] },
      { duration: 0.8, delay: 0.5 }
    );
  });
};
