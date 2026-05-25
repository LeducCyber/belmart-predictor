"use client";

import { useState } from "react";

import Link from "next/link";

import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../../lib/firebase";

export default function LoginPage() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login successful!");

      window.location.href = "/dashboard";

    } catch (error: any) {

      alert(error.message);

    }
  };

  return (
    <div className="min-h-screen bg-[#0A2C6D] flex items-center justify-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[400px]">

        <h1 className="text-4xl font-bold text-center text-[#082456] mb-8">
          Belmart Login
        </h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-400 rounded-2xl px-4 py-4 mb-5 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-400 rounded-2xl px-4 py-4 mb-3 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="text-right mb-5">
            <Link
              href="/reset-password"
              className="text-sm text-[#082456] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#082456] font-bold py-4 rounded-2xl transition"
          >
            Login
          </button>

        </form>

        <div className="text-center mt-6">

          <span className="text-gray-600">
            Don’t have an account?
          </span>

          <Link
            href="/signup"
            className="ml-2 text-[#082456] font-semibold hover:underline"
          >
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
}