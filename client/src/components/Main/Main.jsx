import React from "react";
import { useDispatch } from "react-redux";
import Fold from "./components/Fold";
import "./css/index.css";
function Main() {
  const dispatch = useDispatch();
  return (
    <div style={{ width: "100%" }} className="mainsub">
      {/* <Side /> */}
      <div className="section">
        <div className="wrapper">
          <div className="title">
            복잡한 정부지원금 <br />
            <span>김과장과 함께 쉽게!</span>
          </div>
          <div
            className="box"
            onClick={() => {
              dispatch({
                type: "config/isPopup",
                payload: {
                  state: true,
                  type: "main",
                },
              });
            }}
          >
            <div className="text">내정부 지원금찾기</div>
            <img src="/assets/sub/next.svg" alt="" />
          </div>
          <div className="back-img">
            <img
              src="/assets/sub/main.png"
              srcSet="/assets/sub/main@2x.png 2x, /assets/sub/main@3x.png 3x"
              alt=""
              className="pc"
            />
            <img
              src="/assets/sub/main-mb.png"
              srcSet="/assets/sub/main-mb@2x.png 2x, /assets/sub/main-mb@3x.png 3x"
              alt=""
              className="main-mb"
            />
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="wrapper">
          <div className="title">내정부지원금을 찾아보세요!</div>
          <div className="box">
            {box.map((item, i) => {
              return (
                <div key={i} className={`boxlist ${item.type}`}>
                  <div className="title">{item.title}</div>
                  <div className="sub">{item.sub}</div>
                  <div className="img">{item.img}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="wrapper">
          <div className="wrapper2">
            <div className="left">
              <div className="title">
                믿고 받는 김과장컨설팅으로 <br />
                정부지원금 받으세요
              </div>
              <div className="title_tb">
                믿고 받는 <br />
                김과장컨설팅으로 <br />
                정부지원금 받으세요
              </div>
              <div
                className="box"
                onClick={() => {
                  dispatch({
                    type: "config/isPopup",
                    payload: {
                      state: true,
                      type: "main",
                    },
                  });
                }}
              >
                <div className="text">내정부 지원금찾기</div>
                <img src="/assets/sub/next.svg" alt="" />
              </div>
            </div>
            <div className="right">
              <img
                src="/assets/sub/good.png"
                srcSet="/assets/sub/good@2x.png 2x, /assets/sub/good@3x.png 3x"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="wrapper">
          <div className="title">
            김과장 컨설팅, <br /> 아직도 망설이시나요?
          </div>
          <div className="fold-wrapper">
            {foldarr.map(({ number, title, content }, idx) => {
              return (
                <Fold
                  key={idx}
                  content={content}
                  number={number}
                  title={title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

const box = [
  {
    title: (
      <div>
        2명 중 1명이 <br />
        정부지원금 받아요!
      </div>
    ),
    sub: (
      <div>
        2명 중 1명이 김과장 컨설팅으로 <br />
        정부지원금 받기 완료!
      </div>
    ),
    img: (
      <div>
        <img src="/assets/sub/icon.svg" alt="" />
      </div>
    ),
  },
  {
    title: (
      <div>
        카카오로 간편하게 조회!
        <br />
        믿을 수 있는 서비스!
      </div>
    ),
    sub: (
      <div>
        KDB산업은행 외 12개 사에서
        <br />
        인력 투자 유치 완료
      </div>
    ),
    img: (
      <div>
        <img src="/assets/sub/icon2.svg" alt="" />
      </div>
    ),
    type: "first",
  },
  {
    title: (
      <div>
        복잡한 과정 없이
        <br />
        5분이면 신청완료!!
      </div>
    ),
    sub: (
      <div>
        간단하지만 핵심 질문만 담은 설문으로
        <br />
        간편하게 상담 신청 완료!
      </div>
    ),
    img: (
      <div>
        <img src="/assets/sub/icon3.svg" alt="" />
      </div>
    ),
    type: "second",
  },
];
const foldarr = [
  {
    number: "Q1.",
    title: "정부지원금은 어떻게 입금되나요?",
    content: (
      <p>
        국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다.
        언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니{" "}
        한다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및
        교원의 지위에 관한 기본적인 사항은 법률로 정한다. 신체장애자 및 질병·{" "}
        노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여
        국가의 보호를 받는다. 대통령은 제3항과 제4항의 사유를 지체없이 공포
        하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는
        4년으로 하며, 1차에 한하여 중임할 수 있다. 원장은 국회의 동의를 얻어
        대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.
      </p>
    ),
  },
  {
    number: "Q2.",
    title: "김과장컨설팅은 믿을 수 있는 곳인가요?",
    content: (
      <p>
        국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다.
        언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니{" "}
        한다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및
        교원의 지위에 관한 기본적인 사항은 법률로 정한다. 신체장애자 및 질병·{" "}
        노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여
        국가의 보호를 받는다. 대통령은 제3항과 제4항의 사유를 지체없이 공포
        하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는
        4년으로 하며, 1차에 한하여 중임할 수 있다. 원장은 국회의 동의를 얻어
        대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.
      </p>
    ),
  },
  {
    number: "Q3.",
    title: "일정은 어떻게 되나요?",
    content: (
      <p>
        국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다.
        언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니{" "}
        한다. 학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및
        교원의 지위에 관한 기본적인 사항은 법률로 정한다. 신체장애자 및 질병·{" "}
        노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여
        국가의 보호를 받는다. 대통령은 제3항과 제4항의 사유를 지체없이 공포
        하여야 한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는
        4년으로 하며, 1차에 한하여 중임할 수 있다. 원장은 국회의 동의를 얻어
        대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.
      </p>
    ),
  },
];
