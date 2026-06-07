"use client";

import { useState } from "react";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../../lib/firebase";

import { useRouter } from "next/navigation";

export default function SignupPage() {

  const router = useRouter();

const [firstName, setFirstName] =
  useState("");

const [lastName, setLastName] =
  useState("");
    const [username, setUsername] = useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");
    const [confirmPassword, setConfirmPassword] =
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

     const usernameQuery = query(
  collection(db, "users"),
  where(
    "username",
    "==",
    username.trim()
  )
);

const usernameSnapshot =
  await getDocs(usernameQuery);

if (!usernameSnapshot.empty) {
  alert(
    "Ce nom d'utilisateur existe déjà"
  );
  return;
}
     
 if (!username.trim()) {
  alert("Le nom d'utilisateur est obligatoire");
  return;
}

if (password !== confirmPassword) {
  alert("Les mots de passe ne correspondent pas");
  return;
}

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
  firstName,
lastName,
fullName: `${firstName} ${lastName}`,
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
  `Bienvenue ${firstName} ${lastName} 🎉`
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

<div
  className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center p-6"
  style={{
   backgroundImage: "url('/mondial.png')"
    
  }}
>

<div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 w-full max-w-xl shadow-2xl">

        <h1 className="text-5xl font-black text-[#082567] text-center">
          Créer un compte
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Belmart Pronostic Mondial 2026
        </p>

        <div className="mt-8">

          <div className="grid grid-cols-2 gap-4">

  <div>
    <label className="font-bold text-[#082567]">
      Prénom
    </label>

    <input
      type="text"
      value={firstName}
      onChange={(e) =>
        setFirstName(e.target.value)
      }
      placeholder="Prénom"
      className="w-full bg-gray-100 border-2 border-[#082567] rounded-2xl px-4 py-4 mt-2 text-[#082567] font-medium placeholder-gray-500 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all duration-300"
    />
  </div>

  <div>
    <label className="font-bold text-[#082567]">
      Nom
    </label>

    <input
      type="text"
      value={lastName}
      onChange={(e) =>
        setLastName(e.target.value)
      }
      placeholder="Nom"
     className="w-full bg-gray-100 border-2 border-[#082567] rounded-2xl px-4 py-4 mt-2 text-[#082567] font-medium placeholder-gray-500 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all duration-300"
    />
  </div>

</div>
          <label className="font-bold text-[#082567]">
  Nom d'utilisateur
</label>

<input
  type="text"
  value={username}
  onChange={(e) =>
    setUsername(e.target.value)
  }
  placeholder="Nom d'utilisateur"
 className="w-full bg-gray-100 border-2 border-[#082567] rounded-2xl px-4 py-4 mt-2 text-[#082567] font-medium placeholder-gray-500 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all duration-300"
/>
        </div>

        <div className="mt-6">

         

        <input
  type="text"
  value={phone}
  onChange={(e) =>
    setPhone(
      e.target.value
    )
  }
  placeholder="+509XXXXXXXX"
className="w-full bg-gray-100 border-2 border-[#082567] rounded-2xl px-4 py-4 mt-2 text-[#082567] font-medium placeholder-gray-500 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all duration-300"
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
      setEmail(e.target.value)
    }
    placeholder="Votre email"
    className="w-full bg-gray-100 border-2 border-[#082567] rounded-2xl px-4 py-4 mt-2 text-[#082567] font-medium placeholder-gray-500 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all duration-300"
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
className="w-full bg-gray-100 border-2 border-[#082567] rounded-2xl px-4 py-4 mt-2 text-[#082567] font-medium placeholder-gray-500 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all duration-300"
  />

</div>

<div className="mt-6">

  <label className="font-bold text-[#082567]">
    Confirmer le mot de passe
  </label>

  <input
    type="password"
    value={confirmPassword}
    onChange={(e) =>
      setConfirmPassword(
        e.target.value
      )
    }
    placeholder="Confirmer votre mot de passe"
    className="w-full bg-gray-100 border-2 border-[#082567] rounded-2xl px-4 py-4 mt-2 text-[#082567] font-medium placeholder-gray-500 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all duration-300"
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
              Numéro de carte Cashback
            </label>

            <input
              type="text"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(
                  e.target.value
                )
              }
             placeholder="Numéro de carte Cashback"
            className="w-full bg-gray-100 border-2 border-[#082567] rounded-2xl px-4 py-4 mt-2 text-[#082567] font-medium placeholder-gray-500 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all duration-300"
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

      </div>
    </div>
  );
}