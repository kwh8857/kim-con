import React, { useCallback, useState, useEffect } from "react";

function Link({ __close }) {
  const [Title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [isNext, setisNext] = useState(false);
  const __initLink = useCallback(() => {
    let linkelement = document.createElement("a");
    console.log(link);
    linkelement.href = link;
    linkelement.target = "_blank";
    linkelement.className = "link-template";
    linkelement.contentEditable = false;
    linkelement.draggable = true;
    let leftimg = document.createElement("img");
    leftimg.src = "/assets/editor/blue-link.svg";
    leftimg.alt = "링크";
    leftimg.className = "link-asset";
    let title = document.createElement("div");
    title.className = "link-title";
    title.innerHTML = Title;
    let rightimg = document.createElement("img");
    rightimg.className = "link-play";
    rightimg.src = "/assets/editor/blue-play.svg";
    rightimg.alt = "play";
    linkelement.appendChild(leftimg);
    linkelement.appendChild(title);
    linkelement.appendChild(rightimg);
    let screen = document.getElementsByClassName("editor-screen")[0];
    screen.appendChild(linkelement);
    document.execCommand("insertHTML", false, linkelement);
    __close();
  }, [Title, __close, link]);

  useEffect(() => {
    let regex =
      /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!]))?/;
    if (Title && regex.test(link)) {
      setisNext(true);
    } else {
      setisNext(false);
    }
    return () => {};
  }, [Title, link]);
  return (
    <div className="popup-wrapper">
      <img
        src="/assets/editor/cancel.svg"
        alt=""
        className="cancel"
        onClick={__close}
      />
      <div className="popup-title">링크 등록</div>
      <div className="content-wrapper">
        <div className="content-title">링크 제목</div>
        <input
          type="text"
          className="content-input"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className="content-title second">링크 주소</div>
        <input
          type="text"
          className="content-input"
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
      </div>
      <div
        className="link-btn"
        style={{
          backgroundColor: isNext ? undefined : "grey",
        }}
        onClick={() => {
          if (isNext) {
            __initLink();
          }
        }}
      >
        등록하기
      </div>
    </div>
  );
}

export default Link;
