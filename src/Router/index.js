import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Getstarted from "../Pages/Getstarted";
import Home from "../Pages/Home";
import Investors from "../Pages/Investers";
import Players from "../Pages/Players";
import Counter from "../features/counter/Counter";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/get-started" element={<Getstarted />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
