import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  height: 574.7px;
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
      & > .mb {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1365px) {
    height: 571px;
    & > div {
      width: 728px;
      padding-top: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > .sub {
        text-align: center;
      }
      & > figure {
        & > .pc {
          width: 728px;
          height: 187.6px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 460px;
    & > div {
      padding-top: 46.8px;
      width: 320px;
      & > .speech-bubble {
        font-size: 12px;
        padding: 9px 17.5px;
      }
      & > .title {
        font-size: 25px;
      }
      & > .sub {
        font-size: 13px;
        line-height: 1.62;
      }
      & > figure {
        margin-top: 30px;
        & > .mb {
          display: block;
        }
        & > .pc {
          display: none;
        }
      }
    }
  }
`;
function Top() {
  return (
    <Wrapper>
      <div>
        <div className="speech-bubble"># 기업부설연구소</div>
        <div className="title">연구개발전담부서</div>
        <div className="sub">
          중소기업의 필수 아이템, 기업이 가진 잠재적가치를 <br /> 생산할 수
          있도록 김과장컨설팅이 날개를 달아드립니다.
        </div>
        <figure>
          <img
            src="/assets/service/research/middle.jpg"
            srcSet="/assets/service/research/middle@2x.jpg 2x ,assets/service/research/middle@3x.jpg 3x"
            alt=""
            className="pc"
          />
          <img
            src="/assets/service/research/middle-mb.jpg"
            srcSet="/assets/service/research/middle-mb@2x.jpg 2x ,assets/service/research/middle-mb@3x.jpg 3x"
            alt=""
            className="mb"
          />
        </figure>
      </div>
    </Wrapper>
  );
}

export default Top;
