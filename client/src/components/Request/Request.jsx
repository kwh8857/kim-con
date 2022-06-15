import React, { useReducer } from "react";
import Infoinput from "./components/Infoinput";
import SelectInput from "./components/SelectInput";
import Speech from "./components/Speech";
import "./css/index.css";
function reducer(state, action) {
  switch (action.type) {
    case "company":
      return { ...state, title: action.company };
    case "number":
      return { ...state, title: action.number };
    case "history":
      return { ...state, title: action.history };
    case "sector":
      return { ...state, title: action.sector };
    case "region":
      return { ...state, title: action.region };
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
  });
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
              필수입력 항목입니다. 입력항목에 따라, 사업안내가 제한적일 수
              있습니다 .
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
                  ({ title, type, content, placeholder, arr }, idx) => {
                    return content !== "select" ? (
                      <Infoinput
                        key={idx}
                        title={title}
                        type={type}
                        content={content}
                        placeholder={placeholder}
                      />
                    ) : (
                      <SelectInput
                        key={idx}
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
                        dispatch={dispatch}
                      />
                    );
                  }
                )}
              </div>
              <div className="right">
                {section1Speech.map((item, idx) => {
                  return <Speech key={idx} content={item} />;
                })}
              </div>
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
  },
  {
    title: "업종",
    type: "sector",
    content: "select",
    placeholder: "업종 선택",
    arr: [
      "제조업",
      "정보통신업 (IT)",
      "F&B, 프랜차이즈",
      "도소매 유통 판매",
      "엔터테인먼트, 여행, 예술",
      "공공 행정",
      "건설 및 기간 산업",
      "세무, 노무, 법무, 행정",
      "운수 및 물류",
      "의료 보건, 사회 복지",
      "금융, 보험, 부동산",
      "1차 산업 (농 임 수산업)",
      "기타",
    ],
  },
  {
    title: "지역",
    type: "region",
    content: "select",
    placeholder: "지역 선택",
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
const section1Speech = [
  <div className="text">
    업력에 따라 수혜 가능한 지원사업이 달라집니다. <br /> 정확한 업력을
    입력해주세요.
  </div>,
  <div className="text">
    업종에 따라 수혜 가능한 지원사업이 달라집니다. <br /> 정확한 업종을
    입력해주세요.
  </div>,
  <div className="text long">
    사업장 소재지에 따라 수혜 가능한 지원사업이 달라집니다. <br /> 정확한 지역을
    입력해주세요.
  </div>,
];
