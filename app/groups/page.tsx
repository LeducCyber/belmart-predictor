export default function GroupsPage() {

  const groups = [

    {
      name: "Groupe A",
      teams: ["USA 🇺🇸", "Mexique 🇲🇽", "Canada 🇨🇦", "Japon 🇯🇵"],
    },

    {
      name: "Groupe B",
      teams: ["France 🇫🇷", "Brésil 🇧🇷", "Maroc 🇲🇦", "Argentine 🇦🇷"],
    },

    {
      name: "Groupe C",
      teams: ["Haïti 🇭🇹", "Écosse 🏴", "Portugal 🇵🇹", "Qatar 🇶🇦"],
    },

    {
      name: "Groupe D",
      teams: ["Angleterre 🏴", "Belgique 🇧🇪", "Italie 🇮🇹", "Corée 🇰🇷"],
    },

  ];

  return (

    <div className="min-h-screen bg-[#0A2C6D] text-white p-10">

      <h1 className="text-5xl font-black text-[#FFD400] mb-10 text-center">
        Groupes Coupe du Monde 2026
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {groups.map((group, index) => (

          <div
            key={index}
            className="bg-white text-[#0A2C6D] rounded-3xl p-8 shadow-2xl"
          >

            <h2 className="text-3xl font-black mb-6 text-[#082456]">
              {group.name}
            </h2>

            <div className="space-y-4">

              {group.teams.map((team, i) => (

                <div
                  key={i}
                  className="bg-gray-100 rounded-xl p-4 text-xl font-bold"
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