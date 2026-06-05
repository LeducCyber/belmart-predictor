"use client";

export default function GroupsPage() {

  const groups = [

    {
      name: "Groupe A",
      teams: [
        "Mexique",
        "Afrique du Sud",
        "République de Corée",
        "Tchéquie",
      ],
      codes: ["mx", "za", "kr", "cz"],
    },

    {
      name: "Groupe B",
      teams: [
        "Canada",
        "Bosnie-Herzégovine",
        "Qatar",
        "Suisse",
      ],
      codes: ["ca", "ba", "qa", "ch"],
    },

    {
      name: "Groupe C",
      teams: [
        "Brésil",
        "Maroc",
        "Haïti",
        "Écosse",
      ],
      codes: ["br", "ma", "ht", "gb"],
    },

    {
      name: "Groupe D",
      teams: [
        "États-Unis",
        "Australie",
        "Turquie",
        "Paraguay",
      ],
      codes: ["us", "au", "tr", "py"],
    },

    {
      name: "Groupe E",
      teams: [
        "Allemagne",
        "Curaçao",
        "Côte d'Ivoire",
        "Équateur",
      ],
      codes: ["de", "cw", "ci", "ec"],
    },

    {
      name: "Groupe F",
      teams: [
        "Pays-Bas",
        "Japon",
        "Suède",
        "Tunisie",
      ],
      codes: ["nl", "jp", "se", "tn"],
    },

    {
      name: "Groupe G",
      teams: [
        "Belgique",
        "Égypte",
        "Iran",
        "Nouvelle-Zélande",
      ],
      codes: ["be", "eg", "ir", "nz"],
    },

    {
      name: "Groupe H",
      teams: [
        "Espagne",
        "Cap-Vert",
        "Arabie saoudite",
        "Uruguay",
      ],
      codes: ["es", "cv", "sa", "uy"],
    },

    {
      name: "Groupe I",
      teams: [
        "France",
        "Sénégal",
        "Irak",
        "Norvège",
      ],
      codes: ["fr", "sn", "iq", "no"],
    },

    {
      name: "Groupe J",
      teams: [
        "Argentine",
        "Algérie",
        "Autriche",
        "Jordanie",
      ],
      codes: ["ar", "dz", "at", "jo"],
    },

    {
      name: "Groupe K",
      teams: [
        "Portugal",
        "RD Congo",
        "Ouzbékistan",
        "Colombie",
      ],
      codes: ["pt", "cd", "uz", "co"],
    },

    {
      name: "Groupe L",
      teams: [
        "Angleterre",
        "Croatie",
        "Ghana",
        "Panama",
      ],
      codes: ["eng", "hr", "gh", "pa"]
    },

  ];

  return (

    <div
  className="min-h-screen bg-cover bg-center bg-fixed p-6"
  style={{
 backgroundImage: "url('/mondial2.png')",
  }}
>

      <div className="max-w-7xl mx-auto">
  <div className="min-h-screen bg-black/20 rounded-3xl">
        <div className="bg-[#082567] text-white rounded-3xl p-6 mb-8 shadow-xl flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-black">
   Phase de groupes
</h1>


          </div>

          <a
            href="/"
            className="bg-white text-[#082567] px-5 py-3 rounded-2xl font-bold hover:bg-gray-200 transition"
          >
            ← Retour à l'accueil
          </a>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {groups.map((group, index) => (

            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden"
            >

              <div className="bg-[#082567] text-white p-4">

                <h2 className="text-2xl font-black">
                  {group.name}
                </h2>

              </div>

              <div className="p-4">

             <table className="w-full text-[#082567]">
  <thead>
    <tr className="border-b font-bold text-sm">
      <th className="text-left py-2">#</th>
      <th className="text-left py-2">Équipe</th>
      <th>MJ</th>
      <th>G</th>
      <th>N</th>
      <th>P</th>
      <th>BP</th>
      <th>BC</th>
    </tr>
  </thead>

  <tbody>
    {group.teams.map((team, i) => (
      <tr key={i} className="border-b">
        <td className="py-3">{i + 1}</td>

        <td className="py-3">
          <div className="flex items-center gap-3">
            <img
              src={`https://flagcdn.com/w80/${group.codes[i]}.png`}
              className="w-8 h-8 rounded"
            />
            <span className="font-bold">
              {team}
            </span>
          </div>
        </td>

        <td className="text-center">0</td>
        <td className="text-center">0</td>
        <td className="text-center">0</td>
        <td className="text-center">0</td>
        <td className="text-center">0</td>
        <td className="text-center">0</td>
      </tr>
    ))}
  </tbody>
</table>
              </div>

            </div>

          ))}

               </div>

      </div>

    </div>

  </div>

  );

}