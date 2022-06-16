import React from "react";

function SectorCard({
  data: { img, title, content, type },
  dispatch,
  category,
}) {
  return (
    <div
      className={`sector-card ${category.indexOf(type) > -1 ? "active" : " "}`}
      onClick={() => {
        dispatch(type);
      }}
    >
      <div className="img-wrapper">{img}</div>
      <div className="title">{title}</div>
      {content}
    </div>
  );
}

export default SectorCard;
