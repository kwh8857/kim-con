import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import MainPopup from "./components/MainPopup";
import RequestPopup from "./components/RequestPopup";
const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
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
    overflow: hidden;
    position: relative;
    z-index: 2000;
    width: 320px;
    height: 454px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-sizing: border-box;
    text-align: center;
    & > .cancel {
      position: absolute;
      right: 19px;
      top: 23px;
      width: 24px;
      height: 24px;
      cursor: pointer;
      z-index: 10;
    }
    & > .main-popup {
      padding-top: 56px;
      & > .content {
        transition: left 0.2s ease-in-out;
        width: fit-content;
        display: grid;
        grid-template-columns: repeat(4, 320px);
        position: absolute;
        left: 0;
        & > .card-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          & > .title {
            font-size: 23px;
            font-weight: bold;
            line-height: 1.43;
          }
          & > .sub {
            font-size: 14px;
            line-height: 1.43;
            margin: 6px 0 18px 0;
          }
          & > .img-wrapper {
            width: 128px;
            height: 128px;
            background-color: #f5f6f8;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            border-radius: 128px;
            & > img {
              width: fit-content;
            }
          }
        }
      }
      & > button {
        position: absolute;
        width: 31px;
        top: 236px;
        background-color: unset;
        cursor: pointer;
      }
      & > .left {
        left: 17px;
      }
      & > .right {
        right: 17px;
        transform: rotate(180deg);
      }
      & > .nav-btn {
        width: 211px;
        height: 50px;
        border-radius: 27px;
        background-color: #47d99b;
        bottom: 63px;
        top: unset;
        left: 55px;
        font-size: 16px;
        font-weight: bold;
        color: white;
      }
      & > .circle-wrapper {
        position: absolute;
        bottom: 33px;
        left: 125px;
        display: grid;
        grid-template-columns: repeat(4, 10px);
        column-gap: 10px;
        & > .circle {
          height: 10px;
          border-radius: 10px;
          background-color: #c49999;
        }
      }
    }
  }
`;
function Popup({ type }) {
  const dispatch = useDispatch();
  const cancel = useCallback(() => {
    dispatch({
      type: "config/isPopup",
      payload: {
        state: false,
        type: "",
      },
    });
  }, [dispatch]);
  return (
    <Wrapper>
      <div className="back" />
      <div className="box">
        <figure className="cancel" onClick={cancel}>
          <img src="/assets/cancel.svg" alt="닫기" />
        </figure>
        {type === "main" ? (
          <MainPopup cancel={cancel} />
        ) : (
          <RequestPopup cancel={cancel} />
        )}
      </div>
    </Wrapper>
  );
}

export default Popup;
