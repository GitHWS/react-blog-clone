import React from "react";
import bgImgSrc from "../../assets/background.jpg";
import BannerTitle from "./BannerContents";
import styled from "styled-components";

const BannerBox = styled.div`
  height: 432px;
  margin-bottom: -112px;
  background: url(${bgImgSrc}) no-repeat center / cover;
`;

export default function Hero() {
  return (
    <BannerBox>
      <BannerTitle />
    </BannerBox>
  );
}
