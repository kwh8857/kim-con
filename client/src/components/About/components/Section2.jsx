import React from "react";
import styled from "styled-components";
const first = [
  "#벤처인증",
  "#기업경영지원",
  "#기업행정업무",
  "#고용지원금",
  "#창업패키지",
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
        display: flex;
        width: 950px;
        flex-wrap: wrap;
        gap: 23px 10px;
        justify-content: center;
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
    }
  }
  @media screen and (max-width: 1365px) {
    height: 441px;
    & > div {
      width: 720px;
      padding-top: 89px;
      & > .grid-wrapper {
        .grid {
          gap: 26px 10px;
          width: 720px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 375px;
    & > div {
      width: 320px;
      padding-top: 54px;
      & > .title {
        font-size: 20px;
        text-align: center;
        line-height: 1.65;
        width: 230px;
      }
      & > .grid-wrapper {
        margin-top: 30px;
        .grid {
          gap: 16px 7px;
          width: 320px;
          & > .grid-box {
            width: 94px;
            height: 35px;
            font-size: 11px;
          }
        }
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
          <div className="grid">
            {first.map((item, idx) => {
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
