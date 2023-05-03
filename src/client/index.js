import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import IRoutes from "../Routes";

const App = () => {
  return (
    <BrowserRouter>
      <IRoutes />
    </BrowserRouter>
  );
};

ReactDom.hydrate(<App />, document.getElementById("root"));
