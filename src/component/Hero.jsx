import React from "react";
import imageAccueil from "../assets/image/imageAccueil.jpg";
import motif from "../assets/image/motif.jpg";
import { Link, Outlet } from "react-router-dom";
import search from "../assets/image/search.svg";

function Hero() {
  return (
    <section className="flex  flex-col gap-20 ">
      <section className="">
        <div className="flex w-full h-[80vh] p-1">
          <div className="flex-1 flex flex-col gap-12 items-center justify-center relative top-8">
            <h1 className="font-sm text-5xl  ">
              Votre chemin vers la <br />
              clarté commence ici
            </h1>
            <p className="font-normal">
              votre bien-être au cœur de nos préoccupations. Découvrez <br />
              une gamme complète d'équipements, et des produits de <br />
              pointe pour des diagnostics précis.
              <br />
            </p>
            <div className="flex justify-between gap-24 ">
              <div className="bg-red-500 w-46  mx-auto rounded-xl shadow-lg   text-white p-6 ">
                <p className="text-center ">24h/24 disponible </p>
              </div>
              <div className="bg-gray-500 w-46 max-w-md mx-auto rounded-xl shadow-lg   text-white p-4 ">
                <p className="text-center">100 % client satisfait</p>
              </div>
            </div>
            <div className=" flex gap-4 relative right-16 ">
              <button className="bg-blue-500 w-40 rounded-full text-black  p-2">
                Commander
              </button>
              <button className="bg-yellow-400 w-40 rounded-full text-white p-2">
                Nous contacter
              </button>
            </div>
          </div>
          <img
            className="flex-1 object-cover h-[90vh] relative left-6  botton-2 "
            src={imageAccueil}
            alt=""
          />
        </div>
      </section>
      <section className="flex  p-6">
        <div className=" flex flex-col gap-6 p-6 ">
          <div className="flex gap-72">
            <div className=" flex gap-16 bg-gray-200  rounded-md p-2 ">
              <Link to={""}>
                <button className="bg-white border border-2 border-blue-500 p-2 w-60 rounded-md">
                  Produits
                </button>
              </Link>
              <Link to={"equipement"}>
                <button className="bg-white p-2 border border-2 border-blue-500 w-60 rounded-md">
                  Equipements
                </button>
              </Link>
            </div>

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
          </div>
          <Outlet />
        </div>
      </section>
      {/* <section className="relative mt-60 top-60 ">
        <div className="font-normal text-xl ">
          <h1>
            <span className="text-blue-500">App</span>
            <span className="text-red-600"> Cli</span>
            <span className="text-yellow-400">nic</span>
          </h1>
        </div>
      </section> */}
    </section>
  );
}

export default Hero;
