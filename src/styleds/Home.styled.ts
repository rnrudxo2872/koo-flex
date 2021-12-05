import { motion } from "framer-motion";
import styled from "styled-components";

export const Loader = styled.div`
  font-size: 50px;
  color: white;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
`;

export const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding-left: 60px;
`;

export const Title = styled.div`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 15px;
  letter-spacing: 0.2rem;
`;

export const OverView = styled.div`
  width: 40%;
  line-height: 1.3;
  letter-spacing: 0.2rem;
`;

export const Slider = styled(motion.div)`
  background-color: transparent;
  position: relative;
  height: 500px;
  display: flex;
`;

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 90%;
  gap: 10px;
  position: absolute;
  top: -100px;
  z-index: 1;
  margin: 0 auto;
  left: 0;
  right: 0;
`;

interface IBox {
  bgPhoto: string;
  WidthLength: number;
}

export const Box = styled(motion.div)<IBox>`
  background-image: url(${(props) => props.bgPhoto});
  background-position: center center;
  background-size: cover;
  color: red;
  width: ${(props) => `${props.WidthLength}px`};
  height: ${(props) => `${props.WidthLength * 1.5}px`};
`;
