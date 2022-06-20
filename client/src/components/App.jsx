import React, { useEffect, useState } from "react";
import Main from "./Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/core.css";
import About from "./About/About";
import Service from "./Service/Service";
import Support from "./Support/Support";
import Request from "./Request/Request";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useSelector } from "react-redux";
import Popup from "./Popup/Popup";
import Finish from "./Finish/Finish";
import Toast from "./Toast/Toast";
function App() {
  const { state, type } = useSelector((state) => state.config.isPopup);
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
    <Router>
      <Header isScroll={isScroll} />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/request/*" element={<Request />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/service/*" element={<Service />} />
        <Route path="/support/*" element={<Support />} />
        <Route path="/request/end/*" element={<Finish />} />
      </Routes>
      {state ? <Popup type={type} /> : undefined}
      <Toast />
      <Footer />
    </Router>
  );
}

export default App;
