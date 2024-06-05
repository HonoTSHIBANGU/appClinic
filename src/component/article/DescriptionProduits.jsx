import React from "react";
import { useParams } from "react-router-dom";
import produits from "../../data/produits.json";
import { useNavigate, Link } from "react-router-dom";

function DescriptionProduits() {
  const { NomProduit } = useParams();
  const oneProduct = produits.find((p) => p.NomProduit === NomProduit);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Logique pour ajouter le produit au panier
    console.log("Produit ajouté au panier");
  };

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
            <p className="text-gray-600 text-lg md:text-xl">
              {oneProduct?.PrixProduit}
            </p>
            <p className="text-gray-600 text-lg md:text-xl">
              {oneProduct?.Description}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              className="bg-yellow-400 rounded-full p-2 text-md font-semibold"
              onClick={handleAddToCart}
            >
              Ajouter au panier
            </button>
            <Link to="/login">
              <button className="bg-yellow-400 rounded-full p-2 text-md font-semibold">
                Commander
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionProduits;
