import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./component/Navigation";

function App({ children }) {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
