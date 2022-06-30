import React from "react";
import WriteIcon from "../../assets/icon-modify-white.svg";
import LogoutIcon from "../../assets/icon-logout.svg";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  button{
    display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
  padding:0 12px 0;
  height: 40px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  font-family: "Apple SD Gothic Neo";
  cursor: pointer;
  
  }

  .btn-write{
    padding:0 19.2px 0;
    background-color: #37aaec;
  }

  .btn-logout{
    color:#28303f;
  }

  .btn-logout img{
    width:20px;
  }
`;

export default function LogoutButtons({ isLogin }) {
  return (
    <>
      <GlobalStyle />
      <button className="btn-write">
        <img src={WriteIcon} alt="" />
        <span>Write</span>
      </button>
      <button className="btn-logout" onClick={isLogin}>
        <img src={LogoutIcon} alt="" />
        <span>Logout</span>
      </button>
    </>
  );
}
