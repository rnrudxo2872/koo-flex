import { Variants } from "framer-motion";

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
};
