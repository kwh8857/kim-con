import React from "react";
import "./css/index.css";
function Finish() {
  return (
    <div className="finish">
      <div className="top">
        <div className="wrapper">
          <div className="title">정부지원금 찾기 신청 접수 완료!</div>
          <div className="sub">
            고객님의 ‘정부지원금 찾기 신청’ 접수완료 되었습니다. <br /> 영업일
            기준 1~2일 내로 김과장이 열심히 찾아서 <br /> 고객님의
            <span> XXXXXX@naver.com</span> 으로 최대한 빠르게 안내해
            드리겠습니다.
          </div>
          <button>
            <img src="/assets/finish/ch.svg" alt="" />
            <div className="text">카카오톡 채널 추가 후 알림 받기</div>
          </button>
          <img
            className="background"
            src="/assets/finish/background.png"
            srcSet="/assets/finish/background@2x.png 2x, /assets/finish/background@3x.png 3x"
            alt=""
          />
        </div>
      </div>
      <div className="bottom">
        <div className="steach">
          <img src="/assets/finish/steach.svg" alt="" />
          SNS
        </div>
        <div className="title">김과장 컨설팅에 대해서 더 알고싶다면?</div>
      </div>
    </div>
  );
}

export default Finish;

const arr = [
  {
    title: "김과장 컨설팅 블로그",
    sub: (
      <div className="sub">
        네이버 블로그에서 김과장 컨설팅의 <br /> 다양한 소식을 만나보세요
      </div>
    ),
    img: <img src="/assets/finish/blog.svg" alt="블로그" />,
  },
  {
    title: "김과장 컨설팅 SNS",
    sub: (
      <div className="sub">SNS에서 김과장 컨설팅의 최신 소식을 만나보세요</div>
    ),
    img: <img src="/assets/finish/blog.svg" alt="블로그" />,
  },
];
