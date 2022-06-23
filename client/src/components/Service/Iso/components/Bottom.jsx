import React from "react";
import styled from "styled-components";

const arr = [
  {
    title: "ISO9001",
    content: `품질경영시스템의 요구 사항을 규정한 국제규격으로 ISO 인증 중 가장 기본에 해당하며
기업부설연구소 인증, 벤처기업 인증을 위한 요건에 해당하고, 해당 인증을 취득한 기업은
대출이자 감면, 기술 신용평가 시 가점, 조세특례제한법에 따른 기술비 세액공제, 조달청
입찰 등 기관 입찰 시 가점, 해외 수출 기업 등 평가 시 가점 등이 부여됩니다.`,
  },
  {
    title: "ISO 14001",
    content: `환경경영시스템에 관한 국제 규격으로 친환경적 경영을 할 수 있도록 합니다.
중진공, 기술보증기금, 신용보증기금 등 기관 대출 실행 시 참고지표로 활용됩니다.
대부분의 유명 프랜차이즈 업체의 경우 ISO9001, 14001인증을 획득하여 간판에 게시하거나
홍보활동의 일환으로 사용하고 있으며, 위 ISO9001에 더하여 가점이 적용됩니다.`,
  },
  {
    title: "ISO 45001",
    content: `안전보건경영시스템의 요구 사항을 규정한 국제규격으로 안전보건에 입각한 경영을 할 수 있
도록 합니다. 최근 한국산업단지공단, 김대중컨벤션센터, 세종도시교통공사 등 공공기관에서
해당 인증을 획득하였으며, 중소기업 등에서는 정책자금 확보나, 국가기관등에서의 가산점
적용을 목적으로 해당 인증 제도를 활용하고 있고, 위 인증에 더하여 추가로 가점이 적용됨은
동일합니다.`,
  },
  {
    title: "HACCP 인증",
    content: `HA 즉 위해 요소를 CCP 즉 중점 관리하는 제도를 말하는데,
해썹 인증은 소비자의 먹거리에 대한 인식이 증대됨에 따라
선택이 아닌 필수가 되었습니다.`,
  },
];
const Wrapper = styled.section`
  background-color: #f8f8f8;
  height: 1351px;
  & > div {
    padding-top: 65px;
    box-sizing: border-box;
    width: 993px;
    height: 100%;
    margin: 0 auto;
    display: grid;
    row-gap: 30px;
    grid-template-rows: repeat(4, 256px);
    & > .box {
      width: 100%;
      height: 256px;
      border-radius: 10px;
      background-color: white;
      padding-left: 49px;
      padding-right: 28px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > figure {
        width: 206px;
        height: 206px;
      }
      & > .left {
        & > .title {
          font-size: 28px;
          font-family: "ygo";
          color: #00be83;
        }
        & > .content {
          margin-top: 17.5px;
          font-size: 17px;
          white-space: pre-wrap;
          line-height: 1.65;
        }
      }
    }
  }
  @media screen and (max-width: 1365px) {
    height: 1407.2px;
    & > div {
      width: 728px;
      grid-template-rows: 300px 274px 300px 227px;
      row-gap: 26px;
      & > .box {
        height: 100%;
        & > .left {
          & > .content {
            width: 428px;
            white-space: normal;
            font-size: 15px;
            line-height: 1.67;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 2027px;
    & > div {
      width: 320px;
      padding-top: 32px;
      grid-template-rows: 462px 462px 462px 372px;
      & > .box {
        width: 320px;
        flex-direction: column;
        padding: 37.5px 0 0 0;
        justify-content: unset;
        row-gap: 15px;
        & > figure {
          width: 180px;
          height: 180px;
        }
        & > .left {
          & > .title {
            font-size: 25px;
          }
          & > .content {
            margin-top: 14.5px;
            width: 272px;
            font-size: 13px;
            line-height: 1.62;
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
        {arr.map(({ title, content }, idx) => {
          return (
            <div key={idx} className="box">
              <div className="left">
                <div className="title">{title}</div>
                <div className="content">{content}</div>
              </div>
              <figure>
                <img
                  src={`/assets/service/iso/logo${idx}.jpg`}
                  srcSet={`/assets/service/iso/logo${idx}@2x.jpg 2x, /assets/service/iso/logo${idx}@3x.jpg 3x`}
                  alt=""
                />
              </figure>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Bottom;
