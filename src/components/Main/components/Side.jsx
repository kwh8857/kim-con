import React from "react";
import styled from "styled-components";
const Aside = styled.aside`
  position: fixed;
  top: 50%;
  right: 73px;
  display: flex;
  flex-direction: column;
  z-index: 100;
  & > button {
    font-size: 15px;
    font-weight: bold;
    background-color: unset;
    cursor: pointer;
    & > figure {
      & > figcaption {
        transform: translateY(-15px);
      }
    }
  }
`;
function Side() {
  return (
    <Aside>
      <button>
        <figure>
          <img src="/assets/side/kakao.svg" alt="카카오" />
          <figcaption>카카오톡 문의</figcaption>
        </figure>
      </button>
      <button>
        <figure>
          <img src="/assets/side/naver.svg" alt="네이버" />
          <figcaption>네이버 톡톡</figcaption>
        </figure>
      </button>
    </Aside>
  );
}

export default Side;
