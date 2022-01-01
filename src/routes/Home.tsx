import { AnimatePresence, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useHistory, useRouteMatch } from "react-router-dom";
import { getNowPlayings } from "../api";
import MovieModal from "../components/movieModal";
import MovieRow from "../components/movieRow";
import { IMatchMovie, INowPlaying } from "../interfaces/moviedata.interface";
import { MainWrapper } from "../styleds/default.styled";
import {
  Banner,
  Loader,
  OverView,
  Slider,
  Title,
} from "../styleds/Home.styled";
import { makeImagePath } from "../utils";

const PageOffset = 6;

function Home() {
  const { isLoading, data } = useQuery<INowPlaying>(
    ["moviesData", "NowPlaying"],
    getNowPlayings
  );
  const [slideIdx, setSlideIdx] = useState(0);
  const [nowWidth, setNowWidth] = useState(window.innerWidth);
  const [nowSilding, setNowSliding] = useState(false);
  const MovieModalMatch = useRouteMatch<IMatchMovie>("/movies/:movieId");
  const PageHistory = useHistory();

  const clickedMovieInfo =
    MovieModalMatch?.params.movieId &&
    data?.results.find(
      (movie) => MovieModalMatch.params.movieId === String(movie.id)
    );

  const OnBannerClick = () => {
    if (nowSilding) return;
    if (data) {
      setNowSliding(true);
      const TotalMovieSize = data.results.length - 1;

      setSlideIdx((prev) =>
        slideIdx >= TotalMovieSize - PageOffset ? 0 : prev + PageOffset
      );
    }
  };
  const ToggleNowSlide = () => setNowSliding(false);
  const OnClickMovieBox = (movieId: string) =>
    PageHistory.push(`/movies/${movieId}`);
  const OnClickModalOverlay = () => PageHistory.push("/");

  useEffect(() => {
    function handleResize() {
      setNowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MainWrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
            onClick={OnBannerClick}
          >
            <Title>{data?.results[0].title}</Title>
            <OverView>
              {(data?.results[0].overview.length || 0) <= 300
                ? data?.results[0].overview
                : `${data?.results[0].overview.slice(0, 100)}...`}
            </OverView>
          </Banner>
          <Slider>
            <MovieRow
              ToggleNowSlide={ToggleNowSlide}
              MovieModalMatch={MovieModalMatch}
              OnClickMovieBox={OnClickMovieBox}
              data={data}
              nowWidth={nowWidth}
              slideIdx={slideIdx}
            />
          </Slider>
          <MovieModal
            MovieModalMatch={MovieModalMatch}
            OnClickModalOverlay={OnClickModalOverlay}
            clickedMovieInfo={clickedMovieInfo}
          />
        </>
      )}
    </MainWrapper>
  );
}

export default Home;
