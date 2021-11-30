import React from "react";
import Main from "./Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/core.css";
import About from "./About/About";
import Service from "./Service/Service";
import Support from "./Support/Support";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/service" exact element={<Service />} />
        <Route path="/support" exact element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
