import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import firebaseApp from "../../../config/firebaseApp";
import Card from "./Card";

const Fstore = firebaseApp.firestore();

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
  & > .bottom {
    margin-top: 53px;
  }
  @media screen and (max-width: 1365px) {
    width: 768px;
    height: 1424px;
    padding-top: 47px;
    & > .top {
      flex-direction: column;
      align-items: center;
      justify-content: unset;
      row-gap: 20px;
      & > .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        & > .title {
          font-size: 26px;
        }
        & > .sub {
          font-size: 13px;
          margin-top: 9.4px;
        }
      }
    }
    & > .bottom {
      margin-top: 38px;
      border-top: solid 1px #dbdbdb;
    }
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
function List({ now }) {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [paging, setPaging] = useState(0);
  const [keyowrd, setKeyowrd] = useState(undefined);
  const length = parseFloat(String(displayData.length / 10));
  const __search = useCallback(
    (e) => {
      setKeyowrd(e);
    },
    [data]
  );
  const __changePaging = useCallback(
    (type) => {
      if (type === "plus") {
        setPaging(paging + 1);
      } else {
        setPaging(paging - 1);
      }
    },
    [paging]
  );

  useEffect(() => {
    setDisplayData([]);
    Fstore.collection(now)
      .orderBy("timestamp", "desc")
      .get()
      .then((res) => {
        let arr = [];
        res.forEach((item) => {
          if (item.data().config.isPin) {
            arr.unshift(item.data());
          } else {
            arr.push(item.data());
          }
        });
        setData(arr);
        setDisplayData(arr);
      });
    return () => {};
  }, [now]);
  useEffect(() => {
    if (keyowrd) {
      const clone = data.slice().filter(({ title }) => title.includes(keyowrd));
      setDisplayData(clone);
    } else {
      const clone = data.slice();
      setDisplayData(clone);
    }
    return () => {};
  }, [paging, data, keyowrd]);

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
          <input
            type="text"
            onChange={(e) => {
              __search(e.target.value);
            }}
            placeholder="검색어를 입력해주세요"
          />
          <figure>
            <img src="/assets/support/search.svg" alt="" />
          </figure>
        </div>
      </section>
      <section className="bottom">
        {displayData.slice(paging * 10, paging * 10 + 10).map((item, idx) => {
          return <Card key={idx} data={item} now={now} />;
        })}
        <BtnSection>
          <img
            src="/assets/left-arrow.svg"
            alt="뒤로가기"
            className="left"
            onClick={() => {
              if (paging > 0) {
                __changePaging("minus");
              }
            }}
          />
          <div
            className="page"
            style={
              length !== 0 && paging + 1 <= length
                ? undefined
                : {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }
            }
          >
            <div className="now">{paging + 1}</div>
            {length !== 0 && paging + 1 <= length ? (
              <div
                className="next"
                onClick={() => {
                  __changePaging("plus");
                }}
              >
                {paging + 2}
              </div>
            ) : undefined}
          </div>
          <img
            src="/assets/right-arrow.svg"
            alt="더보기"
            className="right"
            onClick={() => {
              if (length !== 0 && paging + 1 <= length) {
                __changePaging("plus");
              }
            }}
          />
        </BtnSection>
      </section>
    </Main>
  );
}

export default List;

export const BtnSection = styled.div`
  margin-top: 58px;
  display: flex;
  justify-content: center;
  & > img {
    width: 9px;
    cursor: pointer;
  }
  .page {
    display: grid;
    grid-template-columns: repeat(2, 30px);
    margin: 0 27.5px;
    column-gap: 4px;
    & > div {
      cursor: pointer;
      font-size: 13px;
      width: 30px;
      height: 30px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .now {
      background-color: #434343;
      color: white;
    }
    .next {
      background-color: white;
      color: #434343;
      border: solid 1px #dbdbdb;
    }
  }
`;
