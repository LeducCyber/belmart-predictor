"use client";

export default function MatchesPage() {

  const matches = [

    // =========================
    // 11 JUIN 2026
    // =========================

    {
      group: "Groupe A",
      team1: "Mexique",
      team2: "Afrique du Sud",
      flag1: "mx",
      flag2: "za",
      date: "11 Juin 2026",
      time: "15:00",
      stadium: "Estadio Azteca",
    },

    {
      group: "Groupe A",
      team1: "Corée du Sud",
      team2: "Tchéquie",
      flag1: "kr",
      flag2: "cz",
      date: "11 Juin 2026",
      time: "22:00",
      stadium: "Estadio Akron",
    },

    // =========================
    // 12 JUIN 2026
    // =========================

    {
      group: "Groupe B",
      team1: "Canada",
      team2: "Bosnie-Herzégovine",
      flag1: "ca",
      flag2: "ba",
      date: "12 Juin 2026",
      time: "15:00",
      stadium: "BC Place",
    },

    {
      group: "Groupe B",
      team1: "États-Unis",
      team2: "Paraguay",
      flag1: "us",
      flag2: "py",
      date: "12 Juin 2026",
      time: "21:00",
      stadium: "SoFi Stadium",
    },

    // =========================
    // 13 JUIN 2026
    // =========================

    {
      group: "Groupe B",
      team1: "Qatar",
      team2: "Suisse",
      flag1: "qa",
      flag2: "ch",
      date: "13 Juin 2026",
      time: "15:00",
      stadium: "Hard Rock Stadium",
    },

    {
      group: "Groupe C",
      team1: "Brésil",
      team2: "Maroc",
      flag1: "br",
      flag2: "ma",
      date: "13 Juin 2026",
      time: "18:00",
      stadium: "AT&T Stadium",
    },

    {
      group: "Groupe C",
      team1: "Haïti",
      team2: "Écosse",
      flag1: "ht",
      flag2: "gb",
      date: "13 Juin 2026",
      time: "21:00",
      stadium: "Rose Bowl",
    },
    // =========================
// 14 JUIN 2026
// =========================

{
  group: "Groupe D",
  team1: "Australie",
  team2: "Turquie",
  flag1: "au",
  flag2: "tr",
  date: "14 Juin 2026",
  time: "00:00",
  stadium: "NRG Stadium",
},

{
  group: "Groupe E",
  team1: "Allemagne",
  team2: "Curaçao",
  flag1: "de",
  flag2: "cw",
  date: "14 Juin 2026",
  time: "13:00",
  stadium: "Mercedes-Benz Stadium",
},

{
  group: "Groupe F",
  team1: "Pays-Bas",
  team2: "Japon",
  flag1: "nl",
  flag2: "jp",
  date: "14 Juin 2026",
  time: "16:00",
  stadium: "Lumen Field",
},

{
  group: "Groupe E",
  team1: "Côte d'Ivoire",
  team2: "Équateur",
  flag1: "ci",
  flag2: "ec",
  date: "14 Juin 2026",
  time: "19:00",
  stadium: "Levi's Stadium",
},

{
  group: "Groupe F",
  team1: "Suède",
  team2: "Tunisie",
  flag1: "se",
  flag2: "tn",
  date: "14 Juin 2026",
  time: "22:00",
  stadium: "Gillette Stadium",
},,
// =========================
// 15 JUIN 2026
// =========================

{
  group: "Groupe H",
  team1: "Espagne",
  team2: "Cap-Vert",
  flag1: "es",
  flag2: "cv",
  date: "15 Juin 2026",
  time: "12:00",
  stadium: "Lincoln Financial Field",
},

{
  group: "Groupe G",
  team1: "Belgique",
  team2: "Égypte",
  flag1: "be",
  flag2: "eg",
  date: "15 Juin 2026",
  time: "15:00",
  stadium: "Arrowhead Stadium",
},

{
  group: "Groupe H",
  team1: "Arabie saoudite",
  team2: "Uruguay",
  flag1: "sa",
  flag2: "uy",
  date: "15 Juin 2026",
  time: "18:00",
  stadium: "Hard Rock Stadium",
},

{
  group: "Groupe G",
  team1: "Iran",
  team2: "Nouvelle-Zélande",
  flag1: "ir",
  flag2: "nz",
  date: "15 Juin 2026",
  time: "21:00",
  stadium: "AT&T Stadium",
},
// =========================
// 16 JUIN 2026
// =========================

{
  group: "Groupe I",
  team1: "France",
  team2: "Sénégal",
  flag1: "fr",
  flag2: "sn",
  date: "16 Juin 2026",
  time: "15:00",
  stadium: "MetLife Stadium",
},

{
  group: "Groupe I",
  team1: "Irak",
  team2: "Norvège",
  flag1: "iq",
  flag2: "no",
  date: "16 Juin 2026",
  time: "18:00",
  stadium: "SoFi Stadium",
},

{
  group: "Groupe J",
  team1: "Argentine",
  team2: "Algérie",
  flag1: "ar",
  flag2: "dz",
  date: "16 Juin 2026",
  time: "21:00",
  stadium: "BC Place",
},
// =========================
// 17 JUIN 2026
// =========================

{
  group: "Groupe J",
  team1: "Autriche",
  team2: "Jordanie",
  flag1: "at",
  flag2: "jo",
  date: "17 Juin 2026",
  time: "00:00",
  stadium: "NRG Stadium",
},

{
  group: "Groupe K",
  team1: "Portugal",
  team2: "RD Congo",
  flag1: "pt",
  flag2: "cd",
  date: "17 Juin 2026",
  time: "13:00",
  stadium: "Lumen Field",
},

{
  group: "Groupe L",
  team1: "Angleterre",
  team2: "Croatie",
  flag1: "gb",
  flag2: "hr",
  date: "17 Juin 2026",
  time: "16:00",
  stadium: "AT&T Stadium",
},

{
  group: "Groupe L",
  team1: "Ghana",
  team2: "Panama",
  flag1: "gh",
  flag2: "pa",
  date: "17 Juin 2026",
  time: "19:00",
  stadium: "Hard Rock Stadium",
},

{
  group: "Groupe K",
  team1: "Ouzbékistan",
  team2: "Colombie",
  flag1: "uz",
  flag2: "co",
  date: "17 Juin 2026",
  time: "22:00",
  stadium: "BC Place",
},
// =========================
// 18 JUIN 2026
// =========================

{
  group: "Groupe A",
  team1: "Tchéquie",
  team2: "Afrique du Sud",
  flag1: "cz",
  flag2: "za",
  date: "18 Juin 2026",
  time: "12:00",
  stadium: "Gillette Stadium",
},

{
  group: "Groupe B",
  team1: "Suisse",
  team2: "Bosnie-Herzégovine",
  flag1: "ch",
  flag2: "ba",
  date: "18 Juin 2026",
  time: "15:00",
  stadium: "Hard Rock Stadium",
},

{
  group: "Groupe B",
  team1: "Canada",
  team2: "Qatar",
  flag1: "ca",
  flag2: "qa",
  date: "18 Juin 2026",
  time: "18:00",
  stadium: "BC Place",
},

{
  group: "Groupe A",
  team1: "Mexique",
  team2: "Corée du Sud",
  flag1: "mx",
  flag2: "kr",
  date: "18 Juin 2026",
  time: "21:00",
  stadium: "Estadio Akron",
},
// =========================
// 19 JUIN 2026
// =========================

{
  group: "Groupe D",
  team1: "États-Unis",
  team2: "Australie",
  flag1: "us",
  flag2: "au",
  date: "19 Juin 2026",
  time: "15:00",
  stadium: "MetLife Stadium",
},

{
  group: "Groupe C",
  team1: "Écosse",
  team2: "Maroc",
  flag1: "gb",
  flag2: "ma",
  date: "19 Juin 2026",
  time: "18:00",
  stadium: "AT&T Stadium",
},

{
  group: "Groupe C",
  team1: "Brésil",
  team2: "Haïti",
  flag1: "br",
  flag2: "ht",
  date: "19 Juin 2026",
  time: "20:30",
  stadium: "Rose Bowl",
},

{
  group: "Groupe D",
  team1: "Turquie",
  team2: "Paraguay",
  flag1: "tr",
  flag2: "py",
  date: "19 Juin 2026",
  time: "23:00",
  stadium: "SoFi Stadium",
},
// =========================
// 20 JUIN 2026
// =========================

{
  group: "Groupe F",
  team1: "Pays-Bas",
  team2: "Suède",
  flag1: "nl",
  flag2: "se",
  date: "20 Juin 2026",
  time: "13:00",
  stadium: "Lumen Field",
},

{
  group: "Groupe E",
  team1: "Allemagne",
  team2: "Côte d'Ivoire",
  flag1: "de",
  flag2: "ci",
  date: "20 Juin 2026",
  time: "16:00",
  stadium: "Mercedes-Benz Stadium",
},

{
  group: "Groupe E",
  team1: "Équateur",
  team2: "Curaçao",
  flag1: "ec",
  flag2: "cw",
  date: "20 Juin 2026",
  time: "20:00",
  stadium: "Levi's Stadium",
},
// =========================
// 21 JUIN 2026
// =========================

{
  group: "Groupe F",
  team1: "Tunisie",
  team2: "Japon",
  flag1: "tn",
  flag2: "jp",
  date: "21 Juin 2026",
  time: "00:00",
  stadium: "Gillette Stadium",
},

{
  group: "Groupe H",
  team1: "Espagne",
  team2: "Arabie saoudite",
  flag1: "es",
  flag2: "sa",
  date: "21 Juin 2026",
  time: "12:00",
  stadium: "Lincoln Financial Field",
},

{
  group: "Groupe G",
  team1: "Belgique",
  team2: "Iran",
  flag1: "be",
  flag2: "ir",
  date: "21 Juin 2026",
  time: "15:00",
  stadium: "Arrowhead Stadium",
},

{
  group: "Groupe H",
  team1: "Uruguay",
  team2: "Cap-Vert",
  flag1: "uy",
  flag2: "cv",
  date: "21 Juin 2026",
  time: "18:00",
  stadium: "Hard Rock Stadium",
},

{
  group: "Groupe G",
  team1: "Nouvelle-Zélande",
  team2: "Égypte",
  flag1: "nz",
  flag2: "eg",
  date: "21 Juin 2026",
  time: "21:00",
  stadium: "AT&T Stadium",
},
// =========================
// 22 JUIN 2026
// =========================

{
  group: "Groupe J",
  team1: "Argentine",
  team2: "Autriche",
  flag1: "ar",
  flag2: "at",
  date: "22 Juin 2026",
  time: "13:00",
  stadium: "BC Place",
},

{
  group: "Groupe I",
  team1: "France",
  team2: "Irak",
  flag1: "fr",
  flag2: "iq",
  date: "22 Juin 2026",
  time: "17:00",
  stadium: "MetLife Stadium",
},

{
  group: "Groupe I",
  team1: "Norvège",
  team2: "Sénégal",
  flag1: "no",
  flag2: "sn",
  date: "22 Juin 2026",
  time: "20:00",
  stadium: "SoFi Stadium",
},

{
  group: "Groupe J",
  team1: "Jordanie",
  team2: "Algérie",
  flag1: "jo",
  flag2: "dz",
  date: "22 Juin 2026",
  time: "23:00",
  stadium: "NRG Stadium",
},
// =========================
// 23 JUIN 2026
// =========================

{
  group: "Groupe K",
  team1: "Portugal",
  team2: "Ouzbékistan",
  flag1: "pt",
  flag2: "uz",
  date: "23 Juin 2026",
  time: "13:00",
  stadium: "Lumen Field",
},

{
  group: "Groupe L",
  team1: "Angleterre",
  team2: "Ghana",
  flag1: "gb",
  flag2: "gh",
  date: "23 Juin 2026",
  time: "16:00",
  stadium: "AT&T Stadium",
},

{
  group: "Groupe L",
  team1: "Panama",
  team2: "Croatie",
  flag1: "pa",
  flag2: "hr",
  date: "23 Juin 2026",
  time: "19:00",
  stadium: "Hard Rock Stadium",
},

{
  group: "Groupe K",
  team1: "Colombie",
  team2: "RD Congo",
  flag1: "co",
  flag2: "cd",
  date: "23 Juin 2026",
  time: "22:00",
  stadium: "BC Place",
},
// =========================
// 24 JUIN 2026
// =========================

{
  group: "Groupe B",
  team1: "Suisse",
  team2: "Canada",
  flag1: "ch",
  flag2: "ca",
  date: "24 Juin 2026",
  time: "15:00",
  stadium: "Hard Rock Stadium",
},

{
  group: "Groupe B",
  team1: "Bosnie-Herzégovine",
  team2: "Qatar",
  flag1: "ba",
  flag2: "qa",
  date: "24 Juin 2026",
  time: "15:00",
  stadium: "BC Place",
},

{
  group: "Groupe C",
  team1: "Maroc",
  team2: "Haïti",
  flag1: "ma",
  flag2: "ht",
  date: "24 Juin 2026",
  time: "18:00",
  stadium: "AT&T Stadium",
},

{
  group: "Groupe C",
  team1: "Écosse",
  team2: "Brésil",
  flag1: "gb",
  flag2: "br",
  date: "24 Juin 2026",
  time: "18:00",
  stadium: "Rose Bowl",
},

{
  group: "Groupe A",
  team1: "Afrique du Sud",
  team2: "Corée du Sud",
  flag1: "za",
  flag2: "kr",
  date: "24 Juin 2026",
  time: "21:00",
  stadium: "Gillette Stadium",
},

{
  group: "Groupe A",
  team1: "Tchéquie",
  team2: "Mexique",
  flag1: "cz",
  flag2: "mx",
  date: "24 Juin 2026",
  time: "21:00",
  stadium: "Estadio Azteca",
},
// =========================
// 25 JUIN 2026
// =========================

{
  group: "Groupe E",
  team1: "Curaçao",
  team2: "Côte d'Ivoire",
  flag1: "cw",
  flag2: "ci",
  date: "25 Juin 2026",
  time: "16:00",
  stadium: "Levi's Stadium",
},

{
  group: "Groupe E",
  team1: "Équateur",
  team2: "Allemagne",
  flag1: "ec",
  flag2: "de",
  date: "25 Juin 2026",
  time: "16:00",
  stadium: "Mercedes-Benz Stadium",
},

{
  group: "Groupe F",
  team1: "Tunisie",
  team2: "Pays-Bas",
  flag1: "tn",
  flag2: "nl",
  date: "25 Juin 2026",
  time: "19:00",
  stadium: "Gillette Stadium",
},

{
  group: "Groupe F",
  team1: "Japon",
  team2: "Suède",
  flag1: "jp",
  flag2: "se",
  date: "25 Juin 2026",
  time: "19:00",
  stadium: "Lumen Field",
},

{
  group: "Groupe D",
  team1: "Turquie",
  team2: "États-Unis",
  flag1: "tr",
  flag2: "us",
  date: "25 Juin 2026",
  time: "22:00",
  stadium: "SoFi Stadium",
},

{
  group: "Groupe D",
  team1: "Paraguay",
  team2: "Australie",
  flag1: "py",
  flag2: "au",
  date: "25 Juin 2026",
  time: "22:00",
  stadium: "MetLife Stadium",
},
// =========================
// 26 JUIN 2026
// =========================

{
  group: "Groupe I",
  team1: "Norvège",
  team2: "France",
  flag1: "no",
  flag2: "fr",
  date: "26 Juin 2026",
  time: "15:00",
  stadium: "MetLife Stadium",
},

{
  group: "Groupe I",
  team1: "Sénégal",
  team2: "Irak",
  flag1: "sn",
  flag2: "iq",
  date: "26 Juin 2026",
  time: "15:00",
  stadium: "SoFi Stadium",
},

{
  group: "Groupe H",
  team1: "Cap-Vert",
  team2: "Arabie saoudite",
  flag1: "cv",
  flag2: "sa",
  date: "26 Juin 2026",
  time: "20:00",
  stadium: "Hard Rock Stadium",
},

{
  group: "Groupe H",
  team1: "Uruguay",
  team2: "Espagne",
  flag1: "uy",
  flag2: "es",
  date: "26 Juin 2026",
  time: "20:00",
  stadium: "Lincoln Financial Field",
},

{
  group: "Groupe G",
  team1: "Nouvelle-Zélande",
  team2: "Belgique",
  flag1: "nz",
  flag2: "be",
  date: "26 Juin 2026",
  time: "23:00",
  stadium: "Arrowhead Stadium",
},

{
  group: "Groupe G",
  team1: "Égypte",
  team2: "Iran",
  flag1: "eg",
  flag2: "ir",
  date: "26 Juin 2026",
  time: "23:00",
  stadium: "AT&T Stadium",
},
// =========================
// 27 JUIN 2026
// =========================

{
  group: "Groupe L",
  team1: "Panama",
  team2: "Angleterre",
  flag1: "pa",
  flag2: "gb",
  date: "27 Juin 2026",
  time: "17:00",
  stadium: "Hard Rock Stadium",
},

{
  group: "Groupe L",
  team1: "Croatie",
  team2: "Ghana",
  flag1: "hr",
  flag2: "gh",
  date: "27 Juin 2026",
  time: "17:00",
  stadium: "AT&T Stadium",
},

{
  group: "Groupe K",
  team1: "Colombie",
  team2: "Portugal",
  flag1: "co",
  flag2: "pt",
  date: "27 Juin 2026",
  time: "19:30",
  stadium: "BC Place",
},

{
  group: "Groupe K",
  team1: "RD Congo",
  team2: "Ouzbékistan",
  flag1: "cd",
  flag2: "uz",
  date: "27 Juin 2026",
  time: "19:30",
  stadium: "Lumen Field",
},

{
  group: "Groupe J",
  team1: "Algérie",
  team2: "Autriche",
  flag1: "dz",
  flag2: "at",
  date: "27 Juin 2026",
  time: "22:00",
  stadium: "NRG Stadium",
},

{
  group: "Groupe J",
  team1: "Jordanie",
  team2: "Argentine",
  flag1: "jo",
  flag2: "ar",
  date: "27 Juin 2026",
  time: "22:00",
  stadium: "MetLife Stadium",
},
      
  
  

  ];

  const groupedMatches = matches.reduce((acc: any, match: any) => {
    if (!acc[match.date]) acc[match.date] = [];
    acc[match.date].push(match);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#EEF2FF] p-4 md:p-6">

      {/* HEADER */}

      <div className="bg-gradient-to-r from-[#0A1F5C] to-[#123B9A] shadow-xl rounded-3xl mb-10">

        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-5">

          <div className="flex items-center gap-5">

            <img
              src="/belmart-logo.png"
              alt="Belmart"
              className="w-16 h-16 bg-white rounded-2xl p-2 object-contain"
            />

            <div>

              <h1 className="text-2xl md:text-5xl font-black text-white">
                Matches de la Coupe du Monde 2026
              </h1>

              <p className="text-white text-sm md:text-lg mt-1">
                FIFA World Cup • Calendrier officiel
              </p>

            </div>

          </div>

          <button
            onClick={() => window.location.href = "/"}
            className="bg-white text-[#0A1F5C] px-6 py-3 rounded-2xl font-bold hover:bg-gray-100 transition"
          >
            ← Retour à l'accueil
          </button>

        </div>

      </div>

      {/* MATCHES */}

      <div className="max-w-7xl mx-auto">

        {Object.entries(groupedMatches).map(([date, games]: any) => (

          <div key={date} className="mb-12">

            <h2 className="text-2xl md:text-3xl font-black text-[#0A1F5C] mb-6">
              {date}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {games.map((match: any, index: number) => (

                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition"
                >

                  <div className="bg-[#0A1F5C] text-white px-5 py-3 flex justify-between items-center">

                    <span className="font-semibold text-sm">
                      {match.group}
                    </span>

                    <span className="text-sm font-medium">
                      {match.time}
                    </span>

                  </div>

                  <div className="p-5">

                    <div className="space-y-5">

                      {/* TEAM 1 */}

                      <div className="flex items-center gap-4">

                        <img
                          src={`https://flagcdn.com/w80/${match.flag1}.png`}
                          alt={match.team1}
                          className="w-12 h-12 rounded-full object-cover border"
                        />

                        <span className="font-bold text-lg">
                          {match.team1}
                        </span>

                      </div>

                      {/* VS */}

                      <div className="text-center">

                        <span className="bg-[#EEF2FF] text-[#123B9A] px-5 py-2 rounded-full text-sm font-black">
                          VS
                        </span>

                      </div>

                      {/* TEAM 2 */}

                      <div className="flex items-center gap-4">

                        <img
                          src={`https://flagcdn.com/w80/${match.flag2}.png`}
                          alt={match.team2}
                          className="w-12 h-12 rounded-full object-cover border"
                        />

                        <span className="font-bold text-lg">
                          {match.team2}
                        </span>

                      </div>

                    </div>

                    {/* STADIUM */}

                    <div className="mt-6 pt-4 border-t border-gray-200">

                      <p className="text-sm text-gray-500">
                        Stade
                      </p>

                      <p className="font-semibold text-[#0A1F5C]">
                        {match.stadium}
                      </p>

                    </div>

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