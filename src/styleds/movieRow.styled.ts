import { motion } from "framer-motion";
import styled from "styled-components";

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 95%;
  min-width: 974px;
  gap: 10px;
  position: absolute;
  top: -100px;
  z-index: 1;
  margin: 0 auto;
  left: 0;
  right: 0;
  padding: 0 25px;
`;

interface IBox {
  bgPhoto: string;
}

export const Box = styled(motion.div)<IBox>`
  background-image: url(${(props) => props.bgPhoto});
  background-position: center center;
  background-size: cover;
  color: red;
  width: 13vw;
  height: 40vh;
  min-width: 143.5px;
  min-height: 197.25px;

  &:first-child {
    transform-origin: center left;
  }

  &:last-child {
    transform-origin: center right;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Info = styled(motion.div)`
  font-size: 15px;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

export const SlideButtonWrapper = styled.section`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const SlideButton = styled.button`
  z-index: 2;
`;
