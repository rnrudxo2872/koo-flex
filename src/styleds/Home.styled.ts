import { motion } from "framer-motion";
import styled from "styled-components";
import { makeImagePath } from "../utils";

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

export const InfoModal = styled(motion.div)<{ nowY: number }>`
  width: 300px;
  height: 300px;
  position: absolute;
  background-color: rgba(30, 30, 30, 1);
  border-radius: 12px;
  top: ${(props) => props.nowY}px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const InfoModalOverlay = styled(motion.div)`
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const InfoModalCover = styled.div<{ bgCover: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => makeImagePath(props.bgCover)});
  background-position: center center;
  background-size: cover;
`;
