import React from "react";
import styled, { css } from "styled-components";
const arr = [
  {
    img: "assets/about/about2-1.svg",
    title: `온라인
상담 의뢰`,
    type: "right",
    transform: 130,
  },
  {
    img: "assets/about/about2-2.svg",
    title: `온오프라인
상담`,
    type: "right",
    transform: 125,
  },
  {
    img: "assets/about/about2-3.svg",
    title: `기업 유형별
최적화된 사업기획`,
    type: undefined,
    transform: 0,
  },
  {
    img: "assets/common/kimface.svg",
    title: `안정적인
기업운영 파트너`,
    type: undefined,
    transform: 0,
  },
  {
    img: "assets/about/about2-4.svg",
    title: `정책자금, 정부지원금
인증서발급`,
    type: "left",
    transform: -258,
  },
  {
    img: "assets/about/about2-5.svg",
    title: `기업 맞춤형
솔루션 제시`,
    type: "left",
    transform: -221,
  },
];
const mbarr = [
  {
    img: "assets/about/about2-1.svg",
    title: `온라인
상담 의뢰`,
    type: "right",
    content: (
      <div className="content">
        세부적인 상담을 받기 전 <br className="mb" /> 온라인으로 편하게 <br />
        상담의뢰를 요청해주세요
      </div>
    ),
  },
  {
    img: "assets/about/about2-2.svg",
    title: `온오프라인
상담`,
    type: "right",
    content: (
      <div className="content">
        요청해주신 상담 내용에 따라 온라인 또는 <br className="mb" />
        오프라인으로 <br className="pc" /> 상세하게 상담을 진행하여
        <br className="mb" /> 기업의 전략을 수립합니다.
      </div>
    ),
  },
  {
    img: "assets/about/about2-3.svg",
    title: `기업 유형별
최적화된 사업기획`,
    type: undefined,
    content: (
      <div className="content">
        온오프라인 상담을 통해 최적화된 사업
        <br className="mb" /> 기획을 수립하고 <br className="pc" /> 이를 실천할
        수 있는 플랜을
        <br className="mb" />
        계획하여 소통합니다.
      </div>
    ),
  },
  {
    img: "assets/about/about2-5.svg",
    title: `기업 맞춤형
솔루션 제시`,
    type: "left",

    content: (
      <div className="content">
        사업 기획과 함께 맞춤형 솔루션 제시로 <br /> 앞으로의 발전 방향을 함께
        논의합니다.
      </div>
    ),
  },
  {
    img: "assets/about/about2-4.svg",
    title: `정책자금, 정부지원금
인증서발급`,
    type: "left",

    content: (
      <div className="content">
        기업의 힘이 될 수 있는 정책자금과 <br className="mb" /> 정부지원금 및{" "}
        <br className="pc" /> 인증서를 발급하여 믿을 <br className="mb" /> 수
        있는 기업으로 만들어드립니다
      </div>
    ),
  },
  {
    img: "assets/common/kimface.svg",
    title: `안정적인
기업운영 파트너`,
    type: undefined,
    content: (
      <div className="content">
        기업의 시작부터 끝까지 안정적인 <br className="mb" /> 기업운영 파트너
        <br className="pc" /> 김과장 컨설팅이 <br className="mb" /> 함께하여
        기업을 성장시킵니다.
      </div>
    ),
  },
];
const Wrapper = styled.section`
  width: 100%;
  height: 1048px;
  & > div {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    padding-top: 130.7px;
    box-sizing: border-box;
    & > .logo {
      background-image: url("/assets/about/greysteach.svg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 113px;
      height: 44.1px;
      font-size: 16px;
      font-weight: bold;
      color: #434343;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > .title {
      margin-top: 20.5px;
      font-size: 40px;
      line-height: 1.38;
      color: #434343;
      font-family: "ygo";
    }
    & > .content {
      display: grid;
      grid-template-columns: repeat(3, 243px);
      column-gap: 101px;
      row-gap: 97px;
      margin-top: 97px;
      position: relative;
      & > .solid {
        position: absolute;
        right: 0;
        z-index: -1;
        width: 90px;
        height: 277px;
        border: solid 20px #47d99b;
        border-left: unset;
        border-radius: 40px;
        bottom: 90px;
      }
    }
    & > .content-mb {
      display: none;
    }
  }
  @media screen and (max-width: 1365px) {
    height: 1366px;
    & > div {
      padding-top: 92.7px;
      width: 477px;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > .content {
        display: none;
      }
      & > .title {
        font-size: 38px;
        line-height: 1.39;
        text-align: center;
      }
      & > .content-mb {
        margin-top: 50px;
        display: grid;
        & > .mb-card {
          padding: 28px 0 20px 0;
          display: flex;
          align-items: center;
          column-gap: 18.2px;
          & > .img-wrapper {
            width: 108.1px;
            height: 108.1px;
            border-radius: 108px;
            background-color: #f4f4f4;
            display: flex;
            align-items: center;
            justify-content: center;
            & > img {
              width: 77px;
            }
          }
          & > .right {
            display: flex;
            flex-direction: column;
            row-gap: 7px;
            & > .title {
              font-size: 21px;
              font-weight: bold;
              color: #00be83;
            }
            & > .content {
              white-space: nowrap;
              font-size: 14px;
              line-height: 1.64;
              color: #434343;
              & > .mb {
                display: none;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 1090px;
    & > div {
      padding-top: 79.8px;
      width: 320px;
      & > .logo {
        width: 92px;
        height: 35.9px;
        font-size: 12px;
      }
      & > .title {
        font-size: 23px;
        line-height: 1.43;
      }
      & > .content-mb {
        margin-top: 30px;
        & > .mb-card {
          padding: 19px 0 18px 0;
          column-gap: 24px;
          & > .img-wrapper {
            width: 66px;
            height: 66px;
            & > img {
              width: 48px;
            }
          }
          & > .right {
            & > .title {
              font-size: 16px;
            }
            & > .content {
              font-size: 13px;

              line-height: 1.54;
              & > .mb {
                display: block;
              }
              & > .pc {
                display: none;
              }
            }
          }
        }
      }
    }
  }
`;
const Box = styled.div`
  background-color: white;
  z-index: 10;
  position: relative;
  width: 100%;
  height: 199px;
  border-radius: 20px;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
  & > figure {
    position: absolute;
    top: -50px;
    width: 107px;
    height: 107px;
  }
  & > .title {
    font-size: 20px;
    font-weight: bold;
    white-space: pre-wrap;
    line-height: 1.5;
    text-align: center;
  }
  & > .arrow {
    transform: translateX(130px);
    position: relative;
    width: 0;
    height: 0;
    border-top: 22px solid transparent;
    border-bottom: 22px solid transparent;
    border-left: 22px solid #47d99b;
    :after {
      content: "";
      position: absolute;
      border-style: solid;
      border-width: 25px 20px 0;
      display: block;
      width: 0;
      z-index: 1;
      bottom: -12px;
      left: -60px;
      border-color: #47d99b;
    }
  }
  ${(props) => {
    return css`
      & > .title {
        transform: ${props.type ? `translateX(10px)` : 0};
      }
      & > .arrow {
        display: ${props.type ? "block" : "none"};
        transform: translateX(${props.trans}px)
          rotate(${props.type === "right" ? "0" : "180deg"});
      }
    `;
  }}
`;
function Section3() {
  return (
    <Wrapper>
      <div>
        <div className="logo">진행 과정</div>
        <div className="title">
          김과장 컨설팅은 <br /> 이렇게 진행됩니다
        </div>
        <div className="content">
          {arr.map(({ img, title, type, transform }, idx) => {
            return (
              <Box key={idx} className="box" type={type} trans={transform}>
                <figure>
                  <img src={img} alt="" />
                </figure>
                <div className="title">{title} </div>
                <div className="arrow" />
              </Box>
            );
          })}
          <div className="solid" />
        </div>
        <div className="content-mb">
          {mbarr.map(({ img, title, type, content }, idx) => {
            return (
              <div
                className="mb-card"
                key={idx}
                style={
                  idx !== 0
                    ? {
                        borderTop: "solid 1px #dbdbdb",
                      }
                    : undefined
                }
              >
                <div className="img-wrapper">
                  <img src={img} alt="" />
                </div>
                <div className="right">
                  <div className="title">{title}</div>
                  {content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Section3;
