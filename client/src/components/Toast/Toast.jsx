import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/index.css";
function Toast() {
  const dispatch = useDispatch();
  const { state, msg } = useSelector((state) => state.config.isToast);
  useEffect(() => {
    if (state) {
      setTimeout(() => {
        dispatch({
          type: "config/toast",
          payload: {
            state: false,
            msg: "",
          },
        });
      }, 2000);
    }

    return () => {};
  }, [state, dispatch]);

  return (
    <div className={`toast ${state ? "on" : ""}`}>
      <div className="box">{msg}</div>
    </div>
  );
}

export default Toast;
