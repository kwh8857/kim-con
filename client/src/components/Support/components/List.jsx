import React from "react";
import styled, { css } from "styled-components";

const Main = styled.main`
  width: 1001px;
  height: 1413.5px;
  margin: 0 auto;
  padding-top: 72.5px;
  box-sizing: border-box;
  ${(props) => {
    return css`
      & > .top {
        & > .search {
          transform: translateY(${props.now === "project" ? "-20px" : 0});
        }
      }
    `;
  }}
  & > .top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    & > .left {
      & > .title {
        font-size: 40px;
        font-weight: bold;
      }
      & > .sub {
        font-size: 15px;
        margin-top: 8px;
        white-space: pre-line;
        line-height: 1.67;
      }
    }
    & > .search {
      width: 320px;
      height: 50px;
      border-radius: 10px;
      border: solid 1px #dbdbdb;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-left: 15.2px;
      padding-right: 15.7px;
      input {
        flex: 9;
        font-size: 15px;
      }
      & > figure {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        & > img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;
function List({ now }) {
  return (
    <Main now={now}>
      <section className="top">
        <div className="left">
          <div className="title">
            {now === "notice" ? "공지사항" : "지원사업"}
          </div>
          <div className="sub">
            {now === "notice"
              ? "김과장 컨설팅에서 알려드리는 새로운 소식들입니다."
              : `중소기업의 안정적 수익을 창출하고 자립을 도모할 수 있도록
다양한 사업 아이템을 지원하는 사업입니다.`}
          </div>
        </div>
        <div className="search">
          <input type="text" />
          <figure>
            <img src="/assets/support/search.svg" alt="" />
          </figure>
        </div>
      </section>
    </Main>
  );
}

export default List;
