import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { SEARCH } from "../../reducers/actions";
import Header from "../Header/Header";
import Section1 from "./components/Section1";

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
    <div>
      <header>
        <Header />
      </header>
      <Section1 />
      메인입니다
      {/* <div> 보여주세요 좀 어디야여기</div> */}
    </div>
  );
}

export default Main;
