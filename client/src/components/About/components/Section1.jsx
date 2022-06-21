import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  height: 607px;
  width: 100%;
  background-color: #f8f8f8;
  & > div {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    padding-top: 130.5px;
    box-sizing: border-box;
    position: relative;
    & > .title {
      font-size: 40px;
      font-family: "ygo";
      line-height: 1.38;
    }
    & > .sub {
      margin-top: 18px;
      font-size: 17px;
      line-height: 1.47;
      & > .mb {
        display: none;
      }
    }
    & > figure {
      width: 721.4px;
      height: 401.5px;
      position: absolute;
      right: 0;
      bottom: -8px;
    }
  }
  @media screen and (max-width: 1365px) {
    height: 741px;
    & > div {
      width: 721px;
      padding-top: 123px;
      text-align: center;
      & > .title {
        font-size: 38px;
        line-height: 1.45;
      }
      & > .sub {
        font-size: 16px;
        line-height: 1.56;
        margin-top: 24px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 429px;
    & > div {
      width: 321px;
      padding-top: 63px;
      & > .title {
        font-size: 23px;
        line-height: 1.43;
      }
      & > .sub {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5;
        margin-top: 18px;
        & > .mb {
          display: block;
        }
      }
      & > figure {
        width: 321px;
        height: 178.7px;
        bottom: -4px;
      }
    }
  }
`;
function Section1() {
  return (
    <Wrapper>
      <div>
        <div className="title">
          각 분야의 전문가들을 <br /> 우리는 과장이라 부릅니다.
        </div>
        <div className="sub">
          ‘기업이 가진 잠재적 가치를 생산할 수 있도록’ <br /> 기업에 알맞는
          정부지원사업을 기획지원하며 <br /> 스타트업의 생존과 사업화 성공을
          위해, <br className="mb" /> 대표님과 함께 뛰어갑니다.
        </div>
        <figure>
          <img
            src="/assets/about/about1.png"
            srcSet="/assets/about/about1@2x.png 2x , /assets/about/about1@3x.png 3x"
            alt=""
          />
        </figure>
      </div>
    </Wrapper>
  );
}

export default Section1;
