import React, { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Link({ __close, template }) {
  const dispatch = useDispatch();
  const [Title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [isNext, setisNext] = useState(false);
  const __initLink = useCallback(() => {
    let linkelement = document.createElement("div");
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
    // linkelement.addEventListener("dragover", (event) => {
    //   console.log("over");
    //   event.preventDefault();
    // });

    // linkelement.addEventListener("dragend", (e) => {
    //   console.log("drop");
    //   console.log(e);
    //   const id = e.dataTransfer.getData("text");
    //   const dropzone = e.target;
    //   console.log(dropzone);
    //   console.log(screen.parentNode);
    //   screen.parentNode.insertBefore(id);
    //   e.dataTransfer.clearData();
    // });
    screen.appendChild(linkelement);
    document.execCommand("insertHTML", false, linkelement);
    // let arr = template.slice();
    // arr.push({
    //   type: "LINK",
    //   content: {
    //     title: Title,
    //     url: link,
    //   },
    //   id: `link-${
    //     new Date().getTime() - Math.floor(Math.random() * (100 - 1 + 1)) + 1
    //   }`,
    // });
    // dispatch({
    //   type: "@layouts/CHANGE_EDITOR",
    //   payload: arr,
    // });
    __close();
  }, [Title, link, __close, template, dispatch]);

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
