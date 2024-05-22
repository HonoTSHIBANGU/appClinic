import React from "react";
import search from "../assets/image/search.svg";

function RechercheArticles() {
  return (
    <div className="flex-1 flex relative   bg-gray-200  rounded-md p-2 ">
      <button className="p-2">
        <img src={search} alt="" />
      </button>
      <input
        className=" w-full  relative text-center bg-white rounded-md border border-2 border-blue-500 "
        type="search"
        name=""
        placeholder="Recherche..."
        id=""
      />
    </div>
  );
}

export default RechercheArticles;
