import React from "react";
import SiteRoot from "../root";
import { Route, Routes } from "react-router-dom";
import Home from "../views/home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<SiteRoot />}>
        <Route index element={<Home />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  );
};

export default Routing;
