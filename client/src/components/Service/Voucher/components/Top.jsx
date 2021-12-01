import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  height: 556.5px;
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
  }
`;
function Top() {
  return (
    <Wrapper>
      <div>
        <div className="speech-bubble">#당신에게 ‘바우처사업’이란?</div>
        <div className="title">바우처 사업</div>
        <div className="sub">
          필요한 곳 요긴하게 바우처를 활용하여 <br /> 기업경쟁력 높여드릴게요.
        </div>
        <figure>
          <img
            src="/assets/service/voucher/middle.jpg"
            srcSet="/assets/service/voucher/middle@2x.jpg 2x ,assets/service/voucher/middle@3x.jpg 3x"
            alt=""
          />
        </figure>
      </div>
    </Wrapper>
  );
}

export default Top;
