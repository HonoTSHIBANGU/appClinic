import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Equipements() {
  const [equipements, setEquipements] = useState([]);

  useEffect(() => {
    const fetchEquipements = async () => {
      try {
        const response = await axios.get("http://localhost:5000/equipements");
        setEquipements(response.data);
      } catch (error) {
        console.error(error);
        // Handle errors appropriately, e.g., display an error message to the user
      }
    };

    fetchEquipements();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
      {equipements.map((item) => (
        <div key={item.id} className="p-4">
          <div className="bg-gray-200 rounded-lg">
            <Link to={`/${item.id}`}>
              <img
                className="w-full h-auto rounded-md object-cover"
                src={item.Image}
                alt=""
              />
            </Link>
            <img
              className="relative left-4 w-10 h-10 object-cover"
              src={item.AddButton}
              alt=""
            />
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">{item.NomProduit}</p>
            <p className="text-lg font-semibold">{item.PrixProduit}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Equipements;
