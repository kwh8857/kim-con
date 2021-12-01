import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  height: 64px;
  border-bottom: solid 1px #dbdbdb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 75px;
  padding-right: 115px;
  box-sizing: border-box;
  background-color: white;
  z-index: 1000;
  & > a {
    display: flex;
    align-items: center;
    & > img {
      width: 180px;
      cursor: pointer;
    }
    & > div {
      font-size: 13px;
      font-weight: bold;
      color: #00be83;
      margin-left: 7px;
    }
  }
  .right {
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 43px;
    & > a {
      font-size: 14px;
      font-weight: bold;
      white-space: nowrap;
    }
  }
`;
function Header() {
  return (
    <Wrapper>
      <Link to="/main">
        <img src="/assets/logo.svg" alt="logo" />
        <div>ADMIN</div>
      </Link>
      <div className="right">
        <Link to="/notice">공지사항관리</Link>
        <Link to="/main">지원사업관리</Link>
        <Link to="/notice">고객문의</Link>
      </div>
    </Wrapper>
  );
}

export default Header;
