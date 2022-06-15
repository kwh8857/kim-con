import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  & > .back {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: black;
    opacity: 0.5;
  }
  & > .box {
    position: relative;
    z-index: 2000;
    width: 341px;
    height: 421px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding-top: 35px;
    box-sizing: border-box;
    text-align: center;
    & > .cancel {
      position: absolute;
      right: 19px;
      top: 23px;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
    & > .profile {
      width: 145px;
      height: 145px;
      background-color: #f4f4f4;
      border-radius: 145px;
      display: flex;
      justify-content: center;
      align-items: center;
      & > img {
        width: 91.4px;
        height: 88.7px;
      }
    }
    & > .title {
      font-size: 25px;
      font-weight: bold;
      margin-top: 18px;
    }
    & > .sub {
      margin-top: 8px;
      font-size: 13px;
      line-height: 1.77;
      color: #262626;
    }
    & > button {
      width: 211px;
      height: 50px;
      background-color: #47d99b;
      border-radius: 27px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: bold;
      color: white;
      cursor: pointer;
      margin-top: 26px;
    }
  }
`;
function Popup() {
  const dispatch = useDispatch();
  const cancel = useCallback(() => {
    dispatch({
      type: "config/isPopup",
      payload: false,
    });
  }, [dispatch]);
  return (
    <Wrapper>
      <div className="back" />
      <div className="box">
        <figure className="cancel" onClick={cancel}>
          <img src="/assets/cancel.svg" alt="닫기" />
        </figure>
        <figure className="profile">
          <img src="/assets/kimface.svg" alt="" />
        </figure>
        <div className="title">문의가 접수되었습니다</div>
        <div className="sub">
          내용이 확인되는대로 답변 드리겠습니다. <br /> 남겨주신 이메일로
          상세하게 <br />
          답변드리도록 하겠습니다.
        </div>
        <button onClick={cancel}>메인으로</button>
      </div>
    </Wrapper>
  );
}

export default Popup;
