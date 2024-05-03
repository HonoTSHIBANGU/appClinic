import React from "react";
import { useParams } from "react-router-dom";
import equipement from "../../data/equipements.json";

function DescriptionEquipement() {
  const { id } = useParams();

  const oneProduct = equipement.find((p) => {
    return p.id == id;
  });

  return (
    <div className="flex ">
      <div className="flex-1">
        <img src={oneProduct?.Image} alt="" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-4 p-8">
          <div>
            <p className="text-5xl font-semibold ">{oneProduct.NomProduit}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-600  text-2xl">{oneProduct.PrixProduit} </p>
            <p className="text-gray-600 text-xl">{oneProduct.Description}</p>
          </div>
          <div className="flex gap-8">
            <button className=" bg-yellow-400 rounded-full p-2 text-lg font-semibold">
              Ajouter au panier
            </button>
            <button className=" bg-yellow-400 rounded-full  p-2 text-lg font-semibold">
              Commander
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionEquipement;
