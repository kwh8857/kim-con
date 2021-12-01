import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: solid 1px #dbdbdb;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 25px;
  box-sizing: border-box;
  align-items: center;
  & > .left {
    display: flex;
    align-items: center;
    & > button {
      cursor: pointer;
      width: 26px;
      height: 26px;

      border-radius: 26px;
      background-color: white;
    }
    & > span {
      font-size: 18px;
      font-weight: 500;
      color: #434343;
      margin-left: 7px;
    }
  }
  & > .right {
    text-decoration: underline;
    font-size: 15px;
    font-weight: 500;
    color: #434343;
    cursor: pointer;
  }
  ${(props) => {
    return css`
      border: solid 1px ${props.isAgree ? "#00be83" : "#dbdbdb"};
      background-color: ${props.isAgree ? "rgba(71, 217, 155, 0.1)" : "white"};
      & > .left {
        & > button {
          border: ${props.isAgree ? "unset" : " solid 1px #dbdbdb"};
        }
      }
    `;
  }}
`;
function Agree() {
  const dispatch = useDispatch();
  const isAgree = useSelector((state) => state.database.ask.agree);
  const change = useCallback(() => {
    dispatch({
      type: "db/agree",
      payload: !isAgree,
    });
  }, [dispatch, isAgree]);
  return (
    <Wrapper isAgree={isAgree}>
      <div className="left">
        <button onClick={change}>
          {isAgree ? <img src="/assets/check.svg" alt="" /> : undefined}
        </button>
        <span>개인정보 수집 및 이용에 동의합니다</span>
      </div>
      <div className="right">내용보기</div>
    </Wrapper>
  );
}

export default Agree;
