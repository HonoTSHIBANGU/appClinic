import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/login", data); // Réponse du backend (par exemple, jeton JWT)
      // Redirection vers une page privée ou autre action après connexion réussie
    } catch (error) {
      setError("username", {
        type: "manual",
        message: "Identifiants incorrects. Veuillez réessayer.",
      });
      setError("password", {
        type: "manual",
        message: "Identifiants incorrects. Veuillez réessayer.",
      });
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2>Connexion</h2>
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username.message}</p>
        )}
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>

      <input
        type="text"
        placeholder="Nom d'utilisateur"
        {...register("username", {
          required: "Le nom d'utilisateur est requis",
        })}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        {...register("password", { required: "Le mot de passe est requis" })}
      />
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default LoginPage;
