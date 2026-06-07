"use client";

import { useState } from "react";

import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "../../lib/firebase";

import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    try {

      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Bienvenue 🎉");

      router.push("/");

    } catch (error) {

      console.log(error);

      setError(
        "Email ou mot de passe incorrect"
      );

    } finally {

      setLoading(false);

    }

  };

  const resetPassword = async () => {

    if (!email) {
      alert("Entrez votre email");
      return;
    }

    try {

      await sendPasswordResetEmail(
        auth,
        email
      );

      alert(
        "Email de réinitialisation envoyé ✅"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Impossible d'envoyer l'email"
      );

    }

  };

  return (

    <div
  className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center p-6"
  style={{
   backgroundImage: "url('/mondial.png')"
  }}
>

      <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 w-full max-w-md shadow-2xl border border-gray-200">

   <h1 className="text-5xl font-black text-[#082567] text-center drop-shadow-sm">
          Connexion
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Belmart Pronostics Mondial 2026
        </p>

        <div className="mt-8">

          <label className="font-bold text-[#082567]">
            Email
          </label>

          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border-2 border-[#082567] bg-slate-200 rounded-2xl p-4 mt-2 outline-none text-[#082567] placeholder-gray-600"
          />

        </div>

        <div className="mt-6">

          <label className="font-bold text-[#082567]">
            Mot de passe
          </label>

          <input
            type="password"
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border-2 border-gray-200 rounded-2xl p-4 mt-2 outline-none"
          />

        </div>

        {error && (

          <div className="bg-red-100 text-red-600 p-4 rounded-2xl mt-6 text-center font-bold">
            {error}
          </div>

        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-[#082567] text-white py-4 rounded-2xl mt-8 font-black text-xl hover:bg-blue-900 transition"
        >
          {loading
            ? "Connexion..."
            : "Se connecter"}
        </button>

        <button
          onClick={resetPassword}
          className="block mx-auto mt-4 text-[#082567] font-bold hover:underline"
        >
          Mot de passe oublié ?
        </button>

        <a
          href="/signup"
          className="block text-center mt-6 text-[#082567] font-black text-lg"
        >
          Créer un compte
        </a>

      </div>

    </div>

  );
}