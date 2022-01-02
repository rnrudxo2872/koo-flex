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

function Home() {
  const pageOffset = 6;

  const { isLoading, data } = useQuery<INowPlaying>(
    ["moviesData", "NowPlaying"],
    getNowPlayings
  );
  const MovieModalMatch = useRouteMatch<IMatchMovie>("/movies/:movieId");
  const PageHistory = useHistory();

  const clickedMovieInfo =
    MovieModalMatch?.params.movieId &&
    data?.results.find(
      (movie) => MovieModalMatch.params.movieId === String(movie.id)
    );

  const OnClickMovieBox = (movieId: string) =>
    PageHistory.push(`/movies/${movieId}`);
  const OnClickModalOverlay = () => PageHistory.push("/");

  return (
    <MainWrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
            <Title>{data?.results[0].title}</Title>
            <OverView>
              {(data?.results[0].overview.length || 0) <= 300
                ? data?.results[0].overview
                : `${data?.results[0].overview.slice(0, 100)}...`}
            </OverView>
          </Banner>
          <Slider>
            <MovieRow
              MovieModalMatch={MovieModalMatch}
              OnClickMovieBox={OnClickMovieBox}
              data={data}
              pageOffset={pageOffset}
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
