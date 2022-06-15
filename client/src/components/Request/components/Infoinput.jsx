import React from "react";

function Infoinput({ title, type, content, placeholder }) {
  return (
    <div className="info-input">
      <div className="title">
        {title}
        <div className="circle" />
      </div>
      <input type={content} placeholder={placeholder} />
    </div>
  );
}

export default Infoinput;
