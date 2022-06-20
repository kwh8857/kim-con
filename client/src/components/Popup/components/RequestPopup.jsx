import React from "react";
import styled from "styled-components";

const RequestPop = styled.div`
  padding-top: 56px;
  text-align: center;
  & > .title {
    font-size: 23px;
    font-weight: bold;
    line-height: 1.43;
  }
  & > .sub {
    font-size: 14px;
    line-height: 1.64;
    margin: 9px 0 21px 0;
    & > span {
      font-weight: bold;
      color: #00be83;
    }
  }
  & > .box {
    width: 280px;
    height: 114px;
    border-radius: 10px;
    box-sizing: border-box;
    padding-top: 18.6px;
    background-color: #f3fdf9;
    & > .content {
      margin-top: 7px;
      font-size: 16px;
      font-weight: bold;
      line-height: 1.69;
      color: #00be83;
      & > span {
        color: #434343;
      }
    }
  }
  & > button {
    margin-top: 23px;
    cursor: pointer;
    width: 211px;
    height: 50px;
    border-radius: 27px;
    background-color: #47d99b;
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
`;

function RequestPopup({ cancel }) {
  return (
    <RequestPop>
      <div className="title">
        잠깐, 4대보험 등재자가 <br /> 5인 이상이신가요?
      </div>
      <div className="sub">
        정확한 지원사업 수혜금액 여부를 판단하기 위해 <br />{" "}
        <span>4대보험가입자명부</span>를 아래 메일로 전달주시면 <br /> 정확한
        정보를 안내해드립니다.
      </div>
      <div className="box">
        <div className="content">
          <span>김과장 컨설팅 이메일</span>
          <br /> kcons365@naver.com
        </div>
      </div>
      <button
        onClick={() => {
          cancel();
        }}
      >
        확인
      </button>
    </RequestPop>
  );
}

export default RequestPopup;
