"use client";

import { useState } from "react";

import Link from "next/link";

import {
  sendPasswordResetEmail
} from "firebase/auth";

import { auth } from "../../lib/firebase";

export default function ResetPasswordPage() {

  const [email, setEmail] = useState("");

  const handleReset = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      await sendPasswordResetEmail(
        auth,
        email
      );

      alert("Password reset email sent!");

    } catch (error: any) {

      alert(error.message);

    }
  };

  return (
    <div className="min-h-screen bg-[#0A2C6D] flex items-center justify-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[400px]">

        <h1 className="text-3xl font-bold text-center text-[#082456] mb-8">
          Reset Password
        </h1>

        <form onSubmit={handleReset}>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-400 rounded-2xl px-4 py-4 mb-5 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#082456] font-bold py-4 rounded-2xl transition"
          >
            Send Reset Email
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