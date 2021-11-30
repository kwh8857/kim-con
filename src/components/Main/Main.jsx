import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { SEARCH } from "../../reducers/actions";
import Header from "../Header/Header";
import NoticeSection from "./components/NoticeSection";
import Popup from "./components/Popup";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Side from "./components/Side";
import SnsSection from "./components/SnsSection";

function Main() {
  const isPopup = useSelector((state) => state.config.isPopup);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const ref = document.getElementById("root");
    function change(e) {
      if (e.target.scrollTop !== 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
    ref.addEventListener("scroll", change);

    return () => {
      ref.removeEventListener("scroll", change);
    };
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <header style={{ width: "100%" }}>
        <Header isScroll={isScroll} />
      </header>
      <Side />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <NoticeSection />
      <SnsSection />
      <Footer />
      {isPopup ? <Popup /> : undefined}
    </div>
  );
}

export default Main;
