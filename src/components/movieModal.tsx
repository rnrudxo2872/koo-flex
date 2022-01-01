import { AnimatePresence, useViewportScroll } from "framer-motion";
import { memo } from "react";
import { IMovieModalProps } from "../interfaces/movieModal.interface";
import {
  InfoModal,
  InfoModalCover,
  InfoModalOverlay,
} from "../styleds/Home.styled";
import { InfoModalOverlayVariant } from "../variants/Home.variant";

function MovieModal(props: IMovieModalProps) {
  const { MovieModalMatch, OnClickModalOverlay, clickedMovieInfo } = props;
  const { scrollY } = useViewportScroll();

  return (
    <AnimatePresence>
      {MovieModalMatch?.isExact ? (
        <>
          <InfoModalOverlay
            variants={InfoModalOverlayVariant}
            onClick={OnClickModalOverlay}
            exit={"exit"}
          />
          <InfoModal
            animate={{ zIndex: 99 }}
            nowY={scrollY.get() + 100}
            layoutId={MovieModalMatch.params.movieId}
          >
            {clickedMovieInfo ? (
              <InfoModalCover bgCover={clickedMovieInfo.backdrop_path} />
            ) : null}
          </InfoModal>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default memo(MovieModal);
