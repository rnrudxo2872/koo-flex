import { Variants } from "framer-motion";

export const SlideRowVariant: Variants = {
  init: (nowWidth) => ({
    x: nowWidth + 12,
  }),
  exit: (nowWidth) => ({
    x: -nowWidth - 12,
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
