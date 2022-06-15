import React from "react";

function Speech({ content }) {
  return (
    <div className="speech">
      <img src="/assets/request/kim.svg" alt="" />
      {content}
    </div>
  );
}

export default Speech;
