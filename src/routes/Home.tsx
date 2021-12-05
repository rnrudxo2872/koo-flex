import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getNowPlayings } from "../api";
import { INowPlaying } from "../interfaces/moviedata.interface";
import { MainWrapper } from "../styleds/default.styled";
import {
  Banner,
  Box,
  Info,
  InfoWrapper,
  Loader,
  OverView,
  Row,
  Slider,
  Title,
} from "../styleds/Home.styled";
import { makeImagePath } from "../utils";
import {
  BoxVariant,
  InfoVariant,
  SlideRowVariant,
} from "../variants/Home.variant";

const PageOffset = 6;

function Home() {
  const { isLoading, data } = useQuery<INowPlaying>(
    ["moviesData", "NowPlaying"],
    getNowPlayings
  );
  const [slideIdx, setSlideIdx] = useState(0);
  const [nowWidth, setNowWidth] = useState(window.innerWidth);
  const [nowSilding, setNowSliding] = useState(false);

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
                  .map((val, idx) => (
                    <Box
                      bgPhoto={makeImagePath(val.poster_path || "", "w500")}
                      WidthLength={(nowWidth - 5 * 7 - 200) / 6}
                      variants={BoxVariant}
                      whileHover={"hover"}
                      initial={"init"}
                      key={val.id}
                    >
                      <InfoWrapper>
                        <Info variants={InfoVariant}>{val.title}</Info>
                      </InfoWrapper>
                    </Box>
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
