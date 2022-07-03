import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Main from "./components/Main/Main";
import Footer from "./components/footer/Footer";

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f9f9f9;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </Wrapper>
  );
}

export default App;
