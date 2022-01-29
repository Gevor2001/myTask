import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CatPage } from "../../pages/catPage";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatPage />} />
      </Routes>
    </BrowserRouter>
  );
};
