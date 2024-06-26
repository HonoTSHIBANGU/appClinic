import React from "react";
import CartPhoto from "../assets/image/shopping-cart.svg";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className=" flex gap-5 font-normal ">
      <NavLink to={"/"}>
        <h3>Accueil</h3>
      </NavLink>
      <NavLink to={"article"}>
        <h3>Article</h3>
      </NavLink>
      <NavLink to={"/apropos"}>
        <h3>A Propos</h3>
      </NavLink>
      <NavLink to={"/contact"}>
        <h3 className="">Contact</h3>
      </NavLink>
      <NavLink to={"/cart"}>
        <div className="flex relative  ">
          <img src={CartPhoto} alt="" />

          <h4 className="relative bottom-4 mb-0">1</h4>
        </div>
      </NavLink>
    </div>
  );
}

export default Menu;
