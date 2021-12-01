import React from "react";
import styled from "styled-components";
import Agree from "./Agree";
import HistorySelect from "./HistorySelect";
import Insert from "./Insert";
import LocationSelect from "./LocationSelect";
import SendBtn from "./SendBtn";
import TextArea from "./TextArea";

const inputArr = [
  {
    title: "회사명",
    type: "name",
    dispatcher: "db/name",
  },
  {
    title: "업태/업종",
    type: "category",
    dispatcher: "db/category",
  },

  {
    title: "연락처",
    type: "tel",
    dispatcher: "db/tel",
  },
  {
    title: "이메일주소",
    type: "email",
    dispatcher: "db/email",
  },
  {
    title: "직원수",
    type: "number",
    dispatcher: "db/number",
  },
];

const Wrapper = styled.section`
  height: 2088px;
  width: 993px;
  margin: 0 auto;
  padding-top: 238px;
  box-sizing: border-box;
  & > .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    & > .left {
      display: flex;
      flex-direction: column;
      & > .logo {
        background-image: url("/assets/steach.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 113px;
        height: 44.1px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        color: #434343;
      }
      & > .title {
        margin-top: 17px;
        font-size: 37px;
        font-weight: bold;
        line-height: 1.43;
      }
      & > .sub {
        margin-top: 16px;
        font-size: 17px;
        line-height: 1.59;
      }
    }
    & > .right {
      width: 414px;
      height: 181px;
      border-radius: 10px;
      background-color: #47d99b;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-left: 22px;
      & > figure {
        width: 134px;
        height: 133px;
        background-color: white;
        border-radius: 134px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > img {
          width: 84.3px;
          height: 81.8px;
        }
      }
      & > .info {
        display: grid;
        row-gap: 22px;
        margin-left: 31px;
        font-size: 15px;
        font-weight: bold;
        color: #434343;
        & > div {
          display: flex;
          & > figure {
            margin-right: 9px;
            width: 23px;
            height: 23px;
          }
        }
      }
    }
  }
  & > .middle {
    display: flex;
    margin-top: 89px;
    & > .right {
      margin-left: 36px;
      & > .title {
        margin-bottom: 10px;
        font-size: 15px;
        font-weight: bold;
        & > span {
          margin-left: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #00be83;
        }
      }
    }
  }
  & > .bottom {
    margin-top: 57px;
    & > .history {
      & > .title {
        font-size: 15px;
        font-weight: bold;
        & > span {
          font-size: 12px;
          font-weight: 500;
          color: #00be83;
        }
      }
    }
    & > .content {
      margin-top: 55px;
      & > .title {
        font-size: 15px;
        font-weight: bold;
      }
    }
    & > .agree {
      margin-top: 54px;
      margin-bottom: 84px;
      & > .title {
        font-size: 15px;
        font-weight: bold;
      }
    }
  }
`;
function Section4() {
  return (
    <Wrapper>
      <div className="top">
        <div className="left">
          <div className="logo">고객문의</div>
          <span className="title">
            궁금하신 게 있으면 언제든지
            <br /> 김과장 컨설팅을 찾아주세요
          </span>
          <span className="sub">
            기업지원이 필요하고 고민중이시라면 김과장에게 편하게 문의주세요.
            <br />
            최대한 빠르게, 그리고 친절하게 답변 드리겠습니다.
          </span>
        </div>
        <div className="right">
          <figure>
            <img src="/assets/common/kimface.svg" alt="" />
          </figure>
          <div className="info">
            <div>
              <figure>
                <img src="/assets/main/call.svg" alt="" />
              </figure>
              <span>010-9700-2594</span>
            </div>
            <div>
              <figure>
                <img src="/assets/main/mail.svg" alt="" />
              </figure>
              <span>Help@kcons.kr</span>
            </div>
            <div>
              <figure>
                <img src="/assets/main/ch.svg" alt="" />
              </figure>
              <span>카카오톡 채널 kcons</span>
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="left">
          {inputArr.map((item, idx) => {
            return <Insert key={idx} data={item} />;
          })}
        </div>
        <div className="right">
          <div className="title">
            지역<span>1개 선택</span>
          </div>
          <LocationSelect />
        </div>
      </div>
      <div className="bottom">
        <div className="history">
          <div className="title">
            업력 <span>1개 선택</span>
          </div>
          <HistorySelect />
        </div>
        <div className="content">
          <div className="title">문의내용</div>
          <TextArea />
        </div>
        <div className="agree">
          <div className="title">개인정보 수집 및 이용 동의</div>
          <Agree />
        </div>
        <SendBtn />
      </div>
    </Wrapper>
  );
}

export default Section4;
