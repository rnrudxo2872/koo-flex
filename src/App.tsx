import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Tv from "./routes/Tv";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path={"/tv"} component={Tv} />
          <Route path={"/search"} component={Search} />
          <Route path={"/"} component={Home} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
