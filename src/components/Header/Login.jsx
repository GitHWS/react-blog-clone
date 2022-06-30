import React, { useState } from "react";
import ProfileImg from "../../assets/profile.jpg";
import styled from "styled-components";

import LoginButtons from "./LoginButtons";
import LogoutButtons from "./LogoutButtons";

const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContentProfile = styled.img`
  width: 44px;
  border-radius: 50%;
`;

export default function Login() {
  const [loginState, setLoginState] = useState(false);

  const handleLoginState = () => {
    setLoginState(true);
  };

  const handleLogoutState = () => {
    setLoginState(false);
  };

  return (
    <ContainerLogin>
      <a href="null">
        <ContentProfile src={ProfileImg} alt="profile" />
      </a>
      {loginState ? (
        <LogoutButtons isLogin={handleLogoutState} />
      ) : (
        <LoginButtons isLogin={handleLoginState} />
      )}
    </ContainerLogin>
  );
}
