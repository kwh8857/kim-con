import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import firebaseApp from "../../config/firebaseApp";
const Fstorage = firebaseApp.storage();
function UploadFile({ __close, template, temKey, category, state }) {
  const dispatch = useDispatch();
  const [File, setFile] = useState(undefined);
  const __uploadFile = useCallback(
    (item, id) => {
      return new Promise((resolve, reject) => {
        Fstorage.ref(`/${category}/${temKey}/${item.name}`)
          .put(item)
          .then((res) => {
            res.ref.getDownloadURL().then((url) => {
              const pal = document.getElementsByClassName("editor-screen")[0];
              let linkelement = document.createElement("div");
              linkelement.className = "link-template";
              linkelement.contentEditable = false;
              linkelement.draggable = true;
              let leftimg = document.createElement("img");
              leftimg.src = "/assets/editor/down.svg";
              leftimg.alt = "파일";
              leftimg.className = "file-asset";
              let title = document.createElement("div");
              title.className = "link-title";
              title.innerHTML = item.name;
              linkelement.appendChild(leftimg);
              linkelement.appendChild(title);
              pal.appendChild(linkelement);
              resolve(true);
            });
          });
      });
    },
    [temKey, category]
  );
  const __readFile = useCallback(() => {
    let fileList = Object.values(File);
    dispatch({
      type: "@config/isLoading",
      payload: true,
    });
    Promise.all(
      fileList.map(async (item, idx) => {
        const result = await __uploadFile(
          item,
          `file-${
            new Date().getTime() - Math.floor(Math.random() * (100 - 1 + 1)) + 1
          }`
        ).then((result) => {
          return result;
        });
        return result;
      })
    ).then(() => {
      dispatch({
        type: "@config/isLoading",
        payload: false,
      });
      __close();
    });
  }, [File, dispatch, __close, __uploadFile]);
  return (
    <div className="popup-wrapper file">
      <img
        src="/assets/editor/cancel.svg"
        alt=""
        className="cancel"
        onClick={__close}
      />
      <div className="popup-title">파일 업로드</div>
      <div
        className="content-wrapper file-content"
        onDrop={(e) => {
          setFile(e.dataTransfer.files);
          // __readFile(e.dataTransfer.files);
          e.stopPropagation();
          e.preventDefault();
        }}
        onDragOver={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <label
          className="file-insert"
          style={File ? { backgroundColor: "rgb(234,244,252)" } : undefined}
        >
          <img
            src={`/assets/editor/${File ? "blue-" : ""}document.svg`}
            alt="insert"
          />
          <div
            className="insert-title"
            style={File ? { color: "#3597ec" } : undefined}
          >
            {File
              ? File.length > 1
                ? `${File[0].name} 외 ${File.length - 1}개`
                : `${File[0].name}`
              : "파일을 선택 또는 드래그해주세요"}
          </div>
          <input
            type="file"
            multiple={true}
            style={{ display: "none" }}
            onChange={(e) => {
              setFile(e.target.files);
              // __readFile(e.target.files);
            }}
          />
        </label>
      </div>
      <div
        className="link-btn file-btn"
        style={File ? undefined : { backgroundColor: "grey" }}
        onClick={() => {
          if (File) {
            __readFile();
          }
        }}
      >
        등록하기
      </div>
    </div>
  );
}

export default UploadFile;
