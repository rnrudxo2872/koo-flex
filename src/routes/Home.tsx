import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import { getNowPlayings } from "../api";
import { INowPlaying } from "../interfaces/moviedata.interface";
import { MainWrapper } from "../styleds/default.styled";
import {
  Banner,
  Box,
  Loader,
  OverView,
  Row,
  Slider,
  Title,
} from "../styleds/Home.styled";
import { makeImagePath } from "../utils";
import { SlideRowVariant } from "../variants/Home.variant";

const PageOffset = 6;

function Home() {
  const { isLoading, data } = useQuery<INowPlaying>(
    ["moviesData", "NowPlaying"],
    getNowPlayings
  );
  const [slideIdx, setSlideIdx] = useState(0);

  const OnBannerClick = () => {
    if (data) {
      const TotalMovieSize = data.results.length - 1;
      console.log(slideIdx, TotalMovieSize - PageOffset);
      setSlideIdx((prev) =>
        slideIdx >= TotalMovieSize - PageOffset ? 0 : prev + PageOffset
      );
    }
  };

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
            <AnimatePresence>
              <Row
                variants={SlideRowVariant}
                initial={"init"}
                animate={"come"}
                exit={"exit"}
                key={slideIdx}
              >
                {data?.results
                  .slice(1)
                  .slice(slideIdx, 6 + slideIdx)
                  .map((val, idx) => (
                    <Box
                      key={val.id}
                      bgPhoto={makeImagePath(val.poster_path || "", "w500")}
                    ></Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </MainWrapper>
  );
}

export default Home;
