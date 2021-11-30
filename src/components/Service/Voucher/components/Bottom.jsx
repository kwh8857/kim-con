import React from "react";
import styled from "styled-components";

const arr = [
  {
    title: "중소기업 혁신 바우처란?",
    sub: `기술 및 경영능력이 열악한 제조기업을 대상으로 기업진단에 따라
바우처 방식의 맞춤형 서비스를 제공해 제조 중소기업의 경쟁력을 강화하는 사업입니다. `,
    content: [
      {
        title: "전체 예산",
        data: "526억 (2021 기준)",
      },
      {
        title: "지원 규모",
        data: "수혜기업 2,000개 / 수행기관 1,800개",
      },
      {
        title: "지원 분야",
        data: "컨설팅, 기술 지원, 마케팅 등",
      },
    ],
  },
  {
    title: "비대면 서비스 바우처 지원사업 이란?",
    sub: `비대면바우처플랫폼은 화상회의, 재택근무 등의 비대면 서비스 공급기업과 수요기업을 연결하는 오픈마켓으로,
사업 참여신청, 바우처 사용, 결제, 정산까지 플랫폼에서 비대면•온라인으로 처리되는 시스템입니다.`,
    content: [
      {
        title: "전체 예산",
        data: "6,000억 (2021 기준)",
      },
      {
        title: "지원 규모",
        data: "16만개 기업, 1개 기업당 400만원, 200만원 지원",
      },
      {
        title: "지원 분야",
        data: "에듀테크, 재택근무, 보안, 온라인교육, 화상회의, 노무지원 등 비대면 서비스 분야",
      },
    ],
  },
  {
    title: "수출바우처 사업 이란?",
    sub: `각 정부부처 수출지원사업간 칸막이를 제거하고 중소ㆍ중견기업이 자사의 수출역량에 맞는
수출지원 사업을 자유롭게 선택할 수 있도록 ‘바우처’ 형태로 신규 도입한 사업입니다.`,
    content: [
      {
        title: "전체 예산",
        data: "704억 (2021 기준)",
      },
      {
        title: "지원 규모",
        data: "수혜기업 2,054개 / 수행기관 1,658개",
      },
      {
        title: "지원 분야",
        data: "지원하는 분야는 통번역, 특허, 홍보.동영상, 브랜드, 전시회, 해외인증 등",
      },
    ],
  },
  {
    title: "데이터바우처 지원사업 이란?",
    sub: `데이터 수요기업에게 직접 예산을 지원하는 방식이 아닌 필요한 데이터 또는 가공서비스를
사전 지정된 공급기업으로부터 제공받을 수 있는 ‘바우처’형식으로 데이터 활용을 지원 하는 사업입니다.`,
    content: [
      {
        title: "전체 예산",
        data: "1,230억 (2021 기준, 2025년까지 8,500억)",
      },
      {
        title: "지원 규모",
        data: "데이터구매 1,200건 내외, 일반가공 480건 내외, AI 900건 내외 (구매 1,800만원  가공 4,500만원 AI 7,000만원)",
      },
      {
        title: "지원 분야",
        data: "데이터 구매 및 데이터가공, AI학습용 데이터 가공",
      },
    ],
  },
];
const Wrapper = styled.section`
  height: 1974px;
  width: 100%;

  background-color: #f8f8f8;
  & > div {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    padding-top: 65px;
    box-sizing: border-box;
    display: grid;
    row-gap: 68px;
    & > .box {
      width: 100%;
      height: 369px;
      background-color: white;
      border-radius: 10px;
      padding: 50.2px 67px 34px 49px;
      box-sizing: border-box;
      & > .title {
        font-size: 24px;
        font-family: "ygo";
        color: #00be83;
      }
      & > .sub {
        font-size: 15px;
        line-height: 1.87;
        white-space: pre-wrap;
        margin-top: 21.5px;
      }
      & > .content {
        margin-top: 20px;
        border-radius: 10px;
        background-color: rgb(240, 253, 247);
        width: 100%;
        height: 168px;
        border-radius: 10px;
        padding: 20px 22px;
        box-sizing: border-box;
        display: grid;
        row-gap: 10px;
        & > .content-box {
          display: flex;
          align-items: center;
          & > .title {
            width: 84px;
            height: 34px;
            background-color: #47d99b;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-weight: bold;
            color: #434343;
          }
          & > .data {
            font-size: 15px;
            font-weight: 500;
            margin-left: 9px;
            color: #434343;
          }
        }
      }
    }
  }
`;
function Bottom() {
  return (
    <Wrapper>
      <div>
        {arr.map(({ title, sub, content }, idx) => {
          return (
            <div key={idx} className="box">
              <div className="title">{title}</div>
              <div className="sub">{sub}</div>
              <div className="content">
                {content.map(({ title, data }, idx) => {
                  return (
                    <div key={idx} className="content-box">
                      <div className="title">{title}</div>
                      <div className="data">{data}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Bottom;
