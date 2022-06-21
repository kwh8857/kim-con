import React, { useEffect, useState } from "react";
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
      width: 119px;
      height: 40px;
      border-radius: 57px;
      background-color: #ffde00;
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: bold;
      color: #434343;
      column-gap: 11px;
      box-sizing: border-box;
      padding-left: 11px;
      & > img {
        width: 23px;
      }
      & > .text {
        font-size: 13px;
        font-weight: bold;
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
    transition: 0.2s ease-in-out;
    display: flex;
    flex-direction: column;
    padding-top: ${(props) => (props.isOpen ? "37px" : "0")};
    box-sizing: border-box;
    overflow: hidden;
    height: ${(props) => (props.isOpen ? "267px" : "0")};
    position: absolute;
    bottom: ${(props) => (props.isOpen ? "-267px" : "0")};
    left: 0;
    background-color: white;
    width: 100%;
    column-gap: unset;
    align-items: center;
    text-align: center;
    font-size: 20px;
    white-space: nowrap;
    & > a {
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      & > div {
        width: 72px;
        height: 1px;
        background-color: #dbdbdb;
        margin: 20px 0 23px 0;
      }
    }
  }
`;
function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.getElementById("root").scrollTo(0, 0);

    return () => {};
  }, [location.pathname]);
  useEffect(() => {
    const ref = document.getElementById("root");
    function change(e) {
      if (e.target.scrollTop !== 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
    if (location.pathname === "/") {
      ref.addEventListener("scroll", change);
    } else {
      setIsScroll(true);
    }
    return () => {
      if (location.pathname === "/") {
        ref.removeEventListener("scroll", change);
      }
    };
  }, [location.pathname]);
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
      <Menu isOpen={isOpen}>
        {menuarr.map(({ title, link }, idx) => {
          return (
            <Link
              key={idx}
              to={link}
              onClick={() => {
                if (isOpen) {
                  setIsOpen(false);
                }
              }}
              style={
                link === location.pathname
                  ? {
                      color: "#00be83",
                      fontWeight: "bold",
                    }
                  : {
                      color: "#434343",
                      fontWeight: 500,
                    }
              }
            >
              {title}
              {idx !== 2 ? <div /> : undefined}
            </Link>
          );
        })}
      </Menu>
      <div className="right">
        <button
          onClick={() => {
            navigate("/request");
          }}
        >
          <img src="/assets/header/kakao.svg" alt="" />
          <div className="text">문의하기</div>
        </button>
        <div
          className="mb-menu"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img
            src={`/assets/header${isOpen ? "/cancel" : "/menu"}.svg`}
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
