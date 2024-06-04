import React from "react";
import imageAccueil from "../assets/image/imageAccueil.jpg";
import motif from "../assets/image/motif.jpg";
import { Link, Outlet } from "react-router-dom";
import RechercheArticles from "./RechercheArticles";

function Hero() {
  return (
    <section className="flex flex-col gap-20">
      <section>
        <div className="flex flex-col md:flex-row w-full h-[80vh] p-1">
          <div className="flex-1 flex flex-col gap-6 md:gap-12 items-center justify-center relative top-8">
            <h1 className="text-3xl md:text-5xl font-medium">
              Votre chemin vers la <br />
              clarté commence ici
            </h1>
            <p className="font-normal text-center md:text-left">
              Votre bien-être au cœur de nos préoccupations. Découvrez <br />
              une gamme complète d'équipements, et des produits de <br />
              pointe pour des diagnostics précis.
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-24">
              <div className="bg-red-500 w-46 mx-auto rounded-xl shadow-lg text-white p-4 md:p-6">
                <p className="text-center">24h/24 disponible</p>
              </div>
              <div className="bg-gray-500 w-46 max-w-md mx-auto rounded-xl shadow-lg text-white p-4">
                <p className="text-center">100 % client satisfait</p>
              </div>
            </div>
            <div className="flex gap-4 relative right-0 md:right-16">
              <Link to="/login">
                <button className="bg-blue-500 w-40 rounded-full text-black p-2">
                  Commander
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-yellow-400 w-40 rounded-full text-white p-2">
                  Nous contacter
                </button>
              </Link>
            </div>
          </div>
          <img
            className="flex-1 object-cover h-[50vh] md:h-[90vh] relative left-0 md:left-6 bottom-2"
            src={imageAccueil}
            alt="Accueil"
          />
        </div>
      </section>
      <section className="flex p-4 md:p-6">
        <div className="flex flex-col gap-6 p-4 md:p-6 w-full">
          <div className="flex flex-col md:flex-row gap-4 md:gap-72">
            <div className="flex gap-4 md:gap-16 bg-gray-200 rounded-md p-2">
              <Link to="">
                <button className="bg-white border border-2 border-blue-500 p-2 w-40 md:w-60 rounded-md">
                  Produits
                </button>
              </Link>
              <Link to="equipement">
                <button className="bg-white p-2 border border-2 border-blue-500 w-40 md:w-60 rounded-md">
                  Equipements
                </button>
              </Link>
            </div>
            <RechercheArticles />
          </div>
          <Outlet />
        </div>
      </section>
    </section>
  );
}

export default Hero;
