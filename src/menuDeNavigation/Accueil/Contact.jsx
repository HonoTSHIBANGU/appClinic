import React from "react";
import Phone from "../../assets/image/phone.svg";
import Map from "../../assets/image/map.svg";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="flex gap-40 justify-center  p-20">
      <div className="flex flex-col gap-10 items-center ">
        <div className="flex flex-col gap-4 ">
          <h1 className="font-sm text-5xl relative">Nous contacter </h1>
          <p>
            Avez-vous une question ou un <br /> commentaire ?
          </p>
          <p className="font-normal">
            Remplissez le formulaire et nous vous <br /> contacterons.
          </p>
        </div>
        <div className="flex flex-col gap-2 relative right-20">
          <div className="flex gap-4">
            <img className="w-4 h-4 " src={Phone} alt="" />
            <p>0000000000</p>
          </div>

          <div className="flex gap-2">
            <img className="w-4 h-4 " src={Map} alt="" />
            <p>10b, espoir, Kin, RDC.</p>
          </div>
        </div>
      </div>
      <div className="relative top-10 w-80">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
