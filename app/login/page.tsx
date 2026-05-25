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

  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

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
            href="/"
            className="text-[#082456] font-semibold hover:underline"
          >
            ← Retour à l'accueil
          </Link>

        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#082456] mb-8">
          Belmart Login
        </h1>

        {/* Form */}
        <form onSubmit={handleLogin}>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-400 rounded-2xl px-4 py-4 mb-5 outline-none focus:border-[#082456]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-400 rounded-2xl px-4 py-4 mb-3 outline-none focus:border-[#082456]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Forgot Password */}
          <div className="text-right mb-5">

            <Link
              href="/reset-password"
              className="text-sm text-[#082456] hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full font-bold py-4 rounded-2xl transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-yellow-500 text-[#082456]"
            }`}
          >

            {loading ? "Loading..." : "Login"}

          </button>

        </form>

        {/* Signup */}
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