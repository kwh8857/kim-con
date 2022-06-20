import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainPopup({ cancel }) {
  const navigate = useNavigate();
  const [now, setNow] = useState(0);
  return (
    <div className="main-popup">
      <div className="content" style={{ left: `-${now * 320}px` }}>
        {arr.map(({ title, sub, img }, idx) => {
          return (
            <div key={idx} className="card-wrapper">
              {title}
              {sub}
              {img}
            </div>
          );
        })}
      </div>
      {now !== 0 ? (
        <button
          className="left"
          onClick={() => {
            setNow((prev) => prev - 1);
          }}
        >
          <img src="/assets/popup/arrow.svg" alt="" />
        </button>
      ) : undefined}
      {now !== 3 ? (
        <button
          className="right"
          onClick={() => {
            setNow((prev) => prev + 1);
          }}
        >
          <img src="/assets/popup/arrow.svg" alt="" />
        </button>
      ) : undefined}
      <button
        className="nav-btn"
        onClick={() => {
          cancel();
          navigate("/request");
        }}
      >
        정부지원금 찾아보기
      </button>
      <div className="circle-wrapper">
        {[0, 0, 0, 0].map((item, idx) => {
          return (
            <div
              key={idx}
              className="circle"
              style={idx === now ? { backgroundColor: "#00be83" } : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainPopup;

const arr = [
  {
    title: (
      <div className="title">
        업종, 규모에 맞는 <br /> 신청가능 지원사업 찾기
      </div>
    ),
    sub: (
      <div className="sub">
        어렵게 찾지 마세요. <br /> 김과장이 정부지원사업을 추천해드려요.
      </div>
    ),
    img: (
      <div
        className="img-wrapper"
        style={{
          paddingLeft: "21px",
        }}
      >
        <img src="/assets/popup/popup1.svg" alt="" />
      </div>
    ),
  },
  {
    title: (
      <div className="title">
        인건비 뿐만 아니라 각종 <br /> 정부지원사업도 찾아드려요
      </div>
    ),
    sub: (
      <div className="sub">
        김과장 멤버십 회원이 되시면 <br /> 각종 정부지원사업을 알아서
        매칭해드려요
      </div>
    ),
    img: (
      <div
        className="img-wrapper"
        style={{
          paddingLeft: "33px",
        }}
      >
        <img src="/assets/popup/popup2.svg" alt="" />
      </div>
    ),
  },
  {
    title: (
      <div className="title">
        지금까지 정부지원금을 <br /> 못 받아보셨다면?
      </div>
    ),
    sub: (
      <div className="sub">
        기업 운영하기 바빠서 못 챙긴 정부지원금 <br /> 김과장이 먼저
        안내해드려요
      </div>
    ),
    img: (
      <div
        className="img-wrapper"
        style={{
          paddingLeft: "26.4px",
        }}
      >
        <img src="/assets/popup/popup3.svg" alt="" />
      </div>
    ),
  },
  {
    title: (
      <div className="title">
        아직 <br /> 창업 전이라구요?
      </div>
    ),
    sub: (
      <div className="sub">
        예비창업자를 위한 정부지원금 <br /> 초기창업자를 위한 정부지원금
        찾아드려요.
      </div>
    ),
    img: (
      <div
        className="img-wrapper"
        style={{
          paddingLeft: "27px",
        }}
      >
        <img src="/assets/popup/popup4.svg" alt="" />
      </div>
    ),
  },
];
