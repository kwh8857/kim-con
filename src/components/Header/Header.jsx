import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  ${(props) => {
    return css`
      background-color: ${props.scroll ? "white" : "transparent"};
    `;
  }}
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
`;
function Header({ isScroll }) {
  const location = useLocation();
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
    </Wrapper>
  );
}

export default Header;
