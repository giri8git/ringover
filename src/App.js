import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./components/Contact";
import Header from "./components/Header";
import Store1 from "./components/Store1";
import "./App.css";
import Journey from "./components/Journey";
import Team from "./components/Team";
import Store from "./components/Store";
import Store2 from "./components/Store2";

function App() {
  return (
    <>
      <div className="mainbody">
        <Router>
          <Header />
          <Routes>
            <Route path="/Store1" element={<Store1 />} />
            <Route path="/Store2" element={<Store2 />} />
            <Route path="/Journey" element={<Journey />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Store" element={<Store/>} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
