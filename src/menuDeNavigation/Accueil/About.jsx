import React from "react";
import Scaneur from "../../assets/image/scaneur.jpg";
import examen from "../../assets/image/examen.jpg";

function About() {
  return (
    <div>
      <img
        className="h-80 w-[95%] mx-10 my-1 object-cover "
        src={Scaneur}
        alt=""
      />
      <p className="my-2 text-xl flex items-center justify-center ">
        Bienvenue chez &nbsp;
        <span className="text-blue-500">App</span>
        <span className="text-red-600"> Cli</span>
        <span className="text-yellow-400">nic</span> &nbsp; où nous vous offrons
        une expérience d'achat unique et des produits de qualité.
      </p>
      <img className="h-80 w-[40%]  mx-10  object-cover" src={examen} alt="" />
      <p className="my-2 mx-16 text-xl">
        Des equipements qui vous fourniront des resultats d'examens d'imagerie
        <br />
        médicale de la plus haute qualité pour vos patients.
      </p>
    </div>
  );
}

export default About;
