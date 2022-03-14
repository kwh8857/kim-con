import React, { useCallback, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Droppable,
  DragDropContext,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";
import TemplateLink from "./Template/TemplateLink";
resetServerContext();

function Screen({ temKey, Fstore, Fstorage, state }) {
  const dispatch = useDispatch();
  const screenRef = useRef(null);
  const template = useSelector((state) => state.database.editor);
  const deletelist = useSelector((state) => state.database.deletelist);
  const [focusIdx, setfocusIdx] = useState(0);
  const [DragData, setDragData] = useState(undefined);

  const __deleteTemplate = useCallback(
    (idx) => {
      if (template.length > 1) {
        setfocusIdx(-1);
        const arr = template.slice();
        arr.splice(idx, 1);
        if (state === "new") {
          Fstore.collection("editor").doc(temKey).update({ template: arr });
        }
        dispatch({
          type: "@layouts/CHANGE_EDITOR",
          payload: arr,
        });
      }
    },
    [template, dispatch, Fstore, temKey, state]
  );
  const __deleteImage = useCallback(
    (url, type, idx, data, resize) => {
      if (state === "new") {
        if (type === "IMAGE") {
          Fstorage.refFromURL(resize).delete();
        }
        Fstorage.refFromURL(url).delete();
      } else {
        let arr = deletelist.slice();
        const filt = arr.filter(
          (item) => item.type === type && item.content.url === url
        );
        if (filt.length === 0) {
          arr.push(data);
          dispatch({
            type: "@layouts/INIT_DELETELIST",
            payload: arr,
          });
        }
      }
      __deleteTemplate(idx);
    },
    [__deleteTemplate, Fstorage, state, deletelist, dispatch]
  );
  useEffect(() => {
    function deleteTem(event) {
      if (event.key === "Backspace" && template.length > 1 && focusIdx > -1) {
        const arr = template.slice();
        let nowTemplate = arr[focusIdx];
        if (nowTemplate.type !== "TITLE") {
          if (nowTemplate.type === "IMAGE" || nowTemplate.type === "FILE") {
            const { content, type } = nowTemplate;
            __deleteImage(content.url, type, focusIdx, content.resize);
          }

          __deleteTemplate(focusIdx);
        } else {
          arr.splice(focusIdx, 1);
          if (
            nowTemplate.type === "TITLE" &&
            focusIdx !== 0 &&
            nowTemplate.content.length === 0
          ) {
            dispatch({
              type: "@layouts/CHANGE_EDITOR",
              payload: arr,
            });
          }
        }
      }
    }
    document.addEventListener("keydown", deleteTem);
    return () => {
      document.removeEventListener("keydown", deleteTem);
    };
  }, [
    focusIdx,
    template,
    dispatch,
    temKey,
    Fstore,
    Fstorage,
    __deleteImage,
    __deleteTemplate,
  ]);
  return (
    <div
      className="editor-screen"
      contentEditable="true"
      ref={screenRef}
      onClick={() => {
        console.log(screenRef.current.childNodes);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDragStart={(e) => {
        setDragData(e);
      }}
      onDrop={(e) => {
        if (DragData) {
          if (e.target.className !== "editor-screen") {
            e.target.before(DragData.target);
          } else {
            if (e.clientY > DragData.clientY) {
              e.target.appendChild(DragData.target);
            } else {
              e.target.insertBefore(DragData.target, e.target.firstChild);
            }
          }
          setDragData(undefined);
        }
      }}
    >
      <div></div>
    </div>
  );
}

export default React.memo(Screen);
