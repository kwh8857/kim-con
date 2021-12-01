import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  height: 841px;
  background-color: #f8f8f8;
  & > div {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    padding-top: 79.2px;
    box-sizing: border-box;
    .title {
      font-size: 24px;
      font-family: "ygo";
      color: #00be83;
    }
    .bar {
      width: 100%;
      height: 1px;
      background-color: #dbdbdb;
      margin-top: 46.5px;
      margin-bottom: 38.5px;
    }
    & > .top {
      & > .sub {
        font-size: 17px;
        margin-top: 13.5px;
      }
    }
    & > .bottom {
      & > .content {
        width: 100%;
        height: 335px;
        background-color: white;
        border-radius: 10px;
        margin-top: 25.5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 66px 0 28.5px;
        box-sizing: border-box;
        & > .left {
          font-size: 17px;
          line-height: 2.06;
        }
        & > figure {
          width: 205px;
          height: 156px;
        }
      }
    }
  }
`;
function Bottom() {
  return (
    <Wrapper>
      <div>
        <div className="top">
          <div className="title">기업부설연구소 인증</div>
          <div className="sub">
            국가기관에서 연구소 및 전담 부서의 설립을 인정하고 우대하는 제도
          </div>
        </div>
        <div className="bar" />
        <div className="bottom">
          <div className="title">기업부설연구소 인증 , 어떤 혜택이 있나요?</div>
          <div className="content">
            <div className="left">
              - 직원 1인당 25%의 세액공제 <br /> - 설비투자에 대한 10%의
              세액공제 <br /> - 청년 고용 시 인건비 50% 지원 혜택 <br /> -
              연구전담요원 연구활동비의 소득세 비과세 적용 <br /> - 기술이전 및
              대여 등에 대한 과세 특례 <br /> - 중진공 등 대출 실행 시
              참고지표로 활용 <br /> - 국가기관 납품 등에 있어 추가 가산점을
              부여 <br /> - 벤처기업 인증의 요건
            </div>
            <figure>
              <img
                src="/assets/service/research/logo.jpg"
                srcSet="/assets/service/research/logo@2x.jpg 2x,/assets/service/research/logo@3x.jpg 3x"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Bottom;
