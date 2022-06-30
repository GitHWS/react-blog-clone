import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .banner{
    position: relative;
    height:432px;
    margin-bottom: -112px;
  }

  .banner-contents::before{
    content:'';
    display: block;
    position: absolute;
    top:0;
    left:0;
    width:calc((100% - 1224px) / 2 + 440px);
    height:100%;
    background-color: rgba(40, 48, 63, 0.5);
  }

  .banner-contents > *{
    position: relative;  
    line-height: 1.4;
  }
`;

const BannerInner = styled.div`
  width: 1224px;
  height: 100%;
  margin: 0 auto;
`;

const BannerTextBox = styled.div`
  padding: 70px 0 145px;
  width: 280px;
  color: #fff;
  text-align: center;
`;

const BannerSubTitle = styled.p`
  padding: 10px 0 8px;
  font-size: 20px;
  letter-spacing: 4px;
  border-top: 1px solid rgba(249, 249, 249, 0.3);
  border-bottom: 1px solid rgba(249, 249, 249, 0.3);
`;

const BannerTitle = styled.p`
  margin: 16px 0;
  font-size: 54px;
  font-weight: bold;
`;

const BannerDesc = styled.p`
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
  word-break: break-all;
`;

export default function HeroTitle() {
  return (
    <div className="banner">
      <GlobalStyle />
      <BannerInner className="max-width">
        <BannerTextBox className="banner-contents">
          <BannerSubTitle>React Blog</BannerSubTitle>
          <BannerTitle>My BLOG</BannerTitle>
          <BannerDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nostrum dolor provident beatae deserunt magnam, illo neque. Maiores
            ipsum commodi dolorum beatae aliquid laboriosam est
          </BannerDesc>
        </BannerTextBox>
      </BannerInner>
    </div>
  );
}
