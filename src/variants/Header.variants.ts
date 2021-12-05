import { Variants } from "framer-motion";

export const NavVariant: Variants = {
  init: {
    background: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    )`,
  },
  scroll: {
    background: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    )`,
  },
};

export const LogoVariant: Variants = {
  init: {
    fillOpacity: 1,
  },
  hover: {
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
  end: {
    fillOpacity: 1,
  },
};
