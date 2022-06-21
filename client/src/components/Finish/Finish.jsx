import React from "react";
import { useLocation } from "react-router-dom";
import "./css/index.css";
function Finish() {
  const { state } = useLocation();
  return (
    <div className="finish">
      <div className="top">
        <div className="wrapper">
          <div className="title">정부지원금 찾기 신청 접수 완료!</div>
          <div className="sub">
            고객님의 ‘정부지원금 찾기 신청’ 접수완료 되었습니다. <br /> 영업일
            기준 1~2일 내로 김과장이 열심히 찾아서 <br /> 고객님의
            <span> {state}</span> 으로 <br className="mb" /> 최대한 빠르게
            안내해 드리겠습니다.
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
          <img
            className="background mb"
            src="/assets/finish/background-mb.png"
            srcSet="/assets/finish/background-mb@2x.png 2x, /assets/finish/background-mb@3x.png 3x"
            alt=""
          />
        </div>
      </div>
      <div className="bottom">
        <div className="wrapper">
          <div className="steach">
            <img src="/assets/finish/steach.svg" alt="" />
            <span>SNS</span>
          </div>
          <div className="title">김과장 컨설팅에 대해서 더 알고싶다면?</div>
          <div className="card-wrapper">
            {arr.map(({ title, sub, img }, idx) => {
              return (
                <div className="card" key={idx}>
                  <div className="title">{title}</div>
                  {sub}
                  {img}
                </div>
              );
            })}
          </div>
        </div>
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
      <div className="sub">
        SNS에서 김과장 컨설팅의
        <br /> 최신 소식을 만나보세요
      </div>
    ),
    img: (
      <img
        src="/assets/finish/instar.png"
        srcSet="/assets/finish/instar@2x.png 2x , /assets/finish/instar@3x.png 3x"
        alt="인스타"
      />
    ),
  },
  {
    title: "스마트스토어",
    sub: (
      <div className="sub">
        네이버 스마트스토어에서 김과장 컨설팅의
        <br />
        서비스를 간편하게 이용해보세요
      </div>
    ),
    img: <img src="/assets/finish/store.svg" alt="스토어" />,
  },
];
