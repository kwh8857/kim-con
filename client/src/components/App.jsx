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
function App() {
  const [agent, setAgent] = useState("pc");
  useEffect(() => {
    if (window.innerWidth < 768) {
      setAgent("mb");
    } else {
      setAgent("pc");
    }

    return () => {};
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/request" exact element={<Request />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/service" exact element={<Service />} />
        <Route path="/support" exact element={<Support />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
