import React from "react";
import Card from "../Main/Card";
import data from "../../assets/db/data.json";
import styled from "styled-components";

const ContentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`;

export default function CardList() {
  return (
    <ContentList>
      {data.posts
        .map((post) => (
          <Card
            post={post}
            key={post.id}
            postContent={post.contents}
            category={post.category}
          />
        ))
        .reverse()}
    </ContentList>
  );
}
