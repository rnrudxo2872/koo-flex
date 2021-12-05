import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled(motion.nav)`
  display: flex;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  width: 100%;
  position: fixed;
  top: 0;
  justify-content: space-between;
  color: white;
  text-shadow: 1px 1px 2px black;
  z-index: 5;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(motion.svg)`
  margin: 0 10px;
  margin-right: 50px;
  width: 95px;
  height: 70px;
  fill: #e0604a;

  path {
    stroke-width: 4px;
    stroke: white;
  }
`;

export const List = styled(motion.ul)`
  display: flex;
  flex-direction: row;
`;

export const Item = styled(motion.li)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
`;

export const Pointer = styled(motion.div)`
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -12px;
`;

export const SearchWrapper = styled(motion.div)`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled(motion.input)`
  transform-origin: center right;
  margin-right: 5px;
  padding: 1px;
  padding-left: 40px;
`;

export const SearchSvg = styled(motion.svg)`
  height: 17px;
  z-index: 1;
`;
