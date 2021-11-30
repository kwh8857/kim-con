import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  height: 927px;
  & > div {
    padding-top: 82.2px;
    box-sizing: border-box;
    width: 993px;
    margin: 0 auto;
    height: 100%;
    .speech-bubble {
      position: relative;
      background: #f4f4f4;
      width: fit-content;
      padding: 11px 21px;
      border-radius: 50px;
      font-size: 15px;
      font-weight: bold;
      color: #434343;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .speech-bubble:after {
      content: "";
      position: absolute;
      top: 9px;
      left: 10px;
      width: 0;
      transform: rotate(-45deg);
      height: 0;
      border-color: transparent;
      border-style: solid;
      border-width: 0 10px 18px;
      border-bottom-color: #f4f4f4;
      border-top: 0;
      margin-left: -8.5px;
      margin-top: -17px;
    }
    & > .title {
      margin-top: 10px;
      font-size: 40px;
      font-weight: bold;
    }
    & > .sub {
      margin-top: 15px;
      font-size: 17px;
      line-height: 1.65;
    }
    & > figure {
      margin-top: 35.2px;
    }
    & > .bottom {
      margin-top: 35.2px;
      display: flex;
      align-items: center;
      & > figure {
        width: 373.2px;
        height: 338.6px;
      }
      & > .right {
        & > .title {
          font-size: 28px;
          font-family: "ygo";
          color: #00be83;
        }
        & > .sub {
          width: 611.2px;
          font-size: 17px;
          line-height: 1.65;
          margin-top: 10.2px;
        }
      }
    }
  }
`;
function Top() {
  return (
    <Wrapper>
      <div>
        <div className="speech-bubble"># 기업하길 잘했네</div>
        <div className="title">기업지원금 컨설팅</div>
        <div className="sub">
          사업에 필요한 각종지원금 정책자금 , <br /> 기업대출 등 김과장이
          꼼꼼하게 따져 제안합니다.
        </div>
        <figure>
          <img
            src="/assets/service/fund/middle.jpg"
            srcSet="/assets/service/fund/middle@2x.jpg 2x ,assets/service/fund/middle@3x.jpg 3x"
            alt=""
          />
        </figure>
        <div className="bottom">
          <figure>
            <img src="/assets/service/fund/kim-logo.svg" alt="" />
          </figure>
          <div className="right">
            <div className="title">
              나에게 맞는 정책자금은 <br /> 어디에 있을까?
            </div>
            <div className="sub">
              정부 정책자금은 많은 혜택이 있지만 정작 정책자금 혜택을 필요로
              하는 기업과 개인은 정책자금 지원제도의 존재조차 모르는 경우가 많고
              알고 있더라도 수많은 종류의 정책자금 중에서 기업 현황에 적합한
              정책자금을 찾는 것은 매우 어렵습니다. 또한, 정책자금은 기관별로
              조건이 약간씩 다르고, 이율에도 차이를 보이며, 그 절차와 내용이
              매년 자주 바뀌기 때문에 정책자금을 지원받기까지의 절차와 조건,
              심사 내용이 타 금융기관 대출에 비해 까다롭고 복잡한 편입니다.
              정확한 조건을 알기 위해서는 해당 기관에 직접 전화 문의를 하거나
              홈페이지, 공지사항 등을 자세히 검토해봐야 하는 번거로움이
              있습니다.
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Top;
