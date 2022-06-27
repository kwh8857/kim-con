import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import firebaseApp from "../config/firebaseApp";
import Head from "./components/Head";

const Fstore = firebaseApp.firestore();

const Wrapper = styled.main`
  padding: 140px 0;
  width: 100%;
  height: fit-content;
  background-color: white;
  & > .container {
    & > .box {
      width: 992px;
      height: 77px;
      display: flex;
      align-items: center;
      border-radius: 10px;
      background-color: #f5f6f8;
      column-gap: 10px;
      box-sizing: border-box;
      padding-left: 35px;
      & > .tag {
        font-size: 15px;
        font-weight: bold;
        width: 116px;
      }
      & > .content {
        font-size: 14px;
      }
    }
    & > .company-content {
      margin-bottom: 83px;
      width: 100%;
      height: 234px;
      padding: 25px 521px 27px 35px;
      border-radius: 10px;
      background-color: #f5f6f8;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      row-gap: 18px;
      & > .card {
        display: flex;
        align-items: center;
        column-gap: 32px;
        & > .tag {
          font-size: 15px;
          font-weight: bold;
          width: 97px;
        }
        & > .content {
          font-size: 14px;
        }
      }
    }
    & > .team-wrapper {
      margin: 29.5px 0 32.1px 0;
      & > .title {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 13.4px;
      }
      & > .box {
        width: 100%;
        height: fit-content;
        border-radius: 10px;
        background-color: #f5f6f8;
        padding: 22px 29.5px 29.5px;
        box-sizing: border-box;
        & > .tag-wrapper {
          display: flex;
          align-items: center;
          font-size: 15px;
          font-weight: bold;
          column-gap: 278.5px;
        }
        & > .list {
          display: flex;
          flex-direction: column;
          row-gap: 20px;
          & > .team {
            padding-top: 12.5px;
            border-top: solid 1px #dbdbdb;
            display: flex;
            align-items: center;
            & > .number-first {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 85.5px;
              height: 50px;
              border-radius: 10px;
              border: solid 1px #dbdbdb;
              font-size: 14px;
              font-weight: bold;
            }
            & > .circle-wrapper {
              margin-left: 8px;
              display: flex;
              align-items: center;
              column-gap: 7px;
              & > .circle {
                width: 13px;
                height: 13px;
                border-radius: 13px;
                background-color: #dbdbdb;
              }
            }
            & > .line {
              width: 14px;
              height: 3px;
              margin: 0 11.5px;
              background-color: #dbdbdb;
            }
            & > .number-second {
              width: 44.5px;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              font-weight: bold;
              border-radius: 10px;
              border: solid 1px #dbdbdb;
            }
            & > .year {
              margin-left: 91px;
              width: 225px;
              height: 50px;
              padding: 15px 10.5px 15px 14.5px;
              border-radius: 10px;
              border: solid 1px #dbdbdb;
              box-sizing: border-box;
              font-size: 14px;
            }
          }
          & > .zero {
            border-top: unset;
          }
        }
      }
    }
    & > .bottom {
      margin-bottom: 120px;
    }
    & > .sector-select {
      margin-top: 24.5px;
      display: grid;
      grid-template-columns: repeat(4, 234px);
      gap: 24px 19px;

      & > .sector-card {
        cursor: pointer;
        height: 245px;
        border-radius: 10px;
        border: solid 1px #dbdbdb;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        padding-top: 16px;
        text-align: center;

        & > .img-wrapper {
          width: 88px;
          height: 88px;
          border-radius: 88px;
          background-color: #f5f6f8;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s ease-in-out;

          & > img {
            width: fit-content;
          }
        }

        & > .title {
          font-size: 16px;
          font-weight: bold;
          color: #434343;
          margin: 9px 0 6px 0;
        }

        & > .text {
          font-size: 13px;
          line-height: 1.54;
          color: #434343;
        }
      }

      & > .active {
        background-color: #f3fdf9;
        border-color: #47d99b;

        & > .img-wrapper {
          background: white;
        }
      }
    }
    & > .sector-content {
      margin-top: 75.5px;
      margin-bottom: 146.5px;
      & > .title {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 10.5px;
      }
      & > .content {
        min-height: 245px;
        width: 100%;
        border-radius: 10px;
        background-color: #f5f6f8;
        padding: 14px;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 1.71;
        height: fit-content;
      }
    }
    & > .etc {
      height: 163px;
      padding: 25px 452px 36px 35px;
      border-radius: 10px;
      background-color: #f5f6f8;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 18px;
      & > .card {
        display: flex;
        align-items: center;
        column-gap: 28px;
        & > .tag {
          width: 180px;
          font-size: 15px;
          font-weight: bold;
        }
        & > .content {
          font-size: 14px;
        }
      }
    }
  }
`;

function Answer() {
  const timestamp = useLocation().pathname.split("/")[2];
  const [data, setData] = useState(undefined);
  useEffect(() => {
    Fstore.collection("request")
      .where("timestamp", "==", parseFloat(timestamp))
      .get()
      .then((res) => {
        res.forEach((item) => {
          setData(item.data().data);
        });
      });

    return () => {};
  }, [timestamp]);

  return (
    <Wrapper>
      {data ? (
        <div className="container">
          <Head
            img={<img src="/assets/answer/company.svg" alt="" />}
            text="기업정보"
          />
          <div className="company-content">
            {[
              {
                tag: "회사명",
                content: data.company,
              },
              {
                tag: "사업자등록번호",
                content: data.number,
              },
              {
                tag: "업력",
                content: data.history,
              },
              {
                tag: "업종",
                content: data.sector,
              },
              {
                tag: "지역",
                content: data.region,
              },
            ].map(({ tag, content }, idx) => {
              return (
                <div className="card" key={idx}>
                  <div className="tag">{tag}</div>
                  <div className="content">{content}</div>
                </div>
              );
            })}
          </div>
          <Head
            img={<img src="/assets/answer/team.svg" alt="" />}
            text="팀원정보"
          />
          <div className="box">
            <div className="tag">4대보험 가입자 수</div>
            <div className="content">{data.team}명</div>
          </div>
          <div className="team-wrapper">
            <div className="title">팀원 정보</div>
            <div className="box">
              <div className="tag-wrapper">
                <div>주민등록번호 (출생연도/성별)</div>
                <div>고용보험 등재 연월</div>
              </div>
              <div className="list">
                {data.teamarr.map(
                  ({ number: { first, second }, year }, idx) => {
                    return (
                      <div
                        className={`team ${idx === 0 ? "zero" : ""}`}
                        key={idx}
                      >
                        <div className="number-first">{first}</div>
                        <div className="circle-wrapper">
                          {[0, 0, 0, 0].map((item, idx) => {
                            return <div className="circle" key={idx}></div>;
                          })}
                        </div>
                        <div className="line" />
                        <div className="number-second">{second}</div>
                        <div className="circle-wrapper">
                          {[0, 0, 0, 0, 0, 0].map((item, idx) => {
                            return <div className="circle" key={idx}></div>;
                          })}
                        </div>
                        <div className="year">{year}</div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="box bottom">
            <div className="tag">채용예정자 수</div>
            <div className="content">{data.plan}명</div>
          </div>
          <Head
            img={<img src="/assets/answer/kim.svg" alt="" />}
            text="지원 희망 분야"
          />
          <div className="sector-select">
            {data.sector === "제조업"
              ? sectorArr2.map(({ img, title, type, content }, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`sector-card ${
                        data.category.indexOf(type) > -1 ? "active" : " "
                      }`}
                    >
                      <div className="img-wrapper">{img}</div>
                      <div className="title">{title}</div>
                      {content}
                    </div>
                  );
                })
              : sectorArr.map(({ img, title, type, content }, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`sector-card ${
                        data.category.indexOf(type) > -1 ? "active" : " "
                      }`}
                    >
                      <div className="img-wrapper">{img}</div>
                      <div className="title">{title}</div>
                      {content}
                    </div>
                  );
                })}
          </div>
          <div className="sector-content">
            <div className="title">요청내용</div>
            <div className="content">{data.content}</div>
          </div>
          <Head
            img={<img src="/assets/answer/kim.svg" alt="" />}
            text="기타정보"
          />
          <div className="etc">
            <div className="card">
              <div className="tag">진단결과 받을 이메일 주소</div>
              <div className="content">{data.etc.email}</div>
            </div>
            <div className="card">
              <div className="tag">휴대폰번호 (대표자/담당자)</div>
              <div className="content">{data.etc.tel}</div>
            </div>
            <div className="card">
              <div className="tag">개인정보 수집 및 이용 동의</div>
              <div className="content">동의</div>
            </div>
          </div>
        </div>
      ) : undefined}
    </Wrapper>
  );
}

export default Answer;

const sectorArr = [
  {
    img: <img alt="" src="/assets/answer/marketing.svg" />,
    title: "마케팅지원",
    type: "marketing",
    content: (
      <div className="text">
        홈페이지 , 영상 제작 <br /> 브랜딩 (BI,CI, 슬로건) <br /> 수출 마케팅,
        제품디자인, 카달로그 <br /> 온라인홍보(상세페이지,콘텐츠 제작)
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/answer/team.svg" />,
    title: "고용지원금",
    type: "team",
    content: (
      <div className="text">
        일경험 프로그램 <br /> 국민취업지원제도 <br /> 청년일자리 도약장려금{" "}
        <br /> 지역별 고용지원사업
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/answer/tech.svg" />,
    title: "기술지원",
    type: "tech",
    content: (
      <div className="text">
        소상공인 환경개선사업 <br /> 상품개발 지원 및 간판제작 <br /> 스마트공방
        구축사업 <br />
        스마트 상점(무인결제기 도입)
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/answer/consulting.svg" />,
    title: "소상공인 컨설팅",
    type: "consulting",
    content: (
      <div className="text">
        사업방향성 검토 <br /> 밀키트 메뉴 개발 <br /> 프랜차이즈 사업
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/answer/ip.svg" />,
    title: "IP지식재산권",
    type: "ip",
    content: (
      <div className="text">
        국내, 해외 특허출원 <br /> 기술이전 사업화 <br /> 특허청 글로벌 IP
        지원사업 <br /> 상표 출원 , 웹툰 상표등록
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/answer/fund.svg" />,
    title: "정책자금",
    type: "fund",
    content: (
      <div className="text">
        창업초기, 일반자금 <br /> 소공인 자금, 사업전환자금 <br /> 여성가장
        지원자금 <br /> 폐업자 재창업 자금
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/answer/voucher.svg" />,
    title: "바우처 사업",
    type: "voucher",
    content: (
      <div className="text">
        비대면바우처 / 데이터바우처 <br /> 클라우드 서비스 바우처 <br />{" "}
        제조혁신바우처 <br />
        수출바우처
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/answer/firm.svg" />,
    title: "기업인증",
    type: "firm",
    content: (
      <div className="text">
        기업부설연구소, 연구개발전담부서 <br /> 백년가게, 나눔가게 <br />
        여성기업, 가족친화기업 <br /> 벤처기업, 이노비즈, 메인비즈
      </div>
    ),
  },
];
const sectorArr2 = [
  {
    img: <img alt="" src="/assets/answer/fund.svg" />,
    title: "정책자금",
    type: "fund",
    content: (
      <div className="text">
        일반경영안전자금, 시설자금 <br /> 공장설립, 공장 담보대출 <br /> IP특허
        담보, 청년고용연계자금
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/answer/team.svg" />,
    title: "고용지원금",
    type: "team",
    content: (
      <div className="text">
        재직 근로자에 대한 인건비지원 <br /> 청년, 시니어, 전문인력 채용 지원금{" "}
        <br />
        워라밸일자리장려금
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/answer/tech.svg" />,
    title: "기술지원",
    type: "tech",
    content: (
      <div className="text">
        시제품 제작(R&D) <br /> 스마트공장 구축 <br /> 규격인증(ISO, HACCP){" "}
        <br /> 고용환경개선사업
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/answer/firm.svg" />,
    title: "기업인증",
    type: "firm",
    content: (
      <div className="text">
        벤처기업, 이노비즈, 메인비즈 <br /> 기업부설연구소, 연구개발전담부서{" "}
        <br /> 일자리창출 우수기업, <br /> 여성기업, 가족친화기업
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/answer/ip.svg" />,
    title: "IP지식재산권",
    type: "ip",
    content: (
      <div className="text">
        국내, 해외 특허출원 <br /> 기술이전 사업화 <br /> 특허청 글로벌 IP
        지원사업 <br /> 상표 출원 , 웹툰 상표등록
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/answer/marketing.svg" />,
    title: "마케팅지원",
    type: "marketing",
    content: (
      <div className="text">
        홈페이지 , 영상 제작 <br /> 브랜딩 (BI,CI, 슬로건) <br /> 수출 마케팅,
        제품디자인, 카달로그 <br /> 온라인홍보(상세페이지,콘텐츠 제작)
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/answer/voucher.svg" />,
    title: "바우처 사업",
    type: "voucher",
    content: (
      <div className="text">
        제조혁신바우처 <br /> 수출바우처 <br /> 비대면바우처 <br />{" "}
        데이터,클라우드 바우처
      </div>
    ),
  },

  {
    img: <img alt="" src="/assets/answer/consulting.svg" />,
    title: "경영 컨설팅",
    type: "consulting",
    content: (
      <div className="text">
        정부지원사업 연계 기획 <br /> 사업계획서 멘토링 <br /> 사업방향성 검토
      </div>
    ),
  },
];
