import React, { useRef } from "react";

function TeamInput({
  data: {
    number: { first, second },
    year,
  },
  index,
}) {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const yearRef = useRef(null);
  return (
    <div className={`team-input ${index === 0 ? "zero" : ""}`}>
      <div className="title">주민등록번호 (출생연도/성별)</div>
      <div className="id-wrapper">
        <input
          type="number"
          placeholder="2자리"
          className="first"
          ref={firstRef}
          onChange={(e) => {
            const val = e.target.value;
            if (val.length > 2) {
              firstRef.current.value = val.slice(0, 2);
            }
          }}
        />
        <div className="circle-wrapper">
          {[0, 0, 0, 0].map((item, idx) => {
            return <div key={idx} className="circle" />;
          })}
        </div>
        <div className="line" />

        <input
          type="number"
          className="second"
          ref={secondRef}
          onChange={(e) => {
            const val = e.target.value;
            if (val.length > 1) {
              secondRef.current.value = val.slice(0, 1);
            }
          }}
        />
        <div className="circle-wrapper">
          {[0, 0, 0, 0, 0].map((item, idx) => {
            return <div key={idx} className="circle" />;
          })}
        </div>
      </div>
      <div className="title">고용보험 등재 연월</div>
      <div className="year-wrapper">
        <input
          type="text"
          placeholder="YYYY-MM"
          ref={yearRef}
          onChange={(e) => {
            if (e.target.value.length > 7) {
              yearRef.current.value = e.target.value.slice(0, 7);
            } else {
              const number = e.target.value.replace(/[^0-9-]/gi, "");
              const val = number.replace(/(\d{4})(\d{2})/, "$1-$2");
              yearRef.current.value = val;
            }
          }}
        />
      </div>
    </div>
  );
}

export default TeamInput;
