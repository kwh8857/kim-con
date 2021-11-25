import React from "react";
import styled from "styled-components";
const arr = [
  {
    title: "기업지원금",
    content: [
      "예비창업패키지",
      "초기창업패키지",
      "청년추가고용장려금",
      "청년내일채움공제",
      "일자리 안정자금",
    ],
    img: "section2-1.svg",
  },
  {
    title: "정책자금",
    content: [
      "수출입자금",
      "재도약지원자금",
      "공장설립자금",
      "혁신창업사업화자금",
      "엔젤투자연계보증",
      "공장담보대출",
      "R&D 보증",
      "IP 사업화 자금 대출",
    ],
    img: "section2-2.svg",
  },
  {
    title: "R&D 지원사업",
    content: [
      "중소기업혁신바우처",
      "데이터바우처",
      "수출바우처",
      "스마트팩토리",
      " 기술개발R&D",
      "비R&D 지원",
      "수출마케팅",
      "시제품 제작",
    ],
    img: "section2-3.svg",
  },
];
const Wrapper = styled.section`
  background-color: #f8f8f8;
  width: 100%;
  height: 1313px;
  padding-top: 199px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > .top {
    display: flex;

    & > .left {
      display: flex;
      flex-direction: column;
      margin-right: 272px;
      & > .title {
        font-family: "ygo";
        font-size: 40px;
        line-height: 1.38;
      }
      & > .sub {
        margin-top: 25px;
        font-size: 17px;
        line-height: 1.47;
      }
      .green {
        color: #00be83;
      }
    }
    & > figure {
      width: 191px;
      height: 191px;
      background-color: #47d99b;
      border-radius: 191px;
      display: flex;
      align-items: center;
      justify-content: center;
      & > img {
        width: 120.5px;
        height: 116.9px;
      }
    }
  }
  & > .bottom {
    display: grid;
    margin-top: 55px;
    grid-template-columns: repeat(3, 321px);
    column-gap: 29px;
    & > .box {
      width: 100%;
      height: 627px;
      border-radius: 20px;
      box-shadow: 0 3px 25px 0 rgba(0, 0, 0, 0.11);
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 32px;
      box-sizing: border-box;
      text-align: center;
      & > figure {
        width: 132px;
        height: 132px;
        background-color: #f4f4f4;
        border-radius: 132px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > img {
          width: 72px;
        }
      }
      & > .title {
        font-family: "ygo";
        font-size: 28px;
        color: #00be83;
        margin-top: 18px;
      }
      & > .line {
        background-color: #dbdbdb;
        width: 269px;
        height: 1px;
        margin-top: 20px;
        margin-bottom: 27px;
      }
      & > .content {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.22;
      }
    }
  }
`;
function Section2() {
  return (
    <Wrapper>
      <article className="top">
        <div className="left">
          <span className="title">
            아이템 발굴부터 지원사업 기획 <br /> 정책자금 지원까지 <br />
            <span className="green">ONE-STOP SERVICE</span>
          </span>
          <span className="sub">
            복잡하고 어렵기만한 사업의 첫 시작 <br /> 아이템 발굴부터 지원사업
            기획과 정책자금 지원까지 <br /> 김과장이 컨설팅이 함께합니다
          </span>
        </div>
        <figure>
          <img src="/assets/kimface.svg" alt="" />
        </figure>
      </article>
      <section className="bottom">
        {arr.map(({ title, img, content }, idx) => {
          return (
            <article key={idx} className="box">
              <figure>
                <img
                  src={`/assets/${img}`}
                  alt=""
                  style={{ transform: `translateX(${idx === 2 ? "8px" : 0})` }}
                />
              </figure>
              <span className="title">{title}</span>
              <div className="line" />
              <div className="content">
                {content.map((item, idx) => {
                  return (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </section>
    </Wrapper>
  );
}

export default Section2;
