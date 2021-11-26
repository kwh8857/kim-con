import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
const locationArr = [
  "서울",
  "경기",
  "강원",
  "전남",
  "경북",
  "경남",
  "광주",
  "부산",
  "울산",
  "충북",
  "충남",
  "전북",
  "인천",
  "대전",
  "세종",
  "대구",
];
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 153px);
  column-gap: 15px;
  row-gap: 17px;
`;
const Box = styled.div`
  height: 60px;
  width: 100%;
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
    position: relative;
    & > img {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  & > span {
    font-size: 18px;
    font-weight: 500;
    margin-left: 7px;
  }
  ${(props) => {
    return css`
      border: solid 1px ${props.isNow ? "#00be83" : "#dbdbdb"};
      color: ${props.isNow ? "#00be83" : "black"};
      background-color: ${props.isNow ? "rgba(71, 217, 155, 0.1)" : "white"};
      & > button {
        border: ${props.isNow ? "unset" : "solid 1px #dbdbdb"};
      }
    `;
  }}
`;
function LocationSelect() {
  const dispatch = useDispatch();
  const nowLocation = useSelector((state) => state.database.ask.location);

  const update = useCallback(
    (val) => {
      dispatch({
        type: "db/location",
        payload: val,
      });
    },
    [dispatch]
  );
  return (
    <Wrapper>
      {locationArr.map((item, idx) => {
        return (
          <Box
            key={idx}
            onClick={() => {
              update(item);
            }}
            isNow={item === nowLocation ? true : false}
          >
            <button>
              {nowLocation === item ? (
                <img src="/assets/check.svg" alt="" />
              ) : undefined}
            </button>
            <span>{item}</span>
          </Box>
        );
      })}
    </Wrapper>
  );
}

export default LocationSelect;
