import React from "react";
import styled from "styled-components";
const first = [
  "#벤처인증",
  "#기업경영지원",
  "#기업행정업무",
  "#고용지원금",
  "#창업패키지",
];
const two = [
  "#ISO 인증",
  "#바우처사업",
  "#HACCP 인증",
  "#기업부설연구소",
  "#정책자금",
  "#기업세무지원",
];
const Wrapper = styled.section`
  width: 100%;
  height: 335px;
  background-color: #47d99b;
  & > div {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-top: 71px;
    box-sizing: border-box;
    align-items: center;
    & > .title {
      font-size: 25px;
      font-family: "ygo";
      color: #414141;
    }
    & > .grid-wrapper {
      margin-top: 32px;
      .grid {
        display: grid;
        column-gap: 11px;
        & > .grid-box {
          width: 150px;
          height: 56px;
          border-radius: 53px;
          background-color: white;
          font-size: 17px;
          font-family: "ygo";
          color: #00be83;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .first {
        grid-template-columns: repeat(5, 150px);
        margin-bottom: 23px;
        justify-content: center;
      }
      .two {
        grid-template-columns: repeat(6, 150px);
      }
    }
  }
`;
function Section2() {
  return (
    <Wrapper>
      <div>
        <div className="title">
          기업 성장에 대한 모든 것, 김과장과 함께하세요
        </div>
        <div className="grid-wrapper">
          <div className="grid first">
            {first.map((item, idx) => {
              return (
                <div key={idx} className="grid-box">
                  {item}
                </div>
              );
            })}
          </div>
          <div className="grid two">
            {two.map((item, idx) => {
              return (
                <div key={idx} className="grid-box">
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Section2;
