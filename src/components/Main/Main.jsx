import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { SEARCH } from "../../reducers/actions";
import Header from "../Header/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Side from "./components/Side";

function Main() {
  // const dispatch = useDispatch();
  // const test = useSelector((state) => state.config);
  // console.log(test);
  // useEffect(() => {
  //   dispatch({
  //     type: SEARCH,
  //     payload: "ok",
  //   });
  // }, [dispatch]);

  return (
    <div style={{ width: "100%" }}>
      <header style={{ width: "100%" }}>
        <Header />
      </header>
      <Side />
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <div> 보여주세요 좀 어디야여기</div> */}
    </div>
  );
}

export default Main;
