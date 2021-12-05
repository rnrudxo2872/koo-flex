import { useQuery } from "react-query";
import styled from "styled-components";
import { getNowPlayings } from "../api";
import { INowPlaying } from "../interfaces/moviedata.interface";
import { makeImagePath } from "../utils";

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Loader = styled.div`
  font-size: 50px;
  color: white;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  background-image: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%), url(${(props) => props.bgPhoto});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding-left: 60px;
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const OverView = styled.div`
  width: 40%;
  line-height: 1.3;
`;

function Home() {
  const { isLoading, data } = useQuery<INowPlaying>(
    ["moviesData", "NowPlaying"],
    getNowPlayings
  );

  return (
    <MainWrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
            <Title>{data?.results[0].title}</Title>
            <OverView>{data?.results[0].overview}</OverView>
          </Banner>
        </>
      )}
    </MainWrapper>
  );
}

export default Home;
