import React from "react";
import equipementList from "../../data/equipements.json";
import { Link } from "react-router-dom";
function Equipements() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
      {equipementList.map((item) => (
        <div key={item.id} className=" p-4 ">
          <div className="bg-gray-200 rounded-lg ">
            <button>
              <Link to={`/${item.id}`}>
                <img
                  className=" w-60 h-34 rounded-md object-cover"
                  src={item.Image}
                  alt=""
                />
              </Link>
            </button>

            <button>
              <img
                className="relative left-4 w-10 h-10 object-cover"
                src={item.AddButton}
                alt=""
              />
            </button>
          </div>
          <div className=" flex justify-between">
            <p className="text-gray-600 ">{item.NomProduit}</p>
            <p className="text-lg font-semibold">{item.PrixProduit}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Equipements;
