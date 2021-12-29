import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > .title {
    font-size: 30px;
    font-weight: bold;
  }
  & > .right {
    transform: translateY(10px);
    display: flex;
    & > button {
      margin-left: 15px;
      cursor: pointer;
      width: 153px;
      height: 44px;
      border-radius: 6px;
      font-size: 16px;
      font-weight: bold;
      background-color: #e0e0e0;
    }

    .input-wrapper {
      background-color: white;
      height: 44px;
      border: solid 1px #dbdbdb;
      border-radius: 5px;
      display: flex;
      overflow: hidden;
      padding-left: 13px;
      padding-right: 16px;
      box-sizing: border-box;
      img {
        width: 21px;
        cursor: pointer;
      }
      input {
        margin-right: 10px;
        width: 100%;
        height: 100%;
        font-size: 15px;
        font-weight: 500;
      }
      input::placeholder {
        font-size: 15px;
        font-weight: 500;
        color: #a8a8a8;
      }
    }
  }
  ${(props) => {
    return css`
      & > .right {
        & > .input-wrapper {
          width: ${props.type === "question" ? "302px" : "215px"};
        }
      }
    `;
  }}
`;

function Search({ title, type, placeholder, searching, add }) {
  return (
    <Wrapper type={type}>
      <div className="title">{title}</div>
      <div className="right">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => {
              const val = e.target.value;
              searching(val);
            }}
          />
          <img src="/assets/grey-search.svg" alt="검색" />
        </div>
        {type !== "question" ? (
          <button onClick={add} className="insert">
            추가하기
          </button>
        ) : undefined}
      </div>
    </Wrapper>
  );
}

export default Search;
