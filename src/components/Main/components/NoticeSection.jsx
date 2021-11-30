import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  background-color: #f4f4f4;
  width: 100%;
  height: 722px;
  & > div {
    width: 993px;
    margin: 0 auto;
    height: 100%;
    padding-top: 103px;
    box-sizing: border-box;
    & > .top {
      & > .logo {
        background-image: url("/assets/main/greensteach.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 113px;
        height: 44.1px;
        color: white;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & > .title {
        margin-top: 8px;
        font-size: 40px;
        font-weight: bold;
        line-height: 1.38;
      }
    }
    & > .bottom {
      margin-top: 28px;
      display: grid;
      grid-template-columns: repeat(2, 489px);
      column-gap: 15px;
      & > .box {
        width: 489px;
        height: 306px;
        border-radius: 10px;
        background-color: white;
        & > header {
          padding: 22px 29px 31px 32px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          & > .title {
            font-size: 22px;
            font-weight: bold;
          }
          & > figure {
            cursor: pointer;
            width: 43px;
            height: 43px;
          }
        }
      }
    }
  }
`;
function NoticeSection() {
  return (
    <Wrapper>
      <div>
        <div className="top">
          <div className="logo">고객지원</div>
          <div className="title">
            김과장 컨설팅에서 <br /> 알려드립니다
          </div>
        </div>
        <div className="bottom">
          <article className="box">
            <header>
              <div className="title">공지사항</div>
              <figure>
                <img src="/assets/main/plus.svg" alt="" />
              </figure>
            </header>
          </article>
          <article className="box">
            <header>
              <div className="title">지원사업 소식</div>
              <figure>
                <img src="/assets/main/plus.svg" alt="더보기" />
              </figure>
            </header>
          </article>
        </div>
      </div>
    </Wrapper>
  );
}

export default NoticeSection;
