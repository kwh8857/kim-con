import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import List from "./components/List";
const Nav = styled.div`
  width: 100%;
  position: sticky;
  padding-top: 114px;
  padding-bottom: 13.5px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  top: 0;
  background-color: white;
  z-index: 500;
  & > .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 169px);
    position: relative;
    column-gap: 30px;

    & > .bar {
      width: 169px;
      height: 3px;
      background-color: #47d99b;
      position: absolute;
      bottom: -16px;
      left: 0;
      transition: left 0.2s ease-in;
    }
    ${(props) => {
      return css`
        & > .bar {
          left: ${props.now === "notice" ? 0 : 200}px;
        }
      `;
    }}
  }
`;
const Btn = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #434343;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    return css`
      color: ${props.type === props.now ? "#00be83" : "#434343"};
      font-weight: ${props.type === props.now ? "bold" : "500"};
    `;
  }}
`;
function Support() {
  const [now, setNow] = useState("notice");

  const __change = useCallback((val) => {
    setNow(val);
  }, []);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <Nav now={now}>
        <div className="wrapper">
          <Btn
            type={"notice"}
            now={now}
            onClick={() => {
              __change("notice");
            }}
          >
            공지사항
          </Btn>
          <Btn
            type="project"
            now={now}
            onClick={() => {
              __change("project");
            }}
          >
            지원사업
          </Btn>
          <div className="bar" />
        </div>
      </Nav>
      <List now={now} />
      <Footer />
    </React.Fragment>
  );
}

export default Support;
