import React from "react";
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
function App() {
  const { state, type } = useSelector((state) => state.config.isPopup);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/request/*" element={<Request />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/service/*" element={<Service />} />
        <Route path="/support/*" element={<Support />} />
        <Route path="/request/end/*" element={<Finish />} />
      </Routes>
      {state ? <Popup type={type} /> : undefined}
      <Footer />
    </Router>
  );
}

export default App;
