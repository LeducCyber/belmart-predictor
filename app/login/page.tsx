"use client";

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../lib/firebase";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // CREATE ACCOUNT
  const handleSignup = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

     window.location.href = "/";

    } catch (error: any) {

      console.log(error);
      alert(error.message);
    }
  };

  // LOGIN
  const handleLogin = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      window.location.href = "/";

    } catch (error: any) {

      console.log(error);
      alert(error.message);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#0A2C6D]">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[400px]">

        <h1 className="text-3xl font-bold text-center text-[#0A2C6D] mb-8">
          Belmart Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-4 rounded-xl mb-4 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-4 rounded-xl mb-6 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-[#FFD400] text-[#0A2C6D] py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          Login
        </button>

        <button
          onClick={handleSignup}
          className="w-full bg-white border-2 border-[#0A2C6D] text-[#0A2C6D] py-4 rounded-xl font-bold mt-4 hover:scale-105 transition"
        >
          Create Account
        </button>

      </div>

    </div>
  );
}