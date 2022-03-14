import React from "react";
import TemplateEmty from "./TemplateEmty";

function TemplateLink({ data, idx }) {
  const { title, url } = data;
  return (
    <div className="link-template" contentEditable={false} draggable={true}>
      <img
        src={`/assets/editor/blue-link.svg`}
        alt="링크"
        className="link-asset"
      />
      <div className="link-title">{title}</div>
      <img
        className="link-play"
        src="/assets/editor/blue-play.svg"
        alt="play"
      />
    </div>
  );
}

export default TemplateLink;
