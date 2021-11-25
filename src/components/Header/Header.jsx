import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const menuarr = ["김과장컨설팅", "서비스소개", "고객지원", "문의하기"];
const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0 74px;
  width: 100%;
  height: 64px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
`;
const Logo = styled.figure`
  width: 180px;
  height: 33.5px;
`;
const Menu = styled.nav`
  display: grid;
  grid-template-columns: 72px 60px 48px 48px;
  font-size: 13px;
  font-weight: bold;
  column-gap: 45px;
`;
function Header() {
  return (
    <Wrapper>
      <Logo>
        <img
          src="/assets/logo.webp"
          srcSet="/assets/logo@2x.webp 2x , /assets/logo@3x.webp 3x"
          alt="김과장컨설팅"
        />
      </Logo>
      <Menu>
        {menuarr.map((item, idx) => {
          return (
            <Link key={idx} to={"/"}>
              {item}
            </Link>
          );
        })}
      </Menu>
    </Wrapper>
  );
}

export default Header;
