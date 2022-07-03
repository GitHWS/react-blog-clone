import React from "react";
import styled from "styled-components";
import ArrowTop from "../../assets/ArrowTop.svg";

const FooterBox = styled.footer`
  margin-top: 100px;
  width: 100%;
  height: 80px;
  background-color: #fff;
`;

const FooterInner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 1224px;
  height: 100%;
  color: #767676;
`;

const FooterTopBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 22px 6px 1px;
  width: 64px;
  height: 64px;
  color: #fff;
  border-radius: 5px 5px 0 0;
  background: #37aaec url(${ArrowTop}) no-repeat 50% 4px / 40px;
  cursor: pointer;
`;

export default function Footer() {
  return (
    <FooterBox>
      <FooterInner>
        <h2>©Weniv Corp.</h2>
        <FooterTopBtn>TOP</FooterTopBtn>
      </FooterInner>
    </FooterBox>
  );
}
