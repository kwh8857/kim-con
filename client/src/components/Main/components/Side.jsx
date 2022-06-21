import React from "react";
import styled from "styled-components";
const Aside = styled.aside`
  position: fixed;
  bottom: 86px;
  right: 20px;
  display: none;
  flex-direction: column;
  z-index: 100;
  & > button {
    width: 59px;
    height: 59px;
    background-color: #ffde00;
    border-radius: 59px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & > figure {
      width: 36.1px;
      height: 38.1px;
    }
  }
  @media screen and (max-width: 767px) {
    display: flex;
  }
`;
function Side() {
  return (
    <Aside>
      <button>
        <figure>
          <img src="/assets/header/kakao.svg" alt="카카오" />
        </figure>
      </button>
    </Aside>
  );
}

export default Side;
