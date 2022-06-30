import React from "react";
import LoginIcon from "../../assets/icon-login.svg";
import RegisterIcon from "../../assets/icon-register.svg";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  button{
    display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;
  padding: 0 19.2px 0;
  height: 40px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;
  color: #28303f;
  font-size: 16px;
  font-weight: 700;
  font-family: "Apple SD Gothic Neo";
  cursor: pointer;
  }
`;
export default function LoginButtons({ isLogin }) {
  return (
    <>
      <GlobalStyle />
      <button className="btn-login" onClick={isLogin}>
        <img src={LoginIcon} alt="" />
        <span>Login</span>
      </button>
      <button className="btn-register">
        <img src={RegisterIcon} alt="" />
        <span>Register</span>
      </button>
    </>
  );
}
