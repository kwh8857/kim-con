import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => {
    return css`
      margin-top: ${props.type === "category" || props.type === "tel"
        ? "36px"
        : props.type === "name"
        ? 0
        : "43px"};
    `;
  }}
  & > .title {
    font-size: 15px;
    font-weight: bold;
  }
  & > input {
    margin-top: 10px;
    width: 468px;
    height: 50px;
    border-radius: 10px;
    border: solid 1px #dbdbdb;
    padding: 15px 16px;
    box-sizing: border-box;
  }
`;
function Insert({ data: { title, type, dispatcher } }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  return (
    <Wrapper type={type}>
      <span className="title">{title}</span>
      <input
        type={type === "number" ? "number" : "text"}
        value={value}
        maxLength={type === "tel" ? 12 : 50}
        onChange={(e) => {
          if (type === "tel") {
            const number = e.target.value.replace(/[^0-9-]/gi, "");
            const val = number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
            setValue(val);
            dispatch({
              type: dispatcher,
              payload: val,
            });
          } else {
            setValue(e.target.value);
            dispatch({
              type: dispatcher,
              payload: e.target.value,
            });
          }
        }}
      />
    </Wrapper>
  );
}

export default Insert;
