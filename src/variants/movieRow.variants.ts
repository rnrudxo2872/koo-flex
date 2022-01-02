import { Variants } from "framer-motion";

export const SlideRowVariant: Variants = {
  init: (nowWidth) => ({
    x: nowWidth,
  }),
  exit: (nowWidth) => ({
    x: -nowWidth,
    transition: {
      duration: 1,
    },
  }),
  come: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const BoxVariant: Variants = {
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    transition: {
      delay: 0.5,
    },
  },
};

export const InfoVariant: Variants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
