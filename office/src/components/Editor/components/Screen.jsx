import React, { useState, useRef } from "react";
import { resetServerContext } from "react-beautiful-dnd";

resetServerContext();

function Screen() {
  const screenRef = useRef(null);
  const [DragData, setDragData] = useState(undefined);

  return (
    <div
      id="screen"
      className="editor-screen"
      contentEditable="true"
      ref={screenRef}
      suppressContentEditableWarning={true}
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
