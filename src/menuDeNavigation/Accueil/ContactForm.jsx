import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (data) => {
    try {
      const response = await axios.post("/submit-form", data);
      console.log(response.data.message); // Affiche le message de réponse du serveur
      reset(); // Réinitialise le formulaire après la soumission
    } catch (error) {
      console.error("Une erreur s'est produite:", error);
    }
  };

  return (
    <form
      className="flex flex-col gap-10 my-14 "
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <input
        className="border border-2 border-blue-300 rounded-md  px-1 py-1 focus:outline-none focus:border-blue-blue-500"
        type="text"
        {...register("name", {
          required: true,
          minLength: 2,
          pattern: /^[A-Za-z\s]+$/,
        })}
        placeholder="Nom"
      />
      {errors.name && errors.name.type === "required" && (
        <span className="text-red-500">Le nom est requis</span>
      )}
      {errors.name && errors.name.type === "minLength" && (
        <span className="text-red-500">
          Le nom doit contenir au moins 2 caractères
        </span>
      )}
      {errors.name && errors.name.type === "pattern" && (
        <span className="text-red-500">
          Le nom doit contenir uniquement des lettres
        </span>
      )}

      <input
        className="border border-2 border-blue-300 rounded-md px-1  py-1 focus:outline-none focus:border-blue-blue-500"
        type="email"
        {...register("email", { required: true })}
        placeholder="Adresse e-mail"
      />
      {errors.email && (
        <span className="text-red-500">L'adresse e-mail est requise</span>
      )}

      <textarea
        className="border border-2 border-blue-300 rounded-md px-1 h-40 focus:outline-none focus:border-blue-blue-500 "
        {...register("message", { required: true })}
        placeholder="Message"
      ></textarea>
      {errors.message && (
        <span className="text-red-500">Le message est requis</span>
      )}

      <button className="bg-blue-300 p-1 rounded-md" type="submit">
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
