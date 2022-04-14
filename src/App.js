import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/nav";
import DisplayToken from "./components/displaytoken";


const App = () => {
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/displaytoken" element={<DisplayToken />} exact />
      </Routes>
    
    </Router>
  )
};

export default App;