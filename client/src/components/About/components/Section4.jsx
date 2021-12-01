import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const arr = [
  {
    tag: "# 기업하길 잘했네",
    title: "기업지원금",
    sub: `사업에 필요한 각종지원금
정책자금 , 기업대출 등 
김과장이 꼼꼼하게 따져 제안합니다.`,
    type: "fund",
  },
  {
    tag: "#스타트업 치트키",
    title: "벤처 인증",
    sub: `무엇부터 해야하나?
복잡한 인증절차도 
김과장과 함께라면 일사천리.`,
    type: "venture",
  },
  {
    tag: "#당신에게 ‘바우처사업’이란?",
    title: "바우처사업",
    sub: `필요한 곳 요긴하게
바우처를 활용하여
기업경쟁력 높여드릴게요.`,
    type: "voucher",
  },
  {
    tag: "# 인증 업무",
    title: "ISO / HACCP 인증",
    sub: `경영시스템 인증업무도 막힘없이
김과장이 척척`,
    type: "iso",
  },
  {
    tag: "# 기업부설연구소",
    title: "연구개발전담부서",
    sub: `중소기업의 필수아이템, 
기업이 가진 잠재적가치를 생산할 수
있도록 김과장컨설팅이 날개를 달아드립니다. `,
    type: "research",
  },
];
const Wrapper = styled.section`
  width: 100%;
  height: fit-content;
  background-color: #f8f8f8;
  & > div {
    width: 993px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    padding-top: 174px;
    padding-bottom: 216px;
    & > .left {
      position: sticky;
      top: 64px;
      height: fit-content;
      & > figure {
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
    & > .right {
      margin-left: 148px;
      display: grid;
      row-gap: 26px;
      & > .box {
        transition: box-shadow 0.2s ease-in-out;
        cursor: pointer;
        width: 521px;
        height: 224px;
        background-color: white;
        border-radius: 20px;
        padding: 29px 35px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        & > .left {
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
            font-size: 25px;
            font-weight: bold;
            white-space: nowrap;
            margin-top: 8.5px;
          }
          & > .sub {
            margin-top: 11px;
            white-space: pre-wrap;
            font-size: 13px;

            line-height: 1.54;
          }
        }
        & > figure {
          width: 160px;
          height: 160px;
        }
      }
      & > .box:hover {
        box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.16);
      }
    }
  }
`;
function Section4() {
  const navigate = useNavigate();
  const __nav = useCallback(
    (type, index) => {
      navigate("/service", {
        state: {
          type,
          index,
        },
      });
    },
    [navigate]
  );
  return (
    <Wrapper>
      <div>
        <div className="left">
          <figure>
            <img src="/assets/about/about-kim.svg" alt="" />
          </figure>
          <div className="title">
            김과장을 <br /> 만나면 생기는 일
          </div>
          <div className="sub">
            김과장은 늘 준비되어 있습니다. <br /> 복잡하고 번거로운 기업 업무!{" "}
            <br /> 김과장이 ‘쉽고. 빠르고, 정확하게’ 지원합니다.
          </div>
        </div>
        <div className="right">
          {arr.map(({ tag, title, sub, type }, idx) => {
            return (
              <div
                key={idx}
                className="box"
                onClick={() => {
                  __nav(type, idx);
                }}
              >
                <div className="left">
                  <div className="speech-bubble">{tag}</div>
                  <div className="title">{title}</div>
                  <div className="sub">{sub}</div>
                </div>
                <figure>
                  <img
                    src={`/asssets/about/about-s4-${idx + 1}.jpg`}
                    srcSet={`/assets/about/about-s4-${
                      idx + 1
                    }@2x.jpg 2x , /assets/about/about-s4-${idx + 1}@3x.jpg 3x`}
                    alt=""
                  />
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Section4;
