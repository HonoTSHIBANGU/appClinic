import React from "react";
import Menu from "./Menu";
import RechercheVille from "./RechercheVille";
import Logo from "./Logo";

function Navigation() {
  return (
    <div className="w-auto flex relative top-1 justify-between border-b  border-solid border-gray-700 px-[150px] p-4  ">
      <Logo />
      <RechercheVille />
      <Menu />
    </div>
  );
}

export default Navigation;
