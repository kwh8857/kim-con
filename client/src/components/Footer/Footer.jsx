import React from "react";
import styled from "styled-components";
const Wrapper = styled.footer`
  height: 192px;
  width: 100%;
  background-color: #434343;
  color: #ffffff;
  & > .wrapper {
    width: 993px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    line-height: 1.67;
    box-sizing: border-box;
    padding-top: 46.2px;
    & > .left {
      & > figure {
        width: 180px;
        height: 33.4px;
        margin-bottom: 16.4px;
      }
    }
    & > .right {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
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
          사업자등록번호 123-45-12345 | 대표자 홍길동 <br /> 주소 서울특별시
          강남구 테헤란로 123 | 문의 marketing@naver.com
        </div>
        <div className="right">
          <div className="nav-wrapper">
            <figure>
              <img src="/assets/footer/blog.svg" alt="블로그" />
            </figure>
            <figure>
              <img src="/assets/footer/facebook.svg" alt="페이스북" />
            </figure>
            <figure>
              <img src="/assets/footer/youtube.svg" alt="유튜브" />
            </figure>
          </div>
          <div className="from">©김과장 컨설팅. All rights reserved.</div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
