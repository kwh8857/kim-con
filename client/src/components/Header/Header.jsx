import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const menuarr = [
  { title: "김과장컨설팅", link: "/about" },
  { title: "서비스소개", link: "/service" },
  { title: "고객지원", link: "/support" },
];
const Wrapper = styled.div`
  display: flex;
  z-index: 1000;
  box-sizing: border-box;
  align-items: center;
  padding: 0 74px;
  width: 100%;
  height: 64px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  transition: background-color 0.2s ease-in-out;
  & > .right {
    display: flex;
    align-items: center;
    column-gap: 34px;
    & > button {
      cursor: pointer;
      width: 165px;
      height: 40px;
      border-radius: 57px;
      background-color: #47d99b;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: bold;
      color: #434343;
      column-gap: 5.6px;
      & > img {
        width: 25.5px;
      }
    }
    & > .mb-menu {
      display: none;
      cursor: pointer;
      height: 28px;
      width: 28px;
    }
  }
  ${(props) => {
    return css`
      background-color: ${props.scroll ? "white" : "transparent"};
    `;
  }}

  @media screen and (max-width: 1365px) {
    padding: 0 20px;
    & > .right {
      & > .mb-menu {
        display: block;
      }
    }
  }
  @media screen and (max-width: 767px) {
    & > .right {
      & > button {
        display: none;
      }
    }
  }
`;
const Logo = styled.figure`
  width: 180px;
  height: 33.5px;
  cursor: pointer;
`;
const Menu = styled.nav`
  display: grid;
  grid-template-columns: 72px 60px 48px;
  font-size: 13px;
  font-weight: bold;
  column-gap: 45px;
  @media screen and (max-width: 1365px) {
    display: none;
  }
`;
function Header({ isScroll }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Wrapper scroll={isScroll}>
      <Link to={"/"}>
        <Logo>
          <img
            src="/assets/header/logo.png"
            srcSet="/assets/header/logo@2x.png 2x , /assets/header/logo@3x.png 3x"
            alt="김과장컨설팅"
          />
        </Logo>
      </Link>
      <div className="right">
        <Menu>
          {menuarr.map(({ title, link }, idx) => {
            return (
              <Link
                key={idx}
                to={link}
                style={{
                  color: link === location.pathname ? "#00be83" : "black",
                }}
              >
                {title}
              </Link>
            );
          })}
        </Menu>
        <button
          onClick={() => {
            navigate("/request");
          }}
        >
          <img src="/assets/common/kimface.svg" alt="" />
          <div className="text">내 정부지원금 찾기</div>
        </button>
        <div className="mb-menu">
          <img src="/assets/header/menu.svg" alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
