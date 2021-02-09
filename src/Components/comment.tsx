import React from "react";
import { Jumbotron } from "react-bootstrap";
import styled from "styled-components";

function Comment({ body, name }: any) {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  return (
    <div>
      <Jumbotron>
        <Title>{name}</Title>
        <p>{body}</p>
      </Jumbotron>
    </div>
  );
}

export default Comment;
