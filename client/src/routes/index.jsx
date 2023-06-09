import React from "react";
import SiteRoot from "../root";
import { Route, Routes } from "react-router-dom";
import Home from "../views/home";
import ErrorPage from "../views/error";
import BookDetails from "../views/book-details";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<SiteRoot />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<BookDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
