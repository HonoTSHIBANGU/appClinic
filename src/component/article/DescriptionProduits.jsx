import React from "react";
import { useParams } from "react-router-dom";
import produits from "../../data/produits.json";
import { useNavigate } from "react-router-dom";

function DescriptionProduits() {
  const { NomProduit } = useParams();
  const oneProduct = produits.find((p) => p.NomProduit === NomProduit);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Logique pour ajouter le produit au panier
    console.log("Produit ajouté au panier");
  };

  const handleOrder = () => {
    // Logique pour commander le produit (ou naviguer vers la page de connexion)
    // Naviguer vers la page de connexion (LoginPage) lorsque le bouton "Commander" est cliqué
    navigate("/loginpage");
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <img src={oneProduct?.Image} alt="" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-4 p-8">
          <div>
            <p className="text-5xl font-semibold">{oneProduct?.NomProduit}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-gray-600 text-xl">{oneProduct?.PrixProduit}</p>
            <p className="text-gray-600 text-xl">{oneProduct?.Description}</p>
          </div>
          <div className="flex gap-8">
            <button
              className="bg-yellow-400 rounded-full p-2 text-md font-semibold"
              onClick={handleAddToCart}
            >
              Ajouter au panier
            </button>
            <button
              className="bg-yellow-400 rounded-full p-2 text-md font-semibold"
              onClick={handleOrder}
            >
              Commander
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionProduits;
