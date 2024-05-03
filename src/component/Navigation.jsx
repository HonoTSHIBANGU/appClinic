import React from "react";
import Menu from "./Menu";
import RechercheVille from "./RechercheVille";
import Logo from "./Logo";

function Navigation() {
  return (
    <div className="flex relative top-5 justify-around">
      <Logo />
      <RechercheVille />
      <Menu />
    </div>
  );
}

export default Navigation;
