import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper className="App">
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={"/"} />
          <Route path={"/tv"} />
          <Route path={"/search"} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
