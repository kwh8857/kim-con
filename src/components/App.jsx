import React from "react";
import Main from "./Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/core.css";
import About from "./About/About";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
