import React from "react";
import { useParams } from "react-router-dom";
import equipement from "../../data/equipements.json";

function DescriptionEquipement() {
  const { id } = useParams();

  const oneProduct = equipement.find((p) => p.id == id);

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="flex-1">
        <img
          src={oneProduct?.Image}
          alt={oneProduct?.NomProduit}
          className="w-full object-cover h-64 md:h-auto"
        />
      </div>
      <div className="flex-1 mt-4 md:mt-0 md:ml-4">
        <div className="flex flex-col gap-4 p-4">
          <div>
            <p className="text-2xl md:text-5xl font-semibold">
              {oneProduct?.NomProduit}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-600 text-lg md:text-2xl">
              {oneProduct?.PrixProduit}
            </p>
            <p className="text-gray-600 text-lg md:text-xl">
              {oneProduct?.Description}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-yellow-400 rounded-full p-2 text-md md:text-lg font-semibold">
              Ajouter au panier
            </button>
            <button className="bg-yellow-400 rounded-full p-2 text-md md:text-lg font-semibold">
              Commander
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionEquipement;
