"use client";

import { useState } from "react";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../lib/firebase";

export default function SignupPage() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Compte créé avec succès 🔥");

      window.location.href = "/";

    } catch (error: any) {

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen bg-[#0A2C6D] flex items-center justify-center">

      <div className="bg-white p-10 rounded-3xl w-[400px] shadow-2xl">

        <h1 className="text-4xl font-black text-[#082456] mb-8 text-center">
          S'inscrire
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-4 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-4 rounded-xl mb-6"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-[#FFD400] text-[#082456] py-4 rounded-xl font-black text-xl"
        >
          Créer un compte
        </button>

      </div>

    </div>

  );

}