import React, { useCallback, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 750px;
  height: 260px;
  padding: 0px;
  background: #ffffff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 40px;
  box-shadow: 0 3px 25px 0 rgba(0, 0, 0, 0.11);
  padding-left: 38px;
  padding-top: 38px;
  box-sizing: border-box;
  opacity: 0;
  transform: translate3d(0, 30%, 0);
  :after {
    content: "";
    position: absolute;
    border-style: solid;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    top: 59px;
  }
  & > .top {
    display: flex;
    align-items: center;
    & > .q {
      width: 48.4px;
      height: 48.4px;
      background-color: #47d99b;
      font-size: 24px;
      font-family: "ygo";
      border-radius: 48.4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > .question {
      font-size: 24px;
      font-weight: bold;
      margin-left: 15px;
    }
  }
  & > .bottom {
    display: flex;
    align-items: flex-start;
    margin-top: 21px;
    & > figure {
      width: 46.6px;
      height: 45.2px;
      margin-right: 15px;
    }
    & > .answer {
      font-size: 17px;
      line-height: 1.59;
      white-space: pre-wrap;
    }
  }
  & > .line {
    margin-top: 24.7px;
    width: 664.2px;
    height: 0;
    border-top: dashed 1px #a8a8a8;
  }
  ${(props) => {
    return css`
      justify-self: ${props.type};
      ::after {
        left: ${props.type === "left" ? "-27px" : "unset"};
        right: ${props.type === "flex-end" ? "-27px" : "unset"};
        border-width: 18px ${props.type === "left" ? "27px" : 0} 18px
          ${props.type === "left" ? 0 : "27px"};
      }
    `;
  }}
`;
function Bubble({ q, a, type }) {
  const dom = useRef(null);
  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      if (current && entry.isIntersecting) {
        current.style.transitionProperty = "opacity ,transform";
        current.style.transitionDuration = "0.7s";
        current.style.transitionTimingFunction = "ease";
        current.style.transitionDelay = `0.2s`;
        current.style.opacity = "1";
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [dom]
  );

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, {
        threshold: 0.3,
        root: null,
        rootMargin: "0px",
      });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll, dom]);
  return (
    <Wrapper type={type} ref={dom}>
      <div className="top">
        <div className="q">Q</div>
        <div className="question">{q}</div>
      </div>
      <div className="line" />
      <div className="bottom">
        <figure>
          <img src="/assets/main/small-kimface.svg" alt="" />
        </figure>
        <span className="answer">{a}</span>
      </div>
    </Wrapper>
  );
}

export default Bubble;
