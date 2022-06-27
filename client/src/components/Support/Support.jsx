import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
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
  & > .mb-now {
    display: none;
  }
  & > .wrapper {
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(2, 169px);
    position: relative;
    column-gap: 30px;
    justify-content: center;

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
  @media screen and (max-width: 1365px) {
    & > .wrapper {
      grid-template-columns: repeat(2, 110px);
      column-gap: 20px;
      & > .bar {
        width: 110px;
      }
      ${(props) => {
        return css`
          & > .bar {
            left: ${props.now === "notice" ? 0 : 130}px;
          }
        `;
      }}
    }
  }
  @media screen and (max-width: 767px) {
    & > .mb-now {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      font-weight: 500;
      position: relative;
      cursor: pointer;
      & > img {
        width: 17.6px;
        position: absolute;
        right: 21.7px;
      }
    }
    & > .wrapper {
      transition: 0.2s ease-in;
      width: 100%;
      position: absolute;
      background-color: white;
      grid-template-columns: 100%;
      overflow: hidden;
      & > .bar {
        display: none;
      }
    }
    ${({ isOpen }) => {
      return css`
        & > .mb-now {
          & > img {
            transform: ${isOpen ? "rotate(180deg)" : "unset"};
          }
        }
        & > .wrapper {
          height: ${isOpen ? "180" : "0"}px;
          bottom: ${isOpen ? "-181" : "0"}px;
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
  @media screen and (max-width: 1365px) {
    font-size: 15px;
  }
`;
function Support() {
  const [now, setNow] = useState("notice");
  const [isOpen, setIsOpen] = useState(false);
  const __change = useCallback(
    (val) => {
      if (isOpen) {
        setIsOpen(false);
      }
      setNow(val);
    },
    [isOpen]
  );
  return (
    <React.Fragment>
      <Nav now={now} isOpen={isOpen}>
        <div
          className="mb-now"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {now === "notice" ? "공지사항" : "지원사업"}
          <img src="/assets/service/menu-arrow.svg" alt="" />
        </div>
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
            type="blog"
            now={now}
            onClick={() => {
              __change("blog");
            }}
          >
            지원사업
          </Btn>
          <div className="bar" />
        </div>
      </Nav>
      <List now={now} />
    </React.Fragment>
  );
}

export default Support;
