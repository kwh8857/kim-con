import React from "react";
import styled from "styled-components";

const AnswerHead = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  padding-bottom: 10px;
  border-bottom: solid 1px #dbdbdb;
  margin-bottom: 25px;
  & > img {
    width: fit-content;
  }
  & > .text {
    font-size: 26px;
    font-weight: bold;
  }
`;

function Head({ img, text }) {
  return (
    <AnswerHead>
      {img}
      <div className="text">{text}</div>
    </AnswerHead>
  );
}

export default Head;
