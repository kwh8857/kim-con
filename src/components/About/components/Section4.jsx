import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  width: 100%;
  height: 1614px;
  background-color: #f8f8f8;
  & > div {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    padding-top: 174px;
    box-sizing: border-box;
    & > .left {
      & > figure {
        position: sticky;
        top: 0;
        width: 232.6px;
        height: 253.3px;
      }
      & > .title {
        margin-top: 38px;
        color: #434343;
        font-size: 40px;
        line-height: 1.38;
        color: #434343;
        font-family: "ygo";
      }
      & > .sub {
        margin-top: 20px;
        font-size: 17px;
        line-height: 1.47;
      }
    }
  }
`;
function Section4() {
  return (
    <Wrapper>
      <div>
        <div className="left">
          <figure>
            <img src="/assets/about-kim.svg" alt="" />
          </figure>
          <div className="title">
            김과장을 <br /> 만나면 생기는 일
          </div>
          <div className="sub">
            김과장은 늘 준비되어 있습니다. <br /> 복잡하고 번거로운 기업 업무!{" "}
            <br /> 김과장이 ‘쉽고. 빠르고, 정확하게’ 지원합니다.
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Section4;
