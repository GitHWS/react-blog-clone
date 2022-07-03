import React from "react";
import styled from "styled-components";
import AboutMeImg from "../../assets/profile.jpg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";
import Twitter from "../../assets/Twitter.svg";
import Github from "../../assets/Github.svg";

const AboutMeBox = styled.aside`
  padding: 40px 24px 70px;
  margin-right: 24px;
  float: left;
  width: 240px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
`;

const AboutMeh2 = styled.h2`
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: underline;
`;

const AboutMeh3 = styled.h3`
  margin: 60px 0 20px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: underline;
`;

const AboutMeProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const UserName = styled.p`
  margin: 12px 0 8px;
  color: #37aaec;
  font-weight: bold;
`;

const UserIntro = styled.p`
  font-size: 14px;
  padding: 0 4px;
  line-height: 1.4;
`;

const UserTagBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const UserTag = styled.a`
  padding: 2px 12px;
  border-radius: 10px;
  font-size: 12px;
  color: #6f6f6f;
  background-color: #f5f5f5;
  text-decoration: none;
`;

const FollowBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const FollowA = styled.a`
  display: block;
  padding: 4px;
`;

const FollowImg = styled.img`
  width: 16px;
`;

export default function Aboutme() {
  return (
    <AboutMeBox>
      <AboutMeh2>About Me</AboutMeh2>
      <AboutMeProfileImg src={AboutMeImg} alt="Profile" />
      <UserName>Chilli</UserName>
      <UserIntro>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </UserIntro>
      <AboutMeh3>Categories</AboutMeh3>
      <UserTagBox>
        <li>
          <UserTag href="null">Life</UserTag>
        </li>
        <li>
          <UserTag href="null">Style</UserTag>
        </li>
        <li>
          <UserTag href="null">Tech</UserTag>
        </li>
        <li>
          <UserTag href="null">Sport</UserTag>
        </li>
        <li>
          <UserTag href="null">Photo</UserTag>
        </li>
        <li>
          <UserTag href="null">Develop</UserTag>
        </li>
        <li>
          <UserTag href="null">Music</UserTag>
        </li>
      </UserTagBox>
      <AboutMeh3>Follow</AboutMeh3>
      <FollowBox>
        <li>
          <FollowA href="null">
            <FollowImg src={Facebook} alt="Facebook" />
          </FollowA>
        </li>
        <li>
          <FollowA href="null">
            <FollowImg src={Twitter} alt="Twitter" />
          </FollowA>
        </li>
        <li>
          <FollowA href="null">
            <FollowImg src={Instagram} alt="Instagram" />
          </FollowA>
        </li>
        <li>
          <FollowA href="null">
            <FollowImg src={Github} alt="Github" />
          </FollowA>
        </li>
      </FollowBox>
    </AboutMeBox>
  );
}
