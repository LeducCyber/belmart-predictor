"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import { getWorldCupMatches } from "../../lib/api";

export default function MatchesPage() {

  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {

    const fetchMatches = async () => {

      const data = await getWorldCupMatches();

      setMatches(data || []);

    };

    fetchMatches();

  }, []);

  return (

    <div className="min-h-screen bg-[#F4F4F4]">

      {/* HEADER */}
      <div className="bg-[#0A2C6D] text-white p-5 shadow-xl">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            <Image
              src="/belmart-logo.jpeg"
              alt="Belmart"
              width={70}
              height={70}
              className="rounded-2xl shadow-lg"
            />

            <div>

              <h1 className="text-2xl md:text-4xl font-black">
                Résultats et calendrier
              </h1>

              <p className="text-gray-300 mt-1 text-sm md:text-base">
                Coupe du Monde FIFA 2026
              </p>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-3">

            <a
              href="/groups"
              className="bg-[#FFD400] text-[#0A2C6D] px-4 py-2 rounded-2xl font-black hover:scale-105 transition text-sm md:text-base"
            >
              Voir les groupes
            </a>

            <a
              href="/"
              className="bg-white text-[#0A2C6D] px-4 py-2 rounded-2xl font-bold hover:scale-105 transition text-sm md:text-base"
            >
              ← Accueil
            </a>

          </div>

        </div>

      </div>

      {/* MATCHES */}
      <div className="max-w-6xl mx-auto px-4 py-8">

        <div className="space-y-5">

          {matches.map((match: any, index: number) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-5 hover:scale-[1.01] transition"
            >

              {/* DATE */}
              <div className="text-center mb-4">

                <h2 className="text-lg md:text-2xl font-black text-[#0A2C6D] capitalize">

                  {new Date(
                    match.utcDate
                  ).toLocaleDateString("fr-FR", {

                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",

                  })}

                </h2>

              </div>

              {/* MATCH */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-5">

                {/* TEAM 1 */}
                <div className="flex items-center gap-2 text-xl md:text-2xl font-black text-[#0A2C6D] text-center">

                  <span>
                    {match.homeTeam?.name}
                  </span>

                </div>

                {/* TIME */}
                <div className="text-3xl md:text-5xl font-black text-[#0A2C6D]">

                  {new Date(
                    match.utcDate
                  ).toLocaleTimeString([], {

                    hour: "2-digit",
                    minute: "2-digit",

                  })}

                </div>

                {/* TEAM 2 */}
                <div className="flex items-center gap-2 text-xl md:text-2xl font-black text-[#0A2C6D] text-center">

                  <span>
                    {match.awayTeam?.name}
                  </span>

                </div>

              </div>

              {/* DETAILS */}
              <div className="text-center text-gray-500 mt-4 text-sm md:text-lg">

                {match.stage || "Phase de groupes"}
                {" • "}
                {match.group || "World Cup 2026"}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* FOOTER */}
      <footer className="bg-[#0A2C6D] text-center text-white py-5 mt-10">

        <p className="text-sm md:text-lg">
          © 2026 Coupe du Monde FIFA - Belmart Pronostics
        </p>

      </footer>

    </div>

  );

}