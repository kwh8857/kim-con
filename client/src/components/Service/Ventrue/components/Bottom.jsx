import React from "react";
import styled, { css } from "styled-components";

const arr = [
  {
    title: `벤처인
회원가입`,
    img: "logo1.png",
  },
  {
    title: `사업계획서 및
재무제표 입력`,
    img: "logo2.svg",
  },
  {
    title: `서류접수 및
방문실사`,
    img: "logo3.svg",
  },
  {
    title: `벤처기업
인증서`,
    img: "logo4.svg",
  },
];
const Wrapper = styled.section`
  height: 1264px;
  background-color: #f8f8f8;
  & > div {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    padding-top: 96.5px;
    box-sizing: border-box;
    & > .top {
      & > .title {
        font-size: 24px;
        font-family: "ygo";
        color: #00be83;
      }
      & > .sub {
        font-size: 17px;
        margin-top: 11.5px;
        margin-bottom: 35px;
      }
      & > .circle-wrapper {
        display: grid;
        grid-template-columns: repeat(4, 200px);
        column-gap: 60px;
      }
    }
    & > .bar {
      width: 100%;
      height: 1px;
      background-color: #dbdbdb;
      margin-top: 74px;
      margin-bottom: 53.5px;
    }
    & > .bottom {
      & > .title {
        font-size: 24px;
        color: #00be83;
        font-family: "ygo";
        & > br {
          display: none;
        }
      }
      & > .content {
        background-color: white;
        margin-top: 25.4px;
        border-radius: 10px;
        width: 100%;
        height: 359px;
        box-sizing: border-box;
        padding-top: 27.6px;
        padding-left: 28.6px;
        font-size: 17px;
        line-height: 2.06;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    height: 1138px;
    & > div {
      width: 727px;
      padding-top: 103px;
      & > .top {
        & > .title {
          font-size: 28px;
        }
        & > .sub {
          font-size: 15px;
          margin: 21.2px 0 34.5px 0;
        }
        & > .circle-wrapper {
          grid-template-columns: repeat(4, 148.6px);
          column-gap: 44.6px;
        }
      }
      & > .bar {
        margin: 76.9px 0 55.8px 0;
      }
      & > .bottom {
        & > .title {
          font-size: 28px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 1739.5px;
    & > div {
      width: 320px;
      padding-top: 46.8px;
      & > .top {
        & > .title {
          font-size: 20px;
        }
        & > .sub {
          font-size: 13px;
          margin: 15px 0 55px 0;
          line-height: 1.62;
        }
        & > .circle-wrapper {
          grid-template-columns: 320px;
          column-gap: unset;
          row-gap: 49px;
        }
      }
      & > .bar {
        display: none;
      }
      & > .bottom {
        margin-top: 115px;
        & > .title {
          font-size: 20px;
          line-height: 1.5;
          & > br {
            display: block;
          }
        }
        & > .content {
          margin-top: 32px;
          height: 428px;
          padding: 29px 21.5px;
          font-size: 13px;
          line-height: 2.69;
        }
      }
    }
  }
`;
const Box = styled.div`
  position: relative;
  & > .arrow {
    width: 27.6px;
    position: absolute;
    top: 34%;
    right: -42px;
  }
  & > .img-wrapper {
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-left: ${({ index }) => (index === 1 ? "19px" : "unset")};
    & > img {
      width: fit-content;
    }
  }
  & > .title {
    font-size: 19px;
    font-weight: bold;
    line-height: 1.47;
    text-align: center;
    white-space: pre-wrap;
    color: #5c5c5c;
    margin-top: 16px;
  }
  @media screen and (max-width: 1365px) {
    & > .arrow {
      width: 22px;
      top: 32%;
      right: -33px;
    }
    & > .img-wrapper {
      width: 100%;
      height: 148.6px;
      padding-left: ${({ index }) => (index === 1 ? "14px" : "unset")};
      & > img {
        width: ${({ index }) =>
          index === 0
            ? "114.4px"
            : index === 1
            ? "65.5px"
            : index === 2
            ? "50px"
            : "63px"};
      }
    }
    & > .title {
      font-size: 14px;
      margin-top: 11px;
    }
  }
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    column-gap: 16px;
    & > .arrow {
      transform: rotate(90deg);
      top: unset;
      bottom: -35.4px;
      right: 75%;
    }
    & > .img-wrapper {
      width: 143px;
      height: 143px;
    }
    & > .title {
      margin-top: unset;
      text-align: left;
      font-size: 19px;
      line-height: 1.47;
    }
  }
`;
function Bottom() {
  return (
    <Wrapper>
      <div>
        <div className="top">
          <div className="title">벤처인증은 어떻게 진행되나요?</div>
          <div className="sub">
            벤처확인 신청 및 결과 조회 등의 절차는 벤처인 웹사이트를 통해
            인터넷으로만 이루어집니다.
          </div>
          <div className="circle-wrapper">
            {arr.map(({ title, img }, idx) => {
              return (
                <Box key={idx} className="box" index={idx}>
                  <figure className="img-wrapper">
                    {idx === 0 ? (
                      <img
                        src="/assets/service/venture/logo1.jpg"
                        srcSet="/assets/service/venture/logo1@2x.jpg 2x , /assets/service/venture/logo1@3x.jpg 3x"
                        alt=""
                      />
                    ) : (
                      <img src={`/assets/service/venture/${img}`} alt="" />
                    )}
                  </figure>
                  {idx !== 3 ? (
                    <figure className="arrow">
                      <img
                        src="/assets/service/venture/right-arrow.svg"
                        alt=""
                      />
                    </figure>
                  ) : undefined}
                  <div className="title">{title}</div>
                </Box>
              );
            })}
          </div>
        </div>
        <div className="bar" />
        <div className="bottom">
          <div className="title">
            벤처인증기업, <br /> 어떤 혜택이 있나요?
          </div>
          <div className="content">
            - 법인세 50% 감면 <br />
            - 벤처확인일로부터 4년 이내 취득하는 사업용 부동산에 대한 취득세 75%
            감면 <br /> - 3년간 재산세 전액 면제 (그 다음 2년간 50%감면) <br />
            - 중진공 등 정책 자금 한도 우대 <br /> - 특허 및 실용신안 등록 출원
            시 우선심사 대상 <br /> - 벤처기업 집적시설 입주 경우 과밀억제 권역
            내에서의 취득세, 등록세, 재산세, 중과세율 면제 <br /> - TV와 라디오
            등 광고비 최대 70% 할인 <br /> - 금융권 등 대출 실행 시 참고지표로
            활용 <br /> - 국가 기관 납품 등에 있어 가산점 부여
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Bottom;
