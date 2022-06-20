import React, { useRef } from "react";

function Infoinput({ title, content, placeholder, dispatch, sub, type }) {
  const inputRef = useRef(null);
  return (
    <div className="info-input">
      <div className="title">
        {title} <span>{sub}</span>
        <div className="circle" />
      </div>
      <input
        type={content}
        placeholder={placeholder}
        ref={inputRef}
        onBlur={(e) => {
          if (content === "number") {
            if (e.target.value > 0) {
              dispatch(e.target.value);
            }
          } else {
            dispatch(e.target.value);
          }
        }}
        onChange={(e) => {
          if (type === "team") {
            if (e.target.value < 0) {
              inputRef.current.value = 0;
            } else if (e.target.value > 20) {
              inputRef.current.value = 20;
            } else {
              inputRef.current.value = parseInt(e.target.value);
            }
          }
          if (type === "plan") {
            inputRef.current.value = parseInt(e.target.value);
          }
          if (type === "tel") {
            const number = e.target.value.replace(/[^0-9-]/gi, "");
            const val = number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
            if (val.length > 13) {
              inputRef.current.value = val.slice(0, 13);
            } else {
              inputRef.current.value = val;
            }
          }
          if (type === "email") {
            const val = e.target.value.replace(/[^a-z0-9@_.-]/gi, "");
            inputRef.current.value = val;
          }
        }}
      />
      {type === "team" || type === "plan" ? (
        <div className="one">명</div>
      ) : undefined}
    </div>
  );
}

export default Infoinput;
