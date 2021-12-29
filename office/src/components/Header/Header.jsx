import React from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
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
  transition: top 1.2s ease-in;
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
      color: var(--main);
      margin-left: 8.4px;
    }
  }
  .right {
    display: grid;
    grid-template-columns: repeat(6, auto);
    column-gap: 50px;
  }
`;

const StyleLink = styled(Link)`
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
  ${(props) => {
    return css`
      color: ${props.now === "true" ? "var(--main)" : "black"};
    `;
  }}
`;
function Header({ isLogin }) {
  const location = useLocation();
  return (
    <Wrapper>
      <Link to="/">
        <img src="/assets/logo.svg" alt="logo" />
        <div>ADMIN</div>
      </Link>
      {isLogin ? (
        <div className="right">
          <StyleLink to="/" now={location.pathname === "/" ? "true" : "false"}>
            공지사항관리
          </StyleLink>
          <StyleLink
            to="/blog"
            now={location.pathname === "/blog" ? "true" : "false"}
          >
            지원사업관리
          </StyleLink>
          <StyleLink
            to="/question"
            now={location.pathname === "/question" ? "true" : "false"}
          >
            고객문의
          </StyleLink>
        </div>
      ) : undefined}
    </Wrapper>
  );
}

export default Header;
