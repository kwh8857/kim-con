import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  width: 100%;
  background-color: #f8f8f8;
  & > div {
    width: 993px;
    margin: 0 auto;
    height: 100%;
    padding-top: 74px;
    padding-bottom: 241px;
    .bar {
      width: 100%;
      height: 1px;
      background-color: #dbdbdb;
    }
    .one {
      margin-bottom: 70px;
    }
    .two {
      margin-top: 74px;
      margin-bottom: 67px;
    }
    .three {
      display: block;
      margin-top: 53.5px;
      & > .title {
        font-size: 24px;
        color: #00be83;
        font-family: "ygo";
      }
      & > .sub {
        margin-top: 12.5px;
        font-size: 17px;
        line-height: 1.65;
      }
    }
    & > div {
      display: flex;
      align-items: center;
      & > .left {
        .title {
          font-size: 24px;
          color: #00be83;
          font-family: "ygo";
          line-height: 1.67;
        }
        .sub {
          margin-top: 17px;
          font-size: 17px;
          line-height: 1.65;
          width: 418px;
        }
      }
      & > figure {
        margin-left: 130px;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    & > div {
      width: 728px;
      padding-top: 106.9px;
      padding-bottom: 253.8px;
      .one {
        margin-bottom: 102px;
        & > figure {
          width: 445px;
        }
      }
      .two {
        margin: 79.7px 0 102px 0;
        & > figure {
          width: 469px;
        }
      }
      .three {
        margin-top: 80px;
        & > .title {
          font-size: 28px;
        }
        & > .sub {
          margin-top: 25.2px;
          font-size: 15px;
          line-height: 1.67;
        }
      }
      & > div {
        align-items: center;
        flex-direction: column;
        row-gap: 51.5px;
        & > .left {
          & > .title {
            font-size: 28px;
            line-height: 1.43;
          }
          & > .sub {
            font-size: 15px;
            line-height: 1.67;
            margin-top: 10.2px;
            width: 100%;
          }
        }
        & > figure {
          margin-left: unset;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    & > div {
      width: 320px;
      padding-top: 78px;
      padding-bottom: 134px;
      .one {
        margin-bottom: 70px;
        & > figure {
          width: 290px;
        }
      }
      .two {
        margin: 62px 0 70px 0;
        & > figure {
          width: 305px;
        }
      }
      .three {
        margin-top: 62.5px;
        & > .title {
          font-size: 20px;
        }
        & > .sub {
          margin-top: 17px;
          font-size: 13px;
          line-height: 1.62;
        }
      }
      & > div {
        & > .left {
          & > .title {
            font-size: 20px;
            line-height: 1.5;
          }
          & > .sub {
            margin-top: 15px;
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
        <div className="one">
          <div className="left">
            <div className="title">
              정책 자금 확보를 위해 <br /> 김과장 컨설팅이 함께 하겠습니다.
            </div>
            <div className="sub">
              정책자금을 확보하기 위해서는 기관을 설득하기 위한 PT와
              사업계획서가 핵심이기 때문에 전문가의 도움이 절실한 것이
              사실입니다. 해당 자금의 심사 기준에 유리하도록 기업의 장점과 발전
              가능성을 최대한 나타낼 수 있는 사업계획서를 준비해야 합니다.
              김과장 컨설팅만의 차별화된 경험과 노하우를 바탕으로 고객님이
              최상의 결과를 누릴 수 있도록 최선을 다해 도와드리겠습니다.
            </div>
          </div>
          <figure>
            <img
              src="/assets/service/fund/one.png"
              srcSet="/assets/service/fund/one@2x.png 2x , /assets/service/fund/one@3x.png 3x"
              alt=""
            />
          </figure>
        </div>
        <div className="bar" />
        <div className="two">
          <div className="left">
            <div className="title">
              나에게 맞는 자금지원을 <br /> 찾아드립니다
            </div>
            <div className="sub">
              정부의 재원으로 담보력이 부족해 자금조달이 어려운 중소기업이나
              개인을 지원하여 고용창출 및 기업 성장을 위해 은행이나
              민간금융기관을 통하여 저금리로 지원하는 자금을 말합니다.
              정책자금은 중앙부처와 지방단체, 기술보증기금과 신용보증기금,
              신용보증재단 등의 공공기관을 통해 300여 가지가 넘는 다양한 종류의
              자금을 지원하고 있습니다. 정책자금의 종류는 창업하여 자생력을
              마련할 때까지의 창업 및 운전자금, 시설을 마련하기 위한 시설자금,
              공장을 구입하기 위한 공장 매입 자금 등
              <b> 고객님께 맞는 자금 지원을 찾아드립니다.</b>
            </div>
          </div>
          <figure>
            <img
              src="/assets/service/fund/two.png"
              srcSet="/assets/service/fund/two@2x.png 2x , /assets/service/fund/two@3x.jpg 3x"
              alt=""
            />
          </figure>
        </div>
        <div className="bar" />
        <div className="three">
          <div className="title">정책자금의 장점은?</div>
          <div className="sub">
            정책자금은 융자, 출연, 보조, 보증, 출자 등의 방식으로 지원하고
            있습니다. 은행이나 금융권에서 대출 받는 것보다 한도가 높고, 이자가
            훨씬 더 저렴하며 긴 상환기간을 보장하기에 정책자금 확보를 통한 창업
            자금 마련은 가장 좋은 방법 중 하나라고 할 수 있습니다.
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Bottom;
