import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { formatDate } from "../../lib/factory";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  background-color: white;
  border-radius: 5px;
  position: relative;
  padding: 0 34px 0 28px;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: pointer;
  & > .left {
    display: flex;
    align-items: center;
    & > .title {
      white-space: nowrap;
      font-size: 16px;
      font-weight: bold;
      width: 380px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  & > .right {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    color: #989898;
    column-gap: 39px;
    & > .name {
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & > .tel {
      font-weight: 500;
      color: #00be83;
    }
    & > button {
      cursor: pointer;
      position: absolute;
      right: 13px;
      width: 88px;
      height: 37px;
      border-radius: 5px;
      font-size: 14px;
      font-weight: bold;
    }
  }

  ${(props) => {
    return css`
      & > .left {
        & > .status {
          background-color: ${props.status ? "rgb(221,238,255)" : "#f7f8fa"};
          color: ${props.status ? "#007fff" : "#a8a8a8"};
        }
      }
      & > .right {
        & > button {
          color: ${props.status ? "#434343" : "white"};
          background-color: ${props.status ? "#dbdbdb" : "#007fff"};
        }
      }
    `;
  }}
`;
function QuestionCard({ data }) {
  const {
    data: {
      company,
      sector,
      etc: { tel },
    },
    timestamp,
  } = data;
  const navigate = useHistory();
  const __nav = useCallback(() => {
    navigate.push(`/answer/${timestamp}`);
  }, [data, navigate]);
  return (
    <Wrapper onClick={__nav}>
      <div className="left">
        <div className="title">{company}</div>
      </div>
      <div className="right">
        <div className="tel">{tel}</div>
        <div className="name">{sector}</div>
        <div className="time">{formatDate(timestamp, ".")}</div>
      </div>
    </Wrapper>
  );
}

export default QuestionCard;
