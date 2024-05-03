import React from "react";
import imageAccueil from "../assets/image/imageAccueil.jpg";

function Hero() {
  return (
    <div className="flex w-full h-[80vh] p-6">
      <div className="flex-1 flex flex-col gap-6 items-center justify-center">
        <h1 className="font-bold text-5xl pl-0">
          Votre chemin vers la <br /> clarté commence ici
        </h1>
        <p className="font-normal text-2xl pl-24 ">
          votre bien-être au cœur de nos préoccupations.
          <br />
          Découvrez une gamme complète d’équipements,
          <br /> et des produits de pointe pour des diagnostics précis.
        </p>
        <div className="flex gap-60">
          <button>Découvrir</button>
          <button>Nous contacter</button>
        </div>
      </div>
      <img className="flex-1 object-cover" src={imageAccueil} alt="" />
    </div>
  );
}

export default Hero;
