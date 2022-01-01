import { AnimatePresence } from "framer-motion";
import { memo } from "react";
import { IMovieRowProps } from "../interfaces/movieRow.interface";
import { Box, Info, InfoWrapper, Row } from "../styleds/Home.styled";
import { makeImagePath } from "../utils";
import {
  BoxVariant,
  InfoVariant,
  SlideRowVariant,
} from "../variants/Home.variant";

function MovieRow(props: IMovieRowProps) {
  const {
    nowWidth,
    slideIdx,
    data,
    OnClickMovieBox,
    MovieModalMatch,
    ToggleNowSlide,
  } = props;

  return (
    <AnimatePresence initial={false} onExitComplete={ToggleNowSlide}>
      <Row
        custom={nowWidth}
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
              WidthLength={(nowWidth - 5 * 7 - 200) / 6}
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
  );
}

export default memo(MovieRow);
