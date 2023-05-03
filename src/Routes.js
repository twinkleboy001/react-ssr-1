import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";

function IRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
    </Routes>
  );
}

export default IRoutes;
