import React, { useState } from "react";

function Fold({ number, content, title }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`fold ${isOpen ? "open" : " "}`}>
      <div className="box-title">
        <div className="left">
          <span>{number}</span> {title}
        </div>
        <img
          src="/assets/sub/arrow.svg"
          alt="열기"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <div className="content">{content}</div>
    </div>
  );
}

export default Fold;
