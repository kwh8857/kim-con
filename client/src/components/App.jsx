import React, { useEffect, useState } from "react";
// import Main from "./Main/Main";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/core.css";
// import About from "./About/About";
// import Service from "./Service/Service";
// import Support from "./Support/Support";
import styled from "styled-components";
function App() {
  const [agent, setAgent] = useState("pc");
  useEffect(() => {
    if (window.innerWidth < 768) {
      setAgent("mb");
    } else {
      setAgent("pc");
    }

    return () => {};
  }, []);

  return (
    <Test>
      <div className="wrapper">
        <div className="top">
          <img
            src="/assets/header/logo.png"
            srcSet="/assets/header/logo@2x.png 2x, /assets/header/logo@3x.png 3x"
            alt=""
          />
        </div>
        <div className="content">
          <div className="logo">
            <img
              src="/assets/test/test.png"
              srcSet="/assets/test/test@2x.png 2x, /assets/test/test@3x.png 3x"
              alt=""
            />
          </div>
          <div className="title">홈페이지 리뉴얼 중입니다</div>
          <div className="title green">
            블로그에서 무료상담{agent === "mb" ? <br /> : undefined}{" "}
            신청해보세요
          </div>
          <div className="content">
            보다 나은 서비스 제공을 위하여 리뉴얼 중입니다. <br /> 현재 김과장
            컨설팅 블로그에서 {agent === "mb" ? <br /> : undefined} 무료상담
            서비스를 진행 중이니 {agent !== "mb" ? <br /> : undefined} 아래
            링크를 통해
            {agent === "mb" ? <br /> : undefined} 무료상담을
            신청해주시기바랍니다 :)
          </div>
          <a
            href="https://blog.naver.com/kcons365/222682500631"
            target={"_blank"}
            rel="noreferrer"
          >
            <div>김과장 컨설팅 무료상담하기</div>
            <img src="/assets/test/white-arrow.svg" alt="" />
          </a>
        </div>
      </div>
    </Test>
    // <Router>
    //   <Routes>
    //     <Route path="/" exact element={<Main />} />
    //     <Route path="/about" exact element={<About />} />
    //     <Route path="/service" exact element={<Service />} />
    //     <Route path="/support" exact element={<Support />} />
    //   </Routes>
    // </Router>
  );
}

export default App;

const Test = styled.main`
  width: 100%;
  height: 100%;
  & > .wrapper {
    width: 1366px;
    margin: 0 auto;
    height: calc(100% - 64px);
    padding-left: 75px;
    & > .top {
      width: 180px;
      height: 64px;
      display: flex;
      align-items: center;
    }

    & > .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & > .logo {
        width: 152.4px;
        height: 166px;
        margin-bottom: 36px;
      }
      & > .title {
        font-family: ygo;
        font-size: 40px;
      }
      & > .green {
        margin-top: 10px;
        color: #00be83;
      }
      & > .content {
        font-size: 17px;
        line-height: 1.59;
        text-align: center;
        margin: 30px 0 33px 0;
      }
      & > a {
        cursor: pointer;
        width: 305px;
        height: 54px;
        background-color: #00be83;
        border-radius: 57px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        justify-content: space-between;
        font-size: 18px;
        padding: 0 19px;
        color: white;
        font-weight: bold;
        & > img {
          width: 36.3px;
          height: 21.7px;
        }
      }
    }
  }
  @media screen and (max-width: 1365px) {
    & > .wrapper {
      width: 768px;
      padding-left: 19px;
      & > .top {
        width: 151px;
        height: 74px;
      }
      & > .content {
        & > .logo {
          width: 127.4px;
          height: 138.7px;
          margin-bottom: 17px;
        }
        & > .title {
          font-size: 30px;
        }
        & > .green {
          margin-top: 15px;
        }
        & > .content {
          font-size: 13px;
          line-height: 1.54;
          margin: 17px 0 31.5px 0;
        }
        & > a {
          width: 240px;
          height: 48px;
          font-size: 13px;
          padding: 0 17px 0 15.5px;
          & > img {
            width: 28px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    & > .wrapper {
      width: 360px;
      & > .content {
        & > .logo {
          margin-bottom: 21px;
        }
        & > .title {
          text-align: center;
          font-size: 25px;
          line-height: 1.4;
        }
        & > .green {
          margin-top: 0;
        }
      }
    }
  }
`;
