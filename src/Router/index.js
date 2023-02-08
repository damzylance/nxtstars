import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Getstarted from "../Pages/Getstarted";
import Home from "../Pages/Home";
import Investors from "../Pages/Investers";
import Players from "../Pages/Players";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/get-started" element={<Getstarted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
