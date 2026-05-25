"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import {
  onAuthStateChanged,
} from "firebase/auth";

import { db, auth } from "../../lib/firebase";

export default function AdminDashboard() {

  const [predictions, setPredictions] = useState<any[]>([]);

  const [totalUsers, setTotalUsers] = useState(0);

  const [topPlayer, setTopPlayer] = useState("");

  const [topPoints, setTopPoints] = useState(0);

  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      async (currentUser) => {

        // NOT LOGGED
        if (!currentUser) {

          alert("Veuillez vous connecter");

          window.location.href = "/login";

          return;
        }

        // ADMINS
        const admins = [

          "lkgroupsainfo@gmail.com",
          "stleduc2@gmail.com",

        ];

        // NOT ADMIN
        if (
          !admins.includes(
            currentUser.email || ""
          )
        ) {

          alert("ACCESS DENIED");

          window.location.href = "/";

          return;
        }

        // AUTHORIZED
        setAuthorized(true);

        try {

          const querySnapshot = await getDocs(
            collection(db, "predictions")
          );

          const data: any[] = [];

          querySnapshot.forEach((doc) => {

            data.push(doc.data());

          });

          setPredictions(data);

          // UNIQUE USERS
          const uniqueUsers = [
            ...new Set(
              data.map((item) => item.email)
            ),
          ];

          setTotalUsers(uniqueUsers.length);

          // GLOBAL RANKING
          const totals: any = {};

          data.forEach((item) => {

            if (!totals[item.email]) {

              totals[item.email] = 0;

            }

            totals[item.email] +=
              item.points || 0;

          });

          // TOP PLAYER
          let bestPlayer = "";

          let bestPoints = 0;

          Object.entries(totals).forEach(
            ([email, points]: any) => {

              if (points > bestPoints) {

                bestPlayer = email;

                bestPoints = points;

              }

            }
          );

          setTopPlayer(bestPlayer);

          setTopPoints(bestPoints);

        } catch (error) {

          console.log(error);

        }

      }
    );

    return () => unsubscribe();

  }, []);

  // BLOCK PAGE
  if (!authorized) {

    return null;

  }

  return (

    <div className="min-h-screen bg-[#0A2C6D] text-white p-8">

      {/* BACK BUTTON */}
      <div className="mb-8">

        <a
          href="/"
          className="inline-block bg-white text-[#0A2C6D] font-black px-6 py-3 rounded-2xl shadow-xl hover:scale-105 transition"
        >
          ← Retour à l'accueil
        </a>

      </div>

      {/* HEADER */}
      <div className="flex items-center gap-5 mb-10">

        <Image
          src="/belmart-logo.jpeg"
          alt="Belmart"
          width={80}
          height={80}
          className="rounded-2xl shadow-xl"
        />

        <h1 className="text-5xl font-bold text-[#FFD400]">
          Admin Dashboard 🛠️
        </h1>

      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white text-[#0A2C6D] p-6 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-bold mb-2">
            Total Users
          </h2>

          <p className="text-5xl font-black">
            {totalUsers}
          </p>

        </div>

        <div className="bg-white text-[#0A2C6D] p-6 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-bold mb-2">
            Predictions
          </h2>

          <p className="text-5xl font-black">
            {predictions.length}
          </p>

        </div>

        <div className="bg-white text-[#0A2C6D] p-6 rounded-3xl shadow-xl">

          <h2 className="text-2xl font-bold mb-2">
            Top Player 🏆
          </h2>

          <p className="text-xl font-bold break-all">
            {topPlayer}
          </p>

          <p className="text-4xl font-black mt-2">
            {topPoints} pts
          </p>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

        <table className="w-full text-[#0A2C6D]">

          <thead className="bg-[#FFD400]">

            <tr>

              <th className="p-4 text-left">
                User
              </th>

              <th className="p-4 text-left">
                Match
              </th>

              <th className="p-4 text-left">
                Prediction
              </th>

              <th className="p-4 text-left">
                Points
              </th>

            </tr>

          </thead>

          <tbody>

            {predictions.map((item, index) => (

              <tr
                key={index}
                className="border-b hover:bg-gray-100 transition"
              >

                <td className="p-4 font-bold">
                  {item.email}
                </td>

                <td className="p-4">
                  {item.team1} vs {item.team2}
                </td>

                <td className="p-4">
                  {item.homeScore} - {item.awayScore}
                </td>

                <td className="p-4 font-black">
                  {item.points}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}