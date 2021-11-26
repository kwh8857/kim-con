import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

const arr = [
  "예비사업자",
  "1년 이내",
  "1~3년",
  "3년~5년",
  "5년~7년",
  "7년 이상",
];
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 153px);
  column-gap: 15px;
  margin-top: 8px;
`;
const Box = styled.div`
  width: 153px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  box-sizing: border-box;
  cursor: pointer;
  & > button {
    width: 26px;
    height: 26px;
    border-radius: 26px;
    background-color: white;
    margin-right: 7px;
  }
  & > span {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.67;
  }
  ${(props) => {
    return css`
      border: solid 1px ${props.isNow ? "#00be83" : "#dbdbdb"};
      background-color: ${props.isNow ? "rgba(71, 217, 155, 0.1)" : "white"};
      & > button {
        border: ${props.isNow ? "unset" : "solid 1px #dbdbdb"};
      }
      & > span {
        color: ${props.isNow ? "#00be83" : "#434343"};
      }
    `;
  }}
`;
function HistorySelect() {
  const dispatch = useDispatch();
  const nowhistory = useSelector((state) => state.database.ask.history);
  const dbhistory = useCallback(
    (val) => {
      dispatch({ type: "db/history", payload: val });
    },
    [dispatch]
  );
  return (
    <Wrapper>
      {arr.map((item, idx) => {
        return (
          <Box
            key={idx}
            isNow={item === nowhistory ? true : false}
            onClick={() => {
              dbhistory(item);
            }}
          >
            <button>
              {item === nowhistory ? (
                <figure>
                  <img src="/assets/check.svg" alt="" />
                </figure>
              ) : undefined}
            </button>
            <span>{item}</span>
          </Box>
        );
      })}
    </Wrapper>
  );
}

export default HistorySelect;
