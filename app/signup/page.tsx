"use client";

import { useState } from "react";

import Link from "next/link";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../../lib/firebase";

export default function SignupPage() {

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [isBelmartClient, setIsBelmartClient] =
    useState("");

  const [fidelityCard, setFidelityCard] =
    useState("");

  const handleSignup = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      // CREATE USER
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user =
        userCredential.user;

      // SAVE USER INFO
      await setDoc(
        doc(db, "users", user.uid),
        {

          name,

          phone,

          email,

          isBelmartClient,

          fidelityCard,

          createdAt: new Date(),

        }
      );

      alert(
        "Compte créé avec succès ✅"
      );

      window.location.href =
        "/dashboard";

    } catch (error: any) {

      alert(error.message);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-[#0A2C6D] flex items-center justify-center px-4 py-10">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">

        {/* BACK HOME */}
        <div className="mb-5">

          <Link
            href="/"
            className="text-[#082456] font-semibold hover:underline"
          >
            ← Retour à l'accueil
          </Link>

        </div>

        {/* TITLE */}
        <h1 className="text-4xl font-black text-center text-[#082456] mb-8">

          Créer un compte

        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSignup}
        >

          {/* NAME */}
          <input
            type="text"
            placeholder="Nom complet"
            className="w-full bg-[#F3F4F6] border-2 border-gray-400 rounded-2xl px-4 py-4 mb-5 text-[#082456] placeholder-gray-500 outline-none focus:border-yellow-400 focus:bg-white transition"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          {/* PHONE */}
          <input
            type="tel"
            placeholder="Numéro de téléphone"
            className="w-full bg-[#F3F4F6] border-2 border-gray-400 rounded-2xl px-4 py-4 mb-5 text-[#082456] placeholder-gray-500 outline-none focus:border-yellow-400 focus:bg-white transition"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            required
          />

          {/* BELMART CLIENT */}
          <div className="mb-5">

            <label className="block text-[#082456] font-bold mb-3">

              Êtes-vous un client Belmart ?

            </label>

            <select
              className="w-full bg-[#F3F4F6] border-2 border-gray-400 rounded-2xl px-4 py-4 text-[#082456] outline-none focus:border-yellow-400 transition"
              value={isBelmartClient}
              onChange={(e) =>
                setIsBelmartClient(
                  e.target.value
                )
              }
              required
            >

              <option value="">
                Sélectionner
              </option>

              <option value="Oui">
                Oui
              </option>

              <option value="Non">
                Non
              </option>

            </select>

          </div>

          {/* FIDELITY CARD */}
          {isBelmartClient === "Oui" && (

            <input
              type="text"
              placeholder="4 premiers chiffres de votre carte fidélité"
              className="w-full bg-[#F3F4F6] border-2 border-gray-400 rounded-2xl px-4 py-4 mb-5 text-[#082456] placeholder-gray-500 outline-none focus:border-yellow-400 focus:bg-white transition"
              value={fidelityCard}
              onChange={(e) =>
                setFidelityCard(
                  e.target.value
                )
              }
              maxLength={4}
              required
            />

          )}

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Adresse email"
            className="w-full bg-[#F3F4F6] border-2 border-gray-400 rounded-2xl px-4 py-4 mb-5 text-[#082456] placeholder-gray-500 outline-none focus:border-yellow-400 focus:bg-white transition"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full bg-[#F3F4F6] border-2 border-gray-400 rounded-2xl px-4 py-4 mb-6 text-[#082456] placeholder-gray-500 outline-none focus:border-yellow-400 focus:bg-white transition"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full font-black py-4 rounded-2xl transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#FFD400] hover:bg-yellow-400 text-[#082456]"
            }`}
          >

            {loading
              ? "Création..."
              : "S'inscrire"}

          </button>

        </form>

        {/* LOGIN */}
        <div className="text-center mt-6">

          <span className="text-gray-600">
            Vous avez déjà un compte ?
          </span>

          <Link
            href="/login"
            className="ml-2 text-[#082456] font-bold hover:underline"
          >

            Connexion

          </Link>

        </div>

      </div>

    </div>

  );

}