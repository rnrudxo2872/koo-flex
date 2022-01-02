import { AnimatePresence } from "framer-motion";
import { memo, useState } from "react";
import { IMovieRowProps } from "../interfaces/movieRow.interface";
import {
  Box,
  Info,
  InfoWrapper,
  Row,
  SlideButton,
  SlideButtonWrapper,
} from "../styleds/movieRow.styled";
import { makeImagePath } from "../utils";
import {
  BoxVariant,
  InfoVariant,
  SlideRowVariant,
} from "../variants/Home.variant";

function MovieRow(props: IMovieRowProps) {
  const { pageOffset, data, OnClickMovieBox, MovieModalMatch } = props;

  const [slideIdx, setSlideIdx] = useState(0);
  const [nowSilding, setNowSliding] = useState(false);

  const onClickNextButton = () => {
    console.log("click next button");
    if (nowSilding) return;
    if (data) {
      setNowSliding(true);
      const TotalMovieSize = data.results.length - 1;

      setSlideIdx((prev) =>
        prev >= TotalMovieSize - pageOffset ? 0 : prev + pageOffset
      );
    }
  };
  const ToggleNowSlide = () => setNowSliding(false);

  return (
    <>
      <SlideButtonWrapper>
        <SlideButton>{"<"}</SlideButton>
        <SlideButton onClick={onClickNextButton}>{">"}</SlideButton>
      </SlideButtonWrapper>
      <AnimatePresence initial={false} onExitComplete={ToggleNowSlide}>
        <Row
          custom={window.innerWidth}
          variants={SlideRowVariant}
          initial={"init"}
          animate={"come"}
          exit={"exit"}
          key={slideIdx}
        >
          {data?.results
            .slice(1)
            .slice(slideIdx, 6 + slideIdx)
            .map((val) => (
              <Box
                bgPhoto={makeImagePath(val.poster_path || "", "w500")}
                variants={BoxVariant}
                whileHover={"hover"}
                initial={"init"}
                layoutId={val.id + ""}
                onClick={() => OnClickMovieBox(val.id + "")}
                style={{
                  opacity:
                    MovieModalMatch?.isExact &&
                    MovieModalMatch.params.movieId === String(val.id)
                      ? 0
                      : 1,
                }}
                key={val.id}
              >
                <InfoWrapper>
                  <Info variants={InfoVariant}>{val.title}</Info>
                </InfoWrapper>
              </Box>
            ))}
        </Row>
      </AnimatePresence>
    </>
  );
}

export default memo(MovieRow);
