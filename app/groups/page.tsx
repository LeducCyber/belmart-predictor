"use client";

import Image from "next/image";

export default function GroupsPage() {

  const groups = [

    {
      name: "Groupe A",
      teams: [
        "🇲🇽 Mexique",
        "🇿🇦 Afrique du Sud",
        "🇰🇷 République de Corée",
        "🇨🇿 Tchéquie",
      ],
    },

    {
      name: "Groupe B",
      teams: [
        "🇨🇦 Canada",
        "🇧🇦 Bosnie-Herzégovine",
        "🇶🇦 Qatar",
        "🇨🇭 Suisse",
      ],
    },

    {
      name: "Groupe C",
      teams: [
        "🇧🇷 Brésil",
        "🇲🇦 Maroc",
        "🇭🇹 Haïti",
        "🏴 Écosse",
      ],
    },

  ];

  return (

    <div className="min-h-screen bg-[#F4F4F4]">

      {/* HEADER */}
      <div className="bg-[#0A2C6D] text-white p-6 shadow-xl">

        <div className="flex items-center justify-between">

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
                Classements
              </h1>

              <p className="text-gray-300 mt-2">
                Coupe du Monde FIFA 2026
              </p>

            </div>

          </div>

          <a
            href="/"
            className="bg-white text-[#0A2C6D] px-5 py-3 rounded-2xl font-bold"
          >
            ← Accueil
          </a>

        </div>

      </div>

      {/* GROUP TABLES */}
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">

        {groups.map((group, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >

            {/* GROUP HEADER */}
            <div className="bg-[#082456] text-white px-6 py-4">

              <h2 className="text-2xl font-black">

                {group.name}

              </h2>

            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">

              <table className="w-full text-[#082456]">

                <thead className="bg-gray-100">

                  <tr>

                    <th className="p-4 text-left">
                      #
                    </th>

                    <th className="p-4 text-left">
                      Équipe
                    </th>

                    <th className="p-4">
                      J
                    </th>

                    <th className="p-4">
                      G
                    </th>

                    <th className="p-4">
                      N
                    </th>

                    <th className="p-4">
                      P
                    </th>

                    <th className="p-4">
                      Bp
                    </th>

                    <th className="p-4">
                      Bc
                    </th>

                    <th className="p-4">
                      Dif.
                    </th>

                    <th className="p-4 font-black">
                      Pts
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {group.teams.map(
                    (team, i) => (

                      <tr
                        key={i}
                        className="border-b hover:bg-gray-50 transition"
                      >

                        <td className="p-4 font-bold">
                          {i + 1}
                        </td>

                        <td className="p-4 font-bold text-lg">
                          {team}
                        </td>

                        <td className="p-4 text-center">
                          0
                        </td>

                        <td className="p-4 text-center">
                          0
                        </td>

                        <td className="p-4 text-center">
                          0
                        </td>

                        <td className="p-4 text-center">
                          0
                        </td>

                        <td className="p-4 text-center">
                          0
                        </td>

                        <td className="p-4 text-center">
                          0
                        </td>

                        <td className="p-4 text-center">
                          0
                        </td>

                        <td className="p-4 text-center font-black">
                          0
                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}