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
            const nodes = screenRef.current.childNodes;
            Array.from(nodes).map((item, idx) => {
              if (item === e.target) {
                screenRef.current.insertBefore(DragData.target, nodes[idx]);
                console.log(nodes[idx]);
              }
            });
          } else {
            if (e.clientY > DragData.clientY) {
              console.log(e);
              e.target.appendChild(DragData.target);
            } else {
              console.log(e);
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
