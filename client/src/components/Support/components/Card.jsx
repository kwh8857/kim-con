import React from "react";
import styled from "styled-components";

const SupportCard = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
  justify-content: space-between;
  height: 65px;
  border-bottom: solid 1px #dbdbdb;
  box-sizing: border-box;
  padding: 0 29px;
  align-items: center;
  background-color: ${(props) => (props.isPin ? "#f3fdf9" : "white")};
  & > .left {
    display: flex;
    align-items: center;
    column-gap: 35px;
    & > .kind {
      width: 69px;
      text-align: center;
      font-size: 15px;
      font-weight: bold;
      color: #00be83;
    }
    & > .title {
      font-size: 15px;
      font-weight: 500;
      display: flex;
      align-items: center;
      column-gap: 7px;
    }
  }
  & > .right {
    font-size: 13px;
    font-weight: bold;
    color: #989898;
  }
`;

function Card({
  data: {
    title,
    timestamp,
    config: { isPin },
    kind,
  },
}) {
  return (
    <SupportCard isPin={isPin}>
      <div className="left">
        <div className="kind">{kind}</div>
        <div className="title">
          {title}
          <div className="badge">
            {isPin ? <img src="/assets/support/pin.svg" alt="" /> : undefined}
          </div>
        </div>
      </div>
      <div className="right">{formatDate(timestamp, ".")}</div>
    </SupportCard>
  );
}

export default Card;

export function formatDate(date, type) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (parseInt(month) < 10) month = "0" + month;
  if (parseInt(day) < 10) day = "0" + day;
  return [year, month, day].join(type);
}
