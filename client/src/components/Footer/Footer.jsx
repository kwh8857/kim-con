import React from "react";
import styled from "styled-components";
const Wrapper = styled.footer`
  height: 230px;
  width: 100%;
  background-color: #434343;
  color: #ffffff;
  & > .wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    line-height: 1.67;
    box-sizing: border-box;
    padding: 43.9px 0;
    & > .left {
      & > figure {
        width: 180px;
        margin-bottom: 14.4px;
      }
      & > .text {
        font-size: 14px;
        line-height: 1.43;
        & > .mb {
          display: none;
        }
      }
      & > .nav {
        margin-top: 14.4px;
        & > a {
          font-size: 14px;
          color: white;
        }
      }
    }
    & > .right {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      justify-content: space-between;
      & > .nav-wrapper {
        margin-bottom: 20px;
        display: grid;
        grid-template-columns: repeat(3, 39.2px);
        column-gap: 17px;
        & > figure {
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 1365px) {
    height: 348px;
    & > .wrapper {
      flex-direction: column;
      align-items: center;
      justify-content: unset;
      text-align: center;
      & > .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > figure {
          margin-bottom: 14.4px;
        }
        & > .nav {
          margin-top: 30px;
          padding-left: 10px;
        }
      }
      & > .right {
        align-items: center;
        & > .nav-wrapper {
          margin: 35.3px 0 15.6px 0;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 398px;
    & > .wrapper {
      padding: 53.6px 0 0 0;
      & > .left {
        & > .text {
          & > span {
            display: none;
          }
          & > .mb {
            display: block;
          }
        }
        & > .nav {
          padding-left: unset;
        }
      }
      & > .right {
        & > .nav-wrapper {
          margin: 34px 0 15.6px 0;
        }
      }
    }
  }
`;
function Footer() {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="left">
          <figure>
            <img
              src="/assets/footer/footer-logo.png"
              srcSet="/assets/footer/footer-logo@2x.png 2x , /assets/footer/footer-logo@3x.png 3x"
              alt=""
            />
          </figure>
          <div className="text">
            케이콘즈(KCONS) <br /> 사업자등록번호: 501-38-71563 | 대표자: 김영조{" "}
            <br /> 주소: 대구광역시 동구 동내로76, 209호 <span>|</span>{" "}
            <br className="mb" /> 문의 kcons365@gmail.com
          </div>
          <div className="nav">
            <a href="/about">회사소개 </a> &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="/"> 이용약관 </a> &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="/">개인정보처리방침</a>
          </div>
        </div>
        <div className="right">
          <div className="nav-wrapper">
            <a href="/" target={"_blank"} rel="noreferrer">
              <img src="/assets/footer/tel.svg" alt="전화" />
            </a>
            <a href="/" target={"_blank"} rel="noreferrer">
              <img src="/assets/footer/kakao.svg" alt="카카오" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCOzpPKKhUKVRnCa3NDF8xfA"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src="/assets/footer/youtube.svg" alt="유튜브" />
            </a>
          </div>
          <div className="from">©김과장 컨설팅. All rights reserved.</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
