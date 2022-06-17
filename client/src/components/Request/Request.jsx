import React, { useCallback, useReducer } from "react";
import Infoinput from "./components/Infoinput";
import SectorCard from "./components/SectorCard";
import SelectInput from "./components/SelectInput";
import Speech from "./components/Speech";
import TeamInput from "./components/TeamInput";
import "./css/index.css";
function reducer(state, action) {
  switch (action.type) {
    case "company":
      return { ...state, company: action.company };
    case "number":
      return { ...state, number: action.number };
    case "history":
      return { ...state, history: action.history };
    case "sector":
      return { ...state, sector: action.sector };
    case "region":
      return { ...state, region: action.region };
    case "team":
      return { ...state, team: action.payload };
    case "plan":
      return { ...state, plan: action.payload };
    case "teamarr":
      return { ...state, teamarr: action.payload };
    case "category":
      return { ...state, category: action.payload };
    case "content":
      return { ...state, content: action.payload };
    case "etc/policy":
      return {
        ...state,
        etc: {
          ...state.etc,
          policy: action.payload,
        },
      };
    case "etc/email":
      return {
        ...state,
        etc: {
          ...state.etc,
          email: action.payload,
        },
      };
    case "etc/tel":
      return {
        ...state,
        etc: {
          ...state.etc,
          tel: action.payload,
        },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
function Request() {
  const [info, dispatch] = useReducer(reducer, {
    company: "",
    number: "",
    history: "",
    sector: "",
    region: "",
    team: 0,
    teamarr: [
      {
        number: {
          first: undefined,
          second: undefined,
        },
        year: undefined,
      },
      {
        number: {
          first: undefined,
          second: undefined,
        },
        year: undefined,
      },
      {
        number: {
          first: undefined,
          second: undefined,
        },
        year: undefined,
      },
    ],
    plan: 0,
    category: [],
    content: "",
    etc: {
      email: "",
      tel: "",
      policy: false,
    },
  });
  const __company = useCallback(
    (e) => {
      dispatch({
        type: "company",
        company: e,
      });
    },
    [dispatch]
  );
  const __number = useCallback(
    (e) => {
      dispatch({
        type: "number",
        number: e,
      });
    },
    [dispatch]
  );
  const __email = useCallback((e) => {
    dispatch({
      type: "etc/email",
      payload: e,
    });
  }, []);
  const __tel = useCallback((e) => {
    dispatch({
      type: "etc/tel",
      payload: e,
    });
  }, []);

  const __category = useCallback(
    (e) => {
      const arr = info.category.slice();
      const index = info.category.indexOf(e);
      if (index < 0) {
        arr.push(e);
      } else {
        arr.splice(index, 1);
      }
      dispatch({
        type: "category",
        payload: arr,
      });
    },
    [dispatch, info]
  );
  const __history = useCallback(
    (e) => {
      dispatch({
        type: "history",
        history: e,
      });
    },
    [dispatch]
  );
  const __sector = useCallback((e) => {
    dispatch({
      type: "sector",
      sector: e,
    });
  }, []);
  const __plan = useCallback(
    (e) => {
      dispatch({
        type: "plan",
        payload: parseFloat(e),
      });
    },
    [dispatch]
  );
  const __region = useCallback((e) => {
    dispatch({
      type: "region",
      region: e,
    });
  }, []);
  const __team = useCallback(
    (e) => {
      const arr = Array(parseInt(e)).fill();
      let arrobj = [];
      for (let i = 0; i < arr.length; i++) {
        arrobj.push(
          info.teamarr[i]
            ? info.teamarr[i]
            : {
                number: {
                  first: undefined,
                  second: undefined,
                },
                year: undefined,
              }
        );
      }
      dispatch({
        type: "team",
        payload: e,
      });
      dispatch({
        type: "teamarr",
        payload: arrobj,
      });
    },
    [dispatch, info]
  );
  return (
    <div className="request">
      <div className="top">
        <div className="wrapper">
          <div className="left">
            <div className="category">상담신청</div>
            <div className="title">
              정부지원금으로 스마트하게 <br /> 사업 운영하는 노하우!
            </div>
            <div className="sub">
              김과장컨설팅은 고객님의 사업장에 최적화된 <br /> 경영지원 서비스를
              제공합니다.
            </div>
          </div>
          <div className="right">
            <img src="/assets/request/document.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <div className="notice">
            <div className="circle" />
            <div className="text">
              필수입력 항목입니다. 입력항목에 따라, <br /> 사업안내가 제한적일
              수 있습니다 .
            </div>
          </div>
          <div className="section1">
            <div className="content-head">
              <img src="/assets/request/company.svg" alt="" />
              <div className="text">기업정보</div>
            </div>
            <div className="company-wrapper">
              <div className="left">
                {section1Input.map(
                  ({ title, type, content, placeholder, arr, speech }, idx) => {
                    return content !== "select" ? (
                      <Infoinput
                        key={idx}
                        title={title}
                        content={content}
                        placeholder={placeholder}
                        dispatch={type === "company" ? __company : __number}
                      />
                    ) : (
                      <div key={idx} className="speech-wrapper">
                        <SelectInput
                          title={title}
                          type={type}
                          content={content}
                          placeholder={placeholder}
                          arr={arr}
                          info={
                            type === "history"
                              ? info.history
                              : type === "sector"
                              ? info.sector
                              : info.region
                          }
                          dispatch={
                            type === "history"
                              ? __history
                              : type === "sector"
                              ? __sector
                              : __region
                          }
                        />
                        <Speech content={speech} />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="bold-line" />
          <div className="section2">
            <div className="content-head">
              <img src="/assets/request/team.svg" alt="" />
              <div className="text">팀원정보</div>
            </div>
            <div className="section-wrapper">
              <div className="left">
                <Infoinput
                  title={"4대보험 가입자 수"}
                  content={"number"}
                  sub={"(대표자제외)"}
                  type="team"
                  placeholder={"최대 20명"}
                  dispatch={__team}
                />
              </div>
              <div className="right">
                <Speech
                  content={
                    <div className="text">
                      4대보험 가입자 수에 따라 수혜가능한 지원사업이{" "}
                      <br className="mb" /> 달라집니다.
                      <br className="pc" />
                      정확한 가입자 수를 입력해주세요.
                    </div>
                  }
                />
              </div>
            </div>
            <div className="team-wrapper">
              <div className="title">팀원 정보</div>
              <div className="team-box">
                <div className="tag-wrapper">
                  <div className="number">주민등록번호 (출생연도/성별)</div>
                  <div className="year">고용보험 등재 연월</div>
                </div>
                {info.teamarr.map((item, idx) => {
                  return <TeamInput key={idx} data={item} index={idx} />;
                })}
              </div>
            </div>
            <div className="plan-wrapper">
              <Infoinput
                title={"채용예정자"}
                content={"number"}
                type="plan"
                placeholder={"숫자만 입력"}
                dispatch={__plan}
              />
            </div>
          </div>
          <div className="bold-line" />
          <div className="section3 wrapper">
            <div className="content-head">
              <img src="/assets/request/kim.svg" alt="" />
              <div className="text">지원 희망 분야</div>
            </div>
            <div className="sector-wrapper">
              <div className="sub">
                지원 희망 분야를 선택해주세요 더욱 구체적인 상담을
                진행해드립니다
              </div>
              <div className="sector-select">
                {info.sector === "제조업"
                  ? sectorArr2.map((item, idx) => {
                      return (
                        <SectorCard
                          key={idx}
                          data={item}
                          dispatch={__category}
                          category={info.category}
                        />
                      );
                    })
                  : sectorArr.map((item, idx) => {
                      return (
                        <SectorCard
                          key={idx}
                          data={item}
                          dispatch={__category}
                          category={info.category}
                        />
                      );
                    })}
              </div>
            </div>
            <div className="title">
              요청내용
              <div className="circle" />
            </div>
            <div className="content-wrapper">
              <textarea
                placeholder="요청내용을 입력해주세요"
                onBlur={(e) => {
                  dispatch({
                    type: "content",
                    payload: e.target.value,
                  });
                }}
              />
              <div className="content-notice">
                <span>예시</span>
                <br />
                - 정부지원금으로 포장장비를 구입하고 싶습니다. <br />
                - 직원 급여가 부담됩니다. 보조 받는 방법이 궁금합니다. <br /> -
                회사에 이렇다할 제품이 없습니다. 상표도 출원하고 싶고, 특허도
                내고 싶어요. <br /> - 건물관리는 어르신들이 잘하시던데 시니어
                관련 사업 좀 알려주세요. <br /> - 공장을 매입하고 싶은데
                벤처기업이 아니 라서 한도가 작다고 합니다. 도와주세요.
              </div>
            </div>
          </div>
          <div className="bold-line" />
          <div className="section4">
            <div className="content-head">
              <img src="/assets/request/kim.svg" alt="" />
              <div className="text">기타정보</div>
            </div>
            <div className="etc-wrapper">
              <div className="etc-input-wrapper">
                <Infoinput
                  title={"진단결과 받을 이메일 주소"}
                  content={"text"}
                  type="email"
                  placeholder={"이메일 입력"}
                  dispatch={__email}
                />
                <Infoinput
                  title={"휴대폰번호 (대표자/담당자)"}
                  content={"text"}
                  type="tel"
                  placeholder={"숫자만 입력"}
                  dispatch={__tel}
                />
              </div>
              <div className="policy-wrapper">
                <div className="title">
                  개인정보 수집 및 이용 동의
                  <div className="circle" />
                </div>
                <div className={`policy ${info.etc.policy ? "on" : " "}`}>
                  <div className="left">
                    <div
                      className="check"
                      onClick={() => {
                        dispatch({
                          type: "etc/policy",
                          payload: !info.etc.policy,
                        });
                      }}
                    >
                      {info.etc.policy ? (
                        <img src="/assets/request/check.svg" alt="" />
                      ) : undefined}
                    </div>
                    <div className="text">
                      개인정보 수집 및 이용에 동의합니다 <span>(필수)</span>
                    </div>
                  </div>
                  <a href="/" target={"_blank"}>
                    내용보기
                  </a>
                </div>
              </div>
              <button className="send">김과장에게 문의하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;

const section1Input = [
  {
    title: "회사명",
    type: "company",
    content: "text",
    placeholder: "사업자등록증에 표기된 회사명  입력",
  },
  {
    title: "사업자등록번호",
    type: "number",
    content: "number",
    placeholder: "- 없이 숫자만 입력해주세요",
  },
  {
    title: "업력",
    type: "history",
    content: "select",
    placeholder: "업력 선택",
    arr: ["예비창업자", "1년 미만", "3년 미만", "7년 미만", "7년 이상"],
    speech: (
      <div className="text">
        업력에 따라 수혜 가능한 지원사업이 달라집니다. <br /> 정확한 업력을
        입력해주세요.
      </div>
    ),
  },
  {
    title: "업종",
    type: "sector",
    content: "select",
    placeholder: "업종 선택",
    arr: [
      {
        title: "제조업",
        img: <img src="/assets/request/sector1.svg" alt="" />,
      },
      {
        title: "정보통신업 (IT)",
        img: <img src="/assets/request/sector2.svg" alt="" />,
      },
      {
        title: "F&B, 프랜차이즈",
        img: <img src="/assets/request/sector3.svg" alt="" />,
      },
      {
        title: "도소매 유통 판매",
        img: <img src="/assets/request/sector4.svg" alt="" />,
      },
      {
        title: "엔터테인먼트, 여행, 예술",
        img: <img src="/assets/request/sector5.svg" alt="" />,
      },
      {
        title: "공공 행정",
        img: <img src="/assets/request/sector6.svg" alt="" />,
      },
      {
        title: "건설 및 기간 산업",
        img: <img src="/assets/request/sector7.svg" alt="" />,
      },
      {
        title: "세무, 노무, 법무, 행정",
        img: <img src="/assets/request/sector8.svg" alt="" />,
      },
      {
        title: "운수 및 물류",
        img: <img src="/assets/request/sector9.svg" alt="" />,
      },
      {
        title: "의료 보건, 사회 복지",
        img: <img src="/assets/request/sector10.svg" alt="" />,
      },
      {
        title: "금융, 보험, 부동산",
        img: <img src="/assets/request/sector11.svg" alt="" />,
      },
      {
        title: "1차 산업 (농 임 수산업)",
        img: <img src="/assets/request/sector12.svg" alt="" />,
      },
      {
        title: "기타",
        img: <img src="/assets/request/sector13.svg" alt="" />,
      },
    ],
    speech: (
      <div className="text">
        업종에 따라 수혜 가능한 지원사업이 달라집니다. <br /> 정확한 업종을
        입력해주세요.
      </div>
    ),
  },
  {
    title: "지역",
    type: "region",
    content: "select",
    placeholder: "지역 선택",
    speech: (
      <div className="text long">
        사업장 소재지에 따라 수혜 가능한 지원사업이 달라집니다. <br /> 정확한
        지역을 입력해주세요.
      </div>
    ),
    arr: [
      "서울특별시",
      "경기도",
      "충청남도",
      "충청북도",
      "경상북도",
      "경상남도",
      "전라북도",
      "전라남도",
      "강원도",
      "세종특별자치시",
      "제주특별자치시",
      "인천광역시",
      "대전광역시",
      "광주광역시",
      "대구광역시",
      "울산광역시",
      "부산광역시",
    ],
  },
];
// const section1Speech = [
//   <div className="text">
//     업력에 따라 수혜 가능한 지원사업이 달라집니다. <br /> 정확한 업력을
//     입력해주세요.
//   </div>,
//   <div className="text">
//     업종에 따라 수혜 가능한 지원사업이 달라집니다. <br /> 정확한 업종을
//     입력해주세요.
//   </div>,
//   <div className="text long">
//     사업장 소재지에 따라 수혜 가능한 지원사업이 달라집니다. <br /> 정확한 지역을
//     입력해주세요.
//   </div>,
// ];
const sectorArr = [
  {
    img: <img alt="" src="/assets/request/marketing.svg" />,
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
    img: <img alt="" src="/assets/request/team.svg" />,
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
    img: <img alt="" src="/assets/request/tech.svg" />,
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
    img: <img alt="" src="/assets/request/consulting.svg" />,
    title: "소상공인 컨설팅",
    type: "consulting",
    content: (
      <div className="text">
        사업방향성 검토 <br /> 밀키트 메뉴 개발 <br /> 프랜차이즈 사업
      </div>
    ),
  },
  {
    img: <img alt="" src="/assets/request/ip.svg" />,
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
    img: <img alt="" src="/assets/request/fund.svg" />,
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
    img: <img alt="" src="/assets/request/voucher.svg" />,
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
    img: <img alt="" src="/assets/request/firm.svg" />,
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
    img: <img alt="" src="/assets/request/fund.svg" />,
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
    img: <img alt="" src="/assets/request/team.svg" />,
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
    img: <img alt="" src="/assets/request/tech.svg" />,
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
    img: <img alt="" src="/assets/request/firm.svg" />,
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
    img: <img alt="" src="/assets/request/ip.svg" />,
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
    img: <img alt="" src="/assets/request/marketing.svg" />,
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
    img: <img alt="" src="/assets/request/voucher.svg" />,
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
    img: <img alt="" src="/assets/request/consulting.svg" />,
    title: "경영 컨설팅",
    type: "consulting",
    content: (
      <div className="text">
        정부지원사업 연계 기획 <br /> 사업계획서 멘토링 <br /> 사업방향성 검토
      </div>
    ),
  },
];
