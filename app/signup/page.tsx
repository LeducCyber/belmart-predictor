"use client";

import { useState } from "react";

import Link from "next/link";

import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import {
  doc,
  setDoc
} from "firebase/firestore";

import {
  auth,
  db
} from "../../lib/firebase";

export default function SignupPage() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSignup = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        createdAt: new Date()
      });

      alert("Account created successfully!");

      window.location.href = "/login";

    } catch (error: any) {

      alert(error.message);

    }
  };

  return (
    <div className="min-h-screen bg-[#0A2C6D] flex items-center justify-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[400px]">

        <h1 className="text-3xl font-bold text-center text-[#082456] mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-400 rounded-2xl px-4 py-4 mb-4 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-400 rounded-2xl px-4 py-4 mb-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-400 rounded-2xl px-4 py-4 mb-5 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#082456] font-bold py-4 rounded-2xl transition"
          >
            Create Account
          </button>

        </form>

        <div className="text-center mt-5">

          <Link
            href="/login"
            className="text-[#082456] hover:underline"
          >
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}