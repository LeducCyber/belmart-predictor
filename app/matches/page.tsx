"use client";

import Image from "next/image";

export default function MatchesPage() {

  const matches = [

    {
      date: "Jeudi 11 Juin 2026",
      games: [

        {
          team1: "Mexique",
          flag1: "🇲🇽",
          time: "15:00",
          team2: "Afrique du Sud",
          flag2: "🇿🇦",
          group: "Groupe A",
          stadium: "Stade de Mexico",
        },

        {
          team1: "République de Corée",
          flag1: "🇰🇷",
          time: "22:00",
          team2: "Tchéquie",
          flag2: "🇨🇿",
          group: "Groupe A",
          stadium: "Stade de Guadalajara",
        },

      ],
    },

    {
      date: "Vendredi 12 Juin 2026",
      games: [

        {
          team1: "Canada",
          flag1: "🇨🇦",
          time: "15:00",
          team2: "Bosnie-Herzégovine",
          flag2: "🇧🇦",
          group: "Groupe B",
          stadium: "Stade de Toronto",
        },

        {
          team1: "Qatar",
          flag1: "🇶🇦",
          time: "19:00",
          team2: "Suisse",
          flag2: "🇨🇭",
          group: "Groupe B",
          stadium: "Stade de Vancouver",
        },

      ],
    },

    {
      date: "Samedi 13 Juin 2026",
      games: [

        {
          team1: "Brésil",
          flag1: "🇧🇷",
          time: "16:00",
          team2: "Maroc",
          flag2: "🇲🇦",
          group: "Groupe C",
          stadium: "Stade de Miami",
        },

        {
          team1: "Haïti",
          flag1: "🇭🇹",
          time: "21:00",
          team2: "Écosse",
          flag2: "🏴",
          group: "Groupe C",
          stadium: "Stade de Boston",
        },

      ],
    },

  ];

  return (

    <div className="min-h-screen bg-[#F4F4F4]">

      {/* HEADER */}
      <div className="bg-[#0A2C6D] text-white p-6 shadow-xl">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <div className="flex items-center gap-5">

            <Image
              src="/belmart-logo.jpeg"
              alt="Belmart"
              width={80}
              height={80}
              className="rounded-2xl"
            />

            <div>

              <h1 className="text-3xl md:text-5xl font-black">
                Résultats et calendrier
              </h1>

              <p className="text-gray-300 mt-2 text-lg">
                Coupe du Monde FIFA 2026
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <a
              href="/groups"
              className="bg-[#FFD400] text-[#0A2C6D] px-5 py-3 rounded-2xl font-black hover:scale-105 transition"
            >
              Voir les groupes
            </a>

            <a
              href="/"
              className="bg-white text-[#0A2C6D] px-5 py-3 rounded-2xl font-bold hover:scale-105 transition"
            >
              ← Accueil
            </a>

          </div>

        </div>

      </div>

      {/* MATCHES */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        {matches.map((day, index) => (

          <div
            key={index}
            className="mb-12"
          >

            {/* DATE */}
            <h2 className="text-4xl font-black text-[#0A2C6D] mb-6">

              {day.date}

            </h2>

            {/* GAMES */}
            <div className="space-y-5">

              {day.games.map((match, i) => (

                <div
                  key={i}
                  className="bg-white rounded-3xl shadow-lg p-8"
                >

                  <div className="flex flex-col md:flex-row items-center justify-center gap-8">

                    {/* TEAM 1 */}
                    <div className="flex items-center gap-3 text-2xl font-bold text-[#0A2C6D]">

                      <span className="text-4xl">
                        {match.flag1}
                      </span>

                      <span>
                        {match.team1}
                      </span>

                    </div>

                    {/* TIME */}
                    <div className="text-5xl font-black text-[#0A2C6D]">

                      {match.time}

                    </div>

                    {/* TEAM 2 */}
                    <div className="flex items-center gap-3 text-2xl font-bold text-[#0A2C6D]">

                      <span className="text-4xl">
                        {match.flag2}
                      </span>

                      <span>
                        {match.team2}
                      </span>

                    </div>

                  </div>

                  {/* DETAILS */}
                  <div className="text-center text-gray-500 mt-6 text-lg">

                    Phase de groupes
                    {" • "}
                    {match.group}
                    {" • "}
                    {match.stadium}

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}