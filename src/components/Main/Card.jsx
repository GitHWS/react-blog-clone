import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  a{
    text-decoration: none;
    color: #000;
  }

  .created:before{
    display: inline-block;
    content:'|';
    margin:0 5px;
  }

  .author, .created{
    display: flex;
    align-items: center;
    gap:6px;
  }


  .category{
    margin-right:4px;
    padding:2px 12px;
    font-size:12px;
    color:#37aaec;
    background-color: #f5f5f5;
    border-radius:8px;
  }
`;

const CardBox = styled.article`
  display: flex;
  flex-direction: column;
  width: 288px;
  border-radius: 6px;
  overflow: hidden;
`;

const CardContBox = styled.div`
  padding: 16px 24px 24px;

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  background-color: #fff;
`;

const CardTitle = styled.h3`
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  word-break: break-all;
`;

const CardAuthor = styled.dl`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 12px;
  color: #767676;
`;

const CardProfileImg = styled.img`
  width: 24px;
  border-radius: 50%;
`;

const CardContent = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 1.4;
  color: #767676;
  text-indent: 5px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  word-break: break-all;
`;

export default function Card({ post, postContent, category }) {
  return (
    <li>
      <GlobalStyle />
      <a href="null">
        <CardBox>
          <img src={post.thumbnail} alt="thumbnail" />
          <CardContBox>
            {category.map((item) => (
              <span className="category">{item}</span>
            ))}
            <CardTitle>{post.title}</CardTitle>
            <CardAuthor>
              <dd className="author">
                <CardProfileImg src={post.profileImg} alt="profileImg" /> Chilli
              </dd>
              <dd className="created">{post.created}</dd>
            </CardAuthor>
            <CardContent>{postContent[0].text}</CardContent>
          </CardContBox>
        </CardBox>
      </a>
    </li>
  );
}
