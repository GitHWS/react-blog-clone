import React from "react";
import imgSrc from "../../assets/Logo.svg";
import styled from "styled-components";

const ContentImg = styled.img`
  height: 27px;
`;

const ContentA = styled.a`
  display: block;
`;

export default function Logo() {
  return (
    <>
      <ContentA href="null">
        <ContentImg src={imgSrc} alt="My blog" />
      </ContentA>
    </>
  );
}
