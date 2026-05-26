"use client";

import { useState } from "react";

import Link from "next/link";

import {
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "../../lib/firebase";

export default function ResetPasswordPage() {

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleReset = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      await sendPasswordResetEmail(
        auth,
        email
      );

      alert(
        "Lien de réinitialisation envoyé !"
      );

    } catch (error: any) {

      alert(error.message);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-[#0A2C6D] flex items-center justify-center px-5">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-[420px]">

        {/* Back Home */}
        <div className="mb-5">

          <Link
            href="/login"
            className="text-[#082456] font-semibold hover:underline"
          >
            ← Retour connexion
          </Link>

        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#082456] mb-8">

          Réinitialiser
          <br />
          le mot de passe

        </h1>

        {/* Form */}
        <form onSubmit={handleReset}>

          <input
            type="email"
            placeholder="Votre email"
            className="w-full border border-gray-400 rounded-2xl px-4 py-4 mb-5 outline-none"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full font-bold py-4 rounded-2xl transition ${
              loading
                ? "bg-gray-400"
                : "bg-yellow-400 hover:bg-yellow-500 text-[#082456]"
            }`}
          >

            {loading
              ? "Chargement..."
              : "Envoyer"}

          </button>

        </form>

      </div>

    </div>

  );

}