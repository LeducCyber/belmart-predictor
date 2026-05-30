"use client";

import { useState } from "react";

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

import { useRouter } from "next/navigation";

export default function SignupPage() {

  const router = useRouter();

  const [fullName, setFullName] =
    useState("");
    const [username, setUsername] = useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [isClient, setIsClient] =
    useState(false);

  const [cardNumber, setCardNumber] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSignup = async () => {

    try {

      setLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

  await setDoc(
  doc(
    db,
    "users",
    userCredential.user.uid
  ),
  {
    username,
    fullName,
    phone,
    email,
    isClient,
    cardNumber:
      isClient
        ? cardNumber
        : "",
    createdAt:
      new Date(),
  }
);
      alert(
        `Bienvenue ${fullName} 🎉`
      );

      router.push("/");

    } catch (error) {

      console.log(error);

      alert(
        "Erreur lors de la création du compte"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-[#082567] flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl p-10 w-full max-w-xl shadow-2xl">

        <h1 className="text-5xl font-black text-[#082567] text-center">
          Créer un compte
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Belmart Pronostics FIFA 2026
        </p>

        <div className="mt-8">

          <label className="font-bold text-[#082567]">
            Nom complet
          </label>

          <input
            type="text"
            value={fullName}
            onChange={(e) =>
              setFullName(
                e.target.value
              )
            }
            placeholder="Votre nom complet"
            className="w-full border-2 border-gray-200 rounded-2xl p-4 mt-2 outline-none"
          />
          <input
  value={username}
  onChange={(e) =>
    setUsername(e.target.value)
  }
  placeholder="Nom d'utilisateur"
  className="w-full border-2 border-gray-200 rounded-2xl p-4 mt-2 outline-none"
/>

        </div>

        <div className="mt-6">

          <label className="font-bold text-[#082567]">
            Téléphone
          </label>

          <input
            type="text"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value
              )
            }
            placeholder="+509XXXXXXXX"
            className="w-full border-2 border-gray-200 rounded-2xl p-4 mt-2 outline-none"
          />

        </div>

        <div className="mt-6">

          <label className="font-bold text-[#082567]">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            placeholder="Votre email"
            className="w-full border-2 border-gray-200 rounded-2xl p-4 mt-2 outline-none"
          />

        </div>

        <div className="mt-6">

          <label className="font-bold text-[#082567]">
            Mot de passe
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            placeholder="Votre mot de passe"
            className="w-full border-2 border-gray-200 rounded-2xl p-4 mt-2 outline-none"
          />

        </div>

        <div className="mt-6">

          <label className="flex items-center gap-3 font-bold text-[#082567]">

            <input
              type="checkbox"
              checked={isClient}
              onChange={(e) =>
                setIsClient(
                  e.target.checked
                )
              }
              className="w-5 h-5"
            />

            Client Belmart ?

          </label>

        </div>

        {isClient && (

          <div className="mt-6">

            <label className="font-bold text-[#082567]">
              Numéro de carte fidélité
            </label>

            <input
              type="text"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(
                  e.target.value
                )
              }
              placeholder="Votre numéro de carte"
              className="w-full border-2 border-gray-200 rounded-2xl p-4 mt-2 outline-none"
            />

          </div>

        )}

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full bg-[#082567] text-white py-4 rounded-2xl mt-8 font-black text-xl hover:bg-blue-900 transition"
        >
          {loading
            ? "Création..."
            : "Créer un compte"}
        </button>

        <a
          href="/login"
          className="block text-center mt-6 text-[#082567] font-black text-lg"
        >
          Déjà un compte ? Connexion
        </a>

        <a
          href="/"
          className="block text-center mt-6 text-[#082567] font-bold"
        >
          ← Retour à l'accueil
        </a>

      </div>

    </div>

  );
}