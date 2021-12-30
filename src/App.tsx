import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Tv from "./routes/Tv";
import { useEffect } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const AppQueryClient = new QueryClient();

  useEffect(() => {
    const tag = document.createElement("script");
    const script = document.getElementsByTagName("script")[0];

    tag.src = "https://www.youtube.com/iframe_api";
    script.parentNode?.insertBefore(tag, script);

    window.onYouTubeIframeAPIReady = (e) => {
      console.log("hi");
    };
  }, []);

  return (
    <QueryClientProvider client={AppQueryClient}>
      <Wrapper className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <Switch>
            <Route path={"/tv"} component={Tv} />
            <Route path={"/search"} component={Search} />
            <Route path={["/", "/movies/:movieId"]} component={Home} />
          </Switch>
        </BrowserRouter>
      </Wrapper>
    </QueryClientProvider>
  );
}

export default App;
