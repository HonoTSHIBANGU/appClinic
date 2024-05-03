import React from "react";
import { Link, Outlet } from "react-router-dom";
import LoginPage from "../../component/LoginPage";

function Articles() {
  return (
    <div className=" flex flex-col gap-8 p-10">
      <LoginPage />
    </div>
  );
}

export default Articles;
