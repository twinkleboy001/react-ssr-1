import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

function IRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/login" exact element={<Login />}></Route>
    </Routes>
  );
}

export default IRoutes;
