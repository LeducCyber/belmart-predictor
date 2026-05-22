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

export default function SignupPage() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [gender, setGender] = useState("");

  const handleSignup = async () => {

    try {

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

          email,

          gender,

          createdAt:
            new Date(),

        }
      );

      alert(
        "Compte créé avec succès 🔥"
      );

      window.location.href = "/";

    } catch (error: any) {

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen bg-[#0A2C6D] flex items-center justify-center px-4">

      <div className="bg-white p-10 rounded-3xl w-full max-w-md shadow-2xl">

        <h1 className="text-4xl font-black text-[#082456] mb-8 text-center">

          S'inscrire

        </h1>

        {/* NAME */}
        <input
          type="text"
          placeholder="Nom complet"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="w-full border p-4 rounded-xl mb-4"
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border p-4 rounded-xl mb-4"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-4 rounded-xl mb-4"
        />

        {/* GENDER */}
        <select
          value={gender}
          onChange={(e) =>
            setGender(e.target.value)
          }
          className="w-full border p-4 rounded-xl mb-6"
        >

          <option value="">
            Sexe
          </option>

          <option value="Homme">
            Homme
          </option>

          <option value="Femme">
            Femme
          </option>

        </select>

        {/* BUTTON */}
        <button
          onClick={handleSignup}
          className="w-full bg-[#FFD400] text-[#082456] py-4 rounded-xl font-black text-xl hover:scale-105 transition"
        >

          Créer un compte

        </button>

      </div>

    </div>

  );

}