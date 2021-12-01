import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
const Wrapper = styled.textarea`
  width: 100%;
  height: 154px;
  border-radius: 10px;
  border: solid 1px #dbdbdb;
  margin-top: 9px;
  padding: 18px 23px;
  box-sizing: border-box;
`;
function TextArea() {
  const dispatch = useDispatch();

  return (
    <Wrapper
      onBlur={(e) => {
        dispatch({
          type: "db/content",
          payload: e.target.value,
        });
      }}
    ></Wrapper>
  );
}

export default TextArea;
