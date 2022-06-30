import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const HeaderBox = styled.header`
  height: 64px;
`;

export default function Header() {
  return (
    <HeaderBox>
      <Nav />
    </HeaderBox>
  );
}
