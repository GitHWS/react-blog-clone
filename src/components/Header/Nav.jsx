import React from "react";
import Logo from "./Logo";
import Login from "./Login";
import styled from "styled-components";

const ContainerNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  max-width: 1224px;
  width: 100%;
  margin: 0 auto;
`;

export default function Nav() {
  return (
    <ContainerNav>
      <Logo />
      <Login />
    </ContainerNav>
  );
}
