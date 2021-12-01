import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  height: 822.5px;
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
      margin-top: 87.7px;
      & > .title {
        font-size: 24px;
        font-family: "ygo";
        color: #00be83;
      }
      & > .sub {
        margin-top: 11.5px;
        font-size: 17px;
        line-height: 1.65;
      }
    }
  }
`;
function Top() {
  return (
    <Wrapper>
      <div>
        <div className="speech-bubble">#스타트업 치트키</div>
        <div className="title">벤처 인증</div>
        <div className="sub">
          무엇부터 해야하나? 복잡한 인증절차도 <br /> 김과장과 함께라면 일사천리
        </div>
        <figure>
          <img
            src="/assets/service/venture/middle.jpg"
            srcSet="/assets/service/venture/middle@2x.jpg 2x ,assets/service/venture/middle@3x.jpg 3x"
            alt=""
          />
        </figure>
        <div className="bottom">
          <div className="title">벤처인증은 무엇인가요?</div>
          <div className="sub">
            벤처기업은 벤처(Venture)와 기업(Company)의 합성어로서 벤처는 모험적
            사업, 금전상의 위험을 무릅쓴 행위를 뜻하고 기업은 영리를 목적으로
            생산요소를 종합하여 계속적으로 경영하는 경제적 사업이란 의미를
            내포하고 있습니다. 벤처기업의 정의는 학술적으로 명확히 정리된 개념은
            없으며 국가에 따라 정책대상으로 다양하게 사용되고 있습니다. 원래
            미국에서는 다른 기업보다 상대적으로 사업의 위험성은 높으나 성공하면
            높은 수익이 보장되는 기업으로, 일반적으로 Venture Capital로부터
            투자를 받은 기업을 의미이지만, 다른 나라에서는 신사업 기술집약기업,
            첨단기술기업 등을 의미하는 다른 개념으로 사용하고 있습니다.
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Top;
