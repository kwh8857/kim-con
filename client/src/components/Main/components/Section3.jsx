import React from "react";
import styled from "styled-components";
import Bubble from "./Bubble";
const arr = [
  {
    q: "수많은 기업지원금, 대체 어떻게 받을 수 있는건가요?",
    a: `대략 300여 가지나 되는 중소기업 정부지원금은 신청요건과 조건 , 심사절차 등이 조금씩
다르므로 기업에 맞는 적합한 지원금을 김과장이 꼼꼼하게 챙겨드릴게요.`,
    type: "left",
  },
  {
    q: "저희 회사가 신청가능한 고용지원금이 있나요?",
    a: ` 고용지원금 대상 지원은 복잡한 과정을 통해서 진행이 되고 있기 때문에 일반 기업들은
지원을 받기위해  많은 서류를 준비하고 제출하는 데 있어 어려움을 겪고 있습니다. 
기업의 애로사항 김과장이 해결해 드릴게요.`,
    type: "flex-end",
  },
  {
    q: "창업하고 싶은데 뭐부터 해야하나요?",
    a: `예비 창업자님 이라면 가장 먼저 무엇을 하시겠습니까? 정답은 김과장을 가장 먼저 만나보
는 것입니다. 복잡한 창업절차에 대한 모든것 김과장컨설팅이 차근차근 정리해 드립니다.`,
    type: "left",
  },
  {
    q: "정부지원금 대상은 누구인가요?",
    a: `중기업 이나 소기업 뿐만 아니라 이제는 누구나 대상자가 될 수 있습니다. 매년 개정되는 지
원금과 지원대상 김과장이 한발 앞서 제안해 드릴게요.`,
    type: "flex-end",
  },
];
const Wrapper = styled.section`
  height: 1631px;
  background-color: #47d99b;
  padding: 152px 189px 172px 189px;
  box-sizing: border-box;
  & > div {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    & > .title {
      text-align: center;
      font-size: 35px;
      font-family: "ygo";
      line-height: 1.43;
      & > .focus-title {
        font-size: 60px;
        width: 369px;
        height: 69px;
        background-color: white;
        margin-top: 19px;
        line-height: unset;
        padding: 5px;
      }
    }
    & > .bubble-wrapper {
      margin-top: 68px;
      display: grid;
      row-gap: 37px;
    }
  }
`;

function Section3() {
  return (
    <Wrapper>
      <div>
        <div className="title">
          <span>
            어디서부터 시작해야 할지 <br /> 벌써부터 막막한 당신을 위한
            <br />
          </span>
          <span className="focus-title">김과장컨설팅</span>
        </div>
        <article className="bubble-wrapper">
          {arr.map(({ q, a, type }, idx) => {
            return <Bubble key={idx} q={q} a={a} type={type} />;
          })}
        </article>
      </div>
    </Wrapper>
  );
}

export default Section3;
