import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Resizer from "react-image-file-resizer";
const dummy = [
  // { img: "summary", type: "SUMMARY" },
  { img: "temp", type: "IMAGE" },
  { img: "video", type: "VIDEO" },
  // { img: "youtube", type: "YOUTUBE" },
  { img: "link", type: "LINK" },
  { img: "file", type: "FILE" },
];

function Insert({ setIsUp, temKey, category, type }) {
  const dispatch = useDispatch();
  const template = useSelector((state) => state.database.editor);

  const __fileReader = useCallback((file) => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.onload = function (e) {
        const imageUrl = e.target.result;
        var img = new Image();
        img.src = imageUrl;
        img.onload = function (e) {
          Resizer.imageFileResizer(
            file,
            5,
            5,
            "JPEG",
            100,
            0,
            (uri) => {
              const pal = document.getElementsByClassName("editor-screen")[0];
              const ima = document.createElement("img");
              const text = document.createElement("div");
              ima.className = "template-img";
              ima.src = imageUrl;
              ima.alt = file.name;
              pal.appendChild(ima);
              pal.appendChild(text);

              resolve({
                url: imageUrl,
                resize: uri,
                name: file.name,
                width: this.width,
                height: this.height,
              });
            },
            "base64"
          );
        };
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const __imageUpdate = useCallback(
    (e) => {
      let fileList = Object.values(e.target.files);
      fileList.map((item) => {
        const pof = __fileReader(item).then(() => {
          return true;
        });
        return pof;
      });
    },
    [__fileReader]
  );
  return (
    <div className="insert-wrapper">
      {dummy.map(({ img, type }, idx) => {
        return (
          <label
            className="test-img"
            key={idx}
            onClick={() => {
              if (type !== "IMAGE" && type !== "SUMMARY") {
                setIsUp({
                  status: true,
                  type: type,
                });
              } else if (type === "SUMMARY") {
                let arr = template.slice();
                arr.push({
                  type: "SUMMARY",
                  content: {
                    text: "",
                    images: [],
                  },
                  id: `summary-${
                    new Date().getTime() -
                    Math.floor(Math.random() * (100 - 1 + 1)) +
                    1
                  }`,
                });
                dispatch({
                  type: "@layouts/CHANGE_EDITOR",
                  payload: arr,
                });
              }
            }}
          >
            {type === "IMAGE" ? (
              <input
                type="file"
                style={{ opacity: 0 }}
                multiple={true}
                accept="image/x-png,image/gif,image/jpeg"
                onChange={__imageUpdate}
              />
            ) : undefined}
            <img src={`/assets/editor/${img}.svg`} alt={`${img}`} />
          </label>
        );
      })}
    </div>
  );
}

export default Insert;
