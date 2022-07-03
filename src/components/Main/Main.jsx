import React from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import CardList from "./CardList";

const MainInner = styled.div`
  position: relative;
  z-index: 20;
  width: 1224px;
  margin: 0 auto;
`;

export default function Main() {
  return (
    <div className="main">
      <MainInner className="max-width">
        <AboutMe />
        <div>
          <CardList />
        </div>
      </MainInner>
    </div>
  );
}
