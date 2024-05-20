import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Produits() {
  // État pour stocker les données des produits
  const [produits, setProduits] = useState([]);

  // Effect secondaire pour récupérer les données des produits au montage du composant
  useEffect(() => {
    const recupererProduits = async () => {
      try {
        // Requête GET vers votre endpoint Express pour récupérer les produits
        const reponse = await axios.get("http://localhost:5000/produits");

        // Mettre à jour l'état `produits` avec les données récupérées
        setProduits(reponse.data);
      } catch (error) {
        console.error(error);
        // Gérer les erreurs de manière appropriée (ex : message d'erreur à l'utilisateur)
      }
    };

    recupererProduits();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {/* Parcourir les produits récupérés et afficher les informations */}
      {produits.map((produit) => (
        <div key={produit.id} className=" ">
          <div className="bg-gray-200 rounded-lg">
            <button>
              <Link to={`/${produit.NomProduit}`}>
                <img
                  className="w-60 h-34 rounded-md object-cover"
                  src={produit.Image}
                  alt=""
                />
              </Link>
            </button>
            <button>
              <img
                className="relative left-4 w-10 h-10 object-cover"
                src={produit.AddButton}
                alt=""
              />
            </button>
          </div>
          <div className="flex justify-between ">
            <p className="text-gray-600">{produit.NomProduit}</p>
            <p className="text-lg font-semibold">{produit.PrixProduit}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Produits;
