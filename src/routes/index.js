import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, Page2, Page3 } from "../pages";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage exact />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
