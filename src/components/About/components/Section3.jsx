import React from "react";
import styled from "styled-components";
const arr = [
  {
    img: "assets/about2-1.svg",
    title: `온라인
상담 의뢰`,
  },
  {
    img: "assets/about2-2.svg",
    title: `온오프라인
상담`,
  },
  {
    img: "assets/about2-3.svg",
    title: `기업 유형별
최적화된 사업기획`,
  },
  {
    img: "assets/kimface.svg",
    title: `안정적인
기업운영 파트너`,
  },
  {
    img: "assets/about2-4.svg",
    title: `정책자금, 정부지원금
인증서발급`,
  },
  {
    img: "assets/about2-5.svg",
    title: `기업 맞춤형
솔루션 제시`,
  },
];
const Wrapper = styled.section`
  width: 100%;
  height: 1048px;
  & > div {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    padding-top: 130.7px;
    box-sizing: border-box;
    & > .logo {
      background-image: url("/assets/greysteach.svg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 113px;
      height: 44.1px;
      font-size: 16px;
      font-weight: bold;
      color: #434343;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > .title {
      margin-top: 20.5px;
      font-size: 40px;
      line-height: 1.38;
      color: #434343;
      font-family: "ygo";
    }
    & > .content {
      display: grid;
      grid-template-columns: repeat(3, 243px);
      column-gap: 101px;
      row-gap: 97px;
      margin-top: 97px;
      position: relative;
      & > .solid {
        position: absolute;
        right: 0;
        z-index: -1;
        width: 90px;
        height: 277px;
        border: solid 20px #47d99b;
        border-left: unset;
        border-radius: 40px;
        bottom: 90px;
      }
      & > .box {
        background-color: white;
        z-index: 10;
        position: relative;
        width: 100%;
        height: 199px;
        border-radius: 20px;
        box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.16);
        display: flex;
        justify-content: center;
        align-items: center;
        & > figure {
          position: absolute;
          top: -50px;
        }
        & > .title {
          font-size: 20px;
          font-weight: bold;
          white-space: pre-wrap;
          line-height: 1.5;
          text-align: center;
        }
        & > .arrow {
          width: 0;
          height: 0;
          border-top: 60px solid transparent;
          border-bottom: 60px solid transparent;
          border-left: 60px solid green;
        }
      }
    }
  }
`;
function Section3() {
  return (
    <Wrapper>
      <div>
        <div className="logo">진행 과정</div>
        <div className="title">
          김과장 컨설팅은 <br /> 이렇게 진행됩니다
        </div>
        <div className="content">
          {arr.map(({ img, title }, idx) => {
            return (
              <div key={idx} className="box">
                <figure>
                  <img src={img} alt="" />
                </figure>
                <div className="title">{title} </div>
                <div className="arrow" />
              </div>
            );
          })}
          <div className="solid" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Section3;
