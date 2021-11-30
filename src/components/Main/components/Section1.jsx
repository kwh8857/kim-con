import React from "react";
import styled, { css } from "styled-components";
const Wrapper = styled.section`
  box-sizing: border-box;
  & > .top {
    position: relative;
    padding-top: 163px;
    padding-left: 187px;
    padding-right: 187px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    & > .back {
      width: 100%;
      height: 621px;
      background-color: #47d99b;
      border-bottom-left-radius: 200px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    & > .left {
      display: flex;
      flex-direction: column;
      & > .sub-title {
        font-size: 30px;
        font-weight: bold;
        line-height: 1.43;
      }
      & > .title {
        margin-top: 11px;
        margin-bottom: 21px;
        font-size: 55px;
        font-family: "ygo";
      }
      & > .sub {
        font-size: 17px;
        font-weight: 500;
        line-height: 1.47;
      }
      & > button {
        width: 249px;
        height: 54px;
        background-color: white;
        border-radius: 57px;
        font-size: 18px;
        font-weight: bold;
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        & > img {
          width: 36.3px;
          height: 21.7px;
          margin-left: 17px;
        }
      }
    }
    & > .right {
      width: 473.4px;
      height: 512px;
    }
  }
  & > .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 192px;
    height: 1181px;
    & > .title {
      font-family: "ygo";
      font-size: 40px;
      line-height: 1.38;
    }
    .green {
      color: #00be83;
    }
    & > .sub {
      font-size: 17px;
      margin-top: 26px;
    }
    .speech-wrapper {
      margin-top: 61px;
      color: black;

      & > .bubble-bottom {
        display: flex;
      }
    }
  }
`;

const Bubble = styled.div`
  position: relative;
  width: 260px;
  height: 85px;
  padding: 0px;

  -webkit-border-radius: 46px;
  -moz-border-radius: 46px;
  border-radius: 46px;
  font-size: 25px;
  font-family: "ygo";
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    return css`
      background: ${props.color};
      transform: translate(${props.trans}, ${props.transy});
      ::after {
        border-color: ${props.color} transparent;
        left: ${props.left};
      }
    `;
  }}
  :after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 15px 9px 0;

    display: block;
    width: 0;
    z-index: 1;
    bottom: -15px;
  }
`;
function Section1() {
  return (
    <Wrapper>
      <article className="top">
        <div className="back" />
        <div className="left">
          <span className="sub-title">
            기업과 창업자들을 향한 <br /> 강력하고 알찬 기획의 시작
          </span>
          <span className="title">김과장 컨설팅</span>
          <span className="sub">
            스타트업의 생존과 사업화 성공을 위해, <br /> 기업 컨설팅 전문가
            김과장이 달려갑니다.
          </span>
          <button>
            <span> 김과장에게 문의하기</span>
            <img src="/assets/main/right-arrow.svg" alt="이동" />
          </button>
        </div>
        <figure className="right">
          <img
            src="/assets/main/kimmanager.png"
            srcSet="/assets/main/kimmanager@2x.png 2x , /assets/kimmanager@3x.png 3x"
            alt=""
          />
        </figure>
      </article>
      <article className="bottom">
        <span className="title">우리 기업의 사업화 계획</span>
        <span className="title green">
          어떤 것 부터 시작해야될지 고민이신가요?
        </span>
        <span className="sub">
          비정기적으로 업데이트되는 국가지원사업 확인하기, <br /> 우리 기업에
          맞는 사업화 전략, 무슨 내용인지 어렵고 복잡하기만 하다면 <br /> 기업
          컨설팅 전문가 김과장에게 맡겨주세요!
        </span>
        <article className="speech-wrapper">
          <Bubble
            className="bubble"
            color={"#00be83"}
            left={"61px"}
            trans={"220px"}
            transy={0}
          >
            R&D 지원사업?
          </Bubble>
          <div className="bubble-bottom">
            <Bubble
              className="bubble"
              color={"#f4f4f4"}
              left={"193px"}
              transy={"7.7px"}
              trans={0}
            >
              정책자금?
            </Bubble>
            <Bubble
              className="bubble"
              color={"#baf0e0"}
              trans={"50px"}
              left={"40px"}
              transy={"27.7px"}
            >
              기업지원금?
            </Bubble>
          </div>
        </article>
      </article>
    </Wrapper>
  );
}

export default Section1;
