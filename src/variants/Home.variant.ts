import { Variants } from "framer-motion";

export const SlideRowVariant: Variants = {
  init: {
    x: window.outerWidth + 12,
  },
  exit: {
    x: -window.outerWidth - 12,
    transition: {
      duration: 1,
    },
  },
  come: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
