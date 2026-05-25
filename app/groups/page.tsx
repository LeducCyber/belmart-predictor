import Image from "next/image";

export default function GroupsPage() {

  const groups = [

    {
      name: "GROUPE A",
      teams: [
        "🇲🇽 Mexique",
        "🇿🇦 Afrique du Sud",
        "🇰🇷 Corée du Sud",
        "🇨🇿 Tchéquie",
      ],
    },

    {
      name: "GROUPE B",
      teams: [
        "🇨🇦 Canada",
        "🇧🇦 Bosnie",
        "🇶🇦 Qatar",
        "🇨🇭 Suisse",
      ],
    },

    {
      name: "GROUPE C",
      teams: [
        "🇧🇷 Brésil",
        "🇲🇦 Maroc",
        "🇭🇹 Haïti",
        "🏴 Écosse",
      ],
    },

    {
      name: "GROUPE D",
      teams: [
        "🇺🇸 États-Unis",
        "🇵🇾 Paraguay",
        "🇦🇺 Australie",
        "🇹🇷 Turquie",
      ],
    },

    {
      name: "GROUPE E",
      teams: [
        "🇩🇪 Allemagne",
        "🇨🇼 Curaçao",
        "🇨🇮 Côte d’Ivoire",
        "🇪🇨 Équateur",
      ],
    },

    {
      name: "GROUPE F",
      teams: [
        "🇳🇱 Pays-Bas",
        "🇯🇵 Japon",
        "🇸🇪 Suède",
        "🇹🇳 Tunisie",
      ],
    },

    {
      name: "GROUPE G",
      teams: [
        "🇧🇪 Belgique",
        "🇪🇬 Égypte",
        "🇮🇷 Iran",
        "🇳🇿 Nouvelle-Zélande",
      ],
    },

    {
      name: "GROUPE H",
      teams: [
        "🇪🇸 Espagne",
        "🇨🇻 Cap Vert",
        "🇸🇦 Arabie Saoudite",
        "🇺🇾 Uruguay",
      ],
    },

    {
      name: "GROUPE I",
      teams: [
        "🇫🇷 France",
        "🇸🇳 Sénégal",
        "🇮🇶 Irak",
        "🇳🇴 Norvège",
      ],
    },

    {
      name: "GROUPE J",
      teams: [
        "🇦🇷 Argentine",
        "🇩🇿 Algérie",
        "🇦🇹 Autriche",
        "🇯🇴 Jordanie",
      ],
    },

    {
      name: "GROUPE K",
      teams: [
        "🇵🇹 Portugal",
        "🇨🇩 RD Congo",
        "🇺🇿 Ouzbékistan",
        "🇨🇴 Colombie",
      ],
    },

    {
      name: "GROUPE L",
      teams: [
        "🏴 Angleterre",
        "🇭🇷 Croatie",
        "🇬🇭 Ghana",
        "🇵🇦 Panama",
      ],
    },

  ];

  return (

    <div className="min-h-screen bg-gradient-to-b from-[#001B70] to-[#002C9B] text-white px-6 py-10">

      {/* BACK HOME BUTTON */}
      <div className="mb-8">

        <a
          href="/"
          className="inline-block bg-white text-[#001B70] font-black px-6 py-3 rounded-2xl shadow-xl hover:scale-105 transition"
        >
          ← Retour à l'accueil
        </a>

      </div>

      {/* HEADER */}
      <div className="flex flex-col items-center mb-14">

        <Image
          src="/belmart-logo.jpeg"
          alt="Belmart"
          width={120}
          height={120}
          className="rounded-3xl shadow-2xl mb-6"
        />

        <h1 className="text-3xl md:text-6xl font-black text-center uppercase leading-tight">

          Les Groupes de la Coupe du Monde

        </h1>

        <div className="bg-cyan-400 text-[#001B70] px-6 py-2 rounded-xl font-black text-2xl mt-5 shadow-lg">

          2026

        </div>

      </div>

      {/* GROUPS */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {groups.map((group, index) => (

          <div
            key={index}
            className="bg-[#00145A] border border-blue-400 rounded-3xl p-6 shadow-2xl hover:scale-105 transition duration-300"
          >

            <h2 className="text-2xl font-black text-[#FFD400] mb-6 text-center">

              {group.name}

            </h2>

            <div className="space-y-4">

              {group.teams.map((team, i) => (

                <div
                  key={i}
                  className="bg-white text-[#001B70] rounded-xl px-4 py-3 font-black text-lg shadow-md"
                >

                  {team}

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}