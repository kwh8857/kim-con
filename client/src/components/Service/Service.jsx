import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled, { css } from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Fund from "./Fund/Fund";
import Iso from "./Iso/Iso";
import Research from "./Research/Research";
import Venture from "./Ventrue/Venture";
import Voucher from "./Voucher/Voucher";
const arr = [
  { title: "기업지원금 컨설팅", type: "fund" },
  { title: "벤처 인증", type: "venture" },
  { title: "바우처사업", type: "voucher" },
  { title: "ISO / HACCP 인증", type: "iso" },
  { title: "연구개발전담부서", type: "research" },
];
const Wrapper = styled.div`
  & > nav {
    padding-top: 114px;
    position: sticky;
    top: 0;
    z-index: 500;
    background-color: white;
    width: 100%;
    border-bottom: solid 1px #dbdbdb;
    padding-bottom: 13.5px;
    & > .wrapper {
      width: 993px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(5, 169px);
      column-gap: 30px;
      position: relative;
      & > .bar {
        width: 169px;
        height: 3px;
        background-color: #47d99b;
        position: absolute;
        bottom: -16px;
        transition: transform 0.2s ease-in;
      }
      ${(props) => {
        return css`
          & > .bar {
            transform: translateX(${199 * props.idx}px);
          }
        `;
      }}
    }
  }
`;
const Navbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  color: #434343;
  cursor: pointer;
  ${(props) => {
    return css`
      color: ${props.now === props.item ? "#00be83" : "black"};
      font-weight: ${props.now === props.item ? "bold" : 500};
    `;
  }}
`;
function Service() {
  const location = useLocation();
  const [now, setNow] = useState("fund");
  const [index, setIndex] = useState(0);
  const __change = useCallback((type, idx) => {
    setNow(type);
    setIndex(idx);
  }, []);
  useEffect(() => {
    document.getElementById("root").scrollTo(0, 0);
    return () => {};
  }, [now]);
  useEffect(() => {
    const { state } = location;
    if (state) {
      setNow(state.type);
      setIndex(state.index);
    }

    return () => {};
  }, [location]);
  return (
    <Wrapper idx={index}>
      <header>
        <Header />
      </header>
      <nav>
        <div className="wrapper">
          {arr.map(({ title, type }, idx) => {
            return (
              <Navbox
                key={idx}
                now={now}
                item={type}
                onClick={() => {
                  __change(type, idx);
                }}
              >
                {title}
              </Navbox>
            );
          })}
          <div className="bar" />
        </div>
      </nav>
      {now === "fund" ? (
        <Fund />
      ) : now === "venture" ? (
        <Venture />
      ) : now === "voucher" ? (
        <Voucher />
      ) : now === "iso" ? (
        <Iso />
      ) : (
        <Research />
      )}
      <Footer />
    </Wrapper>
  );
}

export default Service;
