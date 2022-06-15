import React, { useState } from "react";

function SelectInput({
  title,
  type,
  content,
  placeholder,
  info,
  dispatch,
  arr,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`select-input`}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="title">
        {title}
        <div className="circle" />
      </div>
      <div className={`select-wrapper  ${isOpen ? "open" : ""}`}>
        <div className="now card">
          <div className={`text ${info === "" ? "place" : ""}`}>
            {info !== "" ? info : placeholder}
          </div>
          <img src="/assets/request/arrow.svg" alt="" />
        </div>
        <div className="select-card-wrapper">
          {arr.map((item, idx) => {
            return (
              <div key={idx} className="select card">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SelectInput;
