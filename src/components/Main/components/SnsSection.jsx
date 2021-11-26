import React from "react";
import styled from "styled-components";
const arr = [
  {
    title: "김과장 컨설팅 블로그",
    sub: `네이버 블로그에서 김과장 컨설팅의
다양한 소식을 만나보세요`,
    logo: "",
  },
  {
    title: "김과장 컨설팅 블로그",
    sub: `네이버 블로그에서 김과장 컨설팅의
다양한 소식을 만나보세요`,
    logo: "",
  },
  {
    title: "김과장 컨설팅 블로그",
    sub: `네이버 블로그에서 김과장 컨설팅의
다양한 소식을 만나보세요`,
    logo: "",
  },
];
const Wrapper = styled.section`
  width: 100%;
  height: 585px;
  background-color: #47d99b;
  & > div {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    padding-top: 99px;
    box-sizing: border-box;
    & > .logo {
      background-image: url("/assets/whitesteach.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 113px;
      height: 44.1px;
      color: #00be83;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > .title {
      font-size: 40px;
      font-weight: bold;
      margin-top: 9px;
    }
    & > .sns-wrapper {
      margin-top: 22px;
      display: grid;
      grid-template-columns: repeat(3, 321px);
      column-gap: 14px;
      & > .sns-box {
        width: 100%;
        height: 215px;
        background-color: white;
        border-radius: 10px;
        padding-left: 32px;
        padding-top: 36px;
        box-sizing: border-box;
        color: #434343;
        & > .title {
          font-size: 22px;

          font-family: "ygo";
        }
        & > .sub {
          font-size: 15px;
          font-weight: 500;
          line-height: 1.6;
          white-space: pre-wrap;
          margin-top: 10px;
        }
      }
    }
  }
`;
function SnsSection() {
  return (
    <Wrapper>
      <div>
        <div className="logo">SNS</div>
        <div className="title">김과장 컨설팅 SNS</div>
        <div className="sns-wrapper">
          {arr.map(({ title, sub }, idx) => {
            return (
              <div className="sns-box" key={idx}>
                <div className="title">{title}</div>
                <div className="sub">{sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default SnsSection;
