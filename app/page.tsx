"use client";

import { useEffect, useState } from "react";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  setDoc,
  doc,
} from "firebase/firestore";

import { auth, db } from "../lib/firebase";

export default function BelmartPredictor2026() {

  const [user, setUser] = useState<any>(null);

  const [matches, setMatches] = useState<any[]>([]);

  const [scores, setScores] = useState<any>({});

  const [timeLeft, setTimeLeft] = useState({

    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,

  });

  // AUTH + TIMER
  useEffect(() => {

    onAuthStateChanged(
      auth,
      (currentUser) => {

        setUser(currentUser);

      }
    );

    const targetDate = new Date(
      "2026-06-11T00:00:00"
    ).getTime();

    const interval = setInterval(() => {

      const now = new Date().getTime();

      const distance = targetDate - now;

      setTimeLeft({

        days: Math.floor(
          distance / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (distance %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),

        minutes: Math.floor(
          (distance %
            (1000 * 60 * 60)) /
            (1000 * 60)
        ),

        seconds: Math.floor(
          (distance %
            (1000 * 60)) / 1000
        ),

      });

    }, 1000);

    return () =>
      clearInterval(interval);

  }, []);

  // MATCHES
  useEffect(() => {

    const formattedMatches = [

      {
        team1: "Mexique",
        team2: "Afrique du Sud",
        flag1: "mx",
        flag2: "za",
        date: "jeudi 11 juin 2026",
        time: "15:00",
      },

      {
        team1: "République de Corée",
        team2: "Tchéquie",
        flag1: "kr",
        flag2: "cz",
        date: "jeudi 11 juin 2026",
        time: "22:00",
      },

      {
        team1: "Canada",
        team2: "Bosnie-Herzégovine",
        flag1: "ca",
        flag2: "ba",
        date: "vendredi 12 juin 2026",
        time: "15:00",
      },

      {
        team1: "Qatar",
        team2: "Suisse",
        flag1: "qa",
        flag2: "ch",
        date: "vendredi 12 juin 2026",
        time: "19:00",
      },

      {
        team1: "Brésil",
        team2: "Maroc",
        flag1: "br",
        flag2: "ma",
        date: "samedi 13 juin 2026",
        time: "16:00",
      },

      {
        team1: "Haïti",
        team2: "Écosse",
        flag1: "ht",
        flag2: "gb",
        date: "samedi 13 juin 2026",
        time: "21:00",
      },

      {
        team1: "États-Unis",
        team2: "Paraguay",
        flag1: "us",
        flag2: "py",
        date: "dimanche 14 juin 2026",
        time: "18:00",
      },

      {
        team1: "Allemagne",
        team2: "Curaçao",
        flag1: "de",
        flag2: "cw",
        date: "lundi 15 juin 2026",
        time: "20:00",
      },

      {
        team1: "France",
        team2: "Sénégal",
        flag1: "fr",
        flag2: "sn",
        date: "mardi 16 juin 2026",
        time: "21:00",
      },

    ];

    setMatches(formattedMatches);

  }, []);

  // SAVE PREDICTION
  const savePrediction = async (

    match: any,

    homeScore: number,

    awayScore: number,

    index: number

  ) => {

    if (!user) {

      alert(
        "Veuillez vous connecter"
      );

      window.location.href =
        "/login";

      return;

    }

    try {

      const predictionId =
        `${user.uid}_${match.team1}_${match.team2}`;

      await setDoc(

        doc(
          db,
          "predictions",
          predictionId
        ),

        {

          userId: user.uid,

          email: user.email,

          match:
            `${match.team1} vs ${match.team2}`,

          prediction:
            `${homeScore}-${awayScore}`,

          createdAt:
            new Date(),

        }
      );

      setScores({

        ...scores,

        [index]: {

          locked: true,

        },

      });

      alert(
        "Pronostic enregistré 🔥"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Erreur lors de l'enregistrement"
      );

    }

  };

  return (

    <div className="min-h-screen bg-[#0A2C6D] text-white">

      {/* HEADER */}
      <header className="bg-[#082456] px-6 py-5 shadow-xl">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <h1 className="text-3xl md:text-5xl font-black text-[#FFD400]">

            Jeu de pronostique
            <br />
            de Belmart

          </h1>

          <nav className="flex flex-wrap gap-5 font-bold">

            <a href="/">
              Accueil
            </a>

            <a href="/groups">
              Groupes
            </a>

            <a href="/matches">
              Matchs
            </a>

            <a href="/admin">
              Classement
            </a>

            <a href="/rules">
              Règlement
            </a>

            {!user ? (

              <a
                href="/login"
                className="bg-white text-[#082456] px-4 py-2 rounded-xl"
              >
                Connexion
              </a>

            ) : (

              <button
                onClick={() =>
                  signOut(auth)
                }
                className="bg-red-500 px-4 py-2 rounded-xl"
              >
                Déconnexion
              </button>

            )}

          </nav>

        </div>

      </header>

      {/* TIMER */}
      <section className="px-6 py-8">

        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">

          <div>

            <h2 className="text-2xl md:text-5xl font-black">

              Coupe du Monde FIFA 2026™

            </h2>

            <p className="mt-3 text-xl">

              11 juin - 19 juillet 2026

            </p>

          </div>

          <div className="flex gap-6 text-center">

            <div>

              <div className="text-5xl font-black">

                {timeLeft.days}

              </div>

              <div>
                JOURS
              </div>

            </div>

            <div>

              <div className="text-5xl font-black">

                {timeLeft.hours}

              </div>

              <div>
                HEURES
              </div>

            </div>

            <div>

              <div className="text-5xl font-black">

                {timeLeft.minutes}

              </div>

              <div>
                MINUTES
              </div>

            </div>

            <div>

              <div className="text-5xl font-black">

                {timeLeft.seconds}

              </div>

              <div>
                SECS
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* HERO */}
      <section className="text-center py-12 px-5">

        <h2 className="text-4xl md:text-6xl font-black">

          Predict. Win. Celebrate.

        </h2>

        <p className="text-xl mt-5 text-gray-200">

          Faites vos pronostics et gagnez avec Belmart 🔥

        </p>

      </section>

      {/* MATCHES */}
      <section className="px-6 pb-16">

        <h3 className="text-3xl font-black text-[#FFD400] mb-8">

          Matchs à venir

        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {matches.map(
            (
              match: any,
              index: number
            ) => (

              <div
                key={index}
                className="bg-white text-[#0A2C6D] rounded-3xl p-6 shadow-xl"
              >

                {/* DATE */}
                <p className="text-center text-gray-500 mb-3 font-semibold">

                  {match.date}

                </p>

                {/* TIME */}
                <p className="text-center text-3xl font-black mb-5">

                  {match.time}

                </p>

                {/* TEAMS */}
                <div className="flex items-center justify-between mb-8">

                  {/* TEAM 1 */}
                  <div className="flex flex-col items-center w-[120px]">

                    <img
                      src={`https://flagcdn.com/w80/${match.flag1}.png`}
                      className="w-14 h-14 rounded-full mb-2"
                    />

                    <span className="font-bold text-center text-sm md:text-base">

                      {match.team1}

                    </span>

                  </div>

                  {/* VS */}
                  <div className="text-2xl font-black">

                    VS

                  </div>

                  {/* TEAM 2 */}
                  <div className="flex flex-col items-center w-[120px]">

                    <img
                      src={`https://flagcdn.com/w80/${match.flag2}.png`}
                      className="w-14 h-14 rounded-full mb-2"
                    />

                    <span className="font-bold text-center text-sm md:text-base">

                      {match.team2}

                    </span>

                  </div>

                </div>

                {/* INPUTS */}
                <div className="flex justify-center gap-4 mb-5">

                  <input
                    type="number"
                    min="0"
                    disabled={
                      scores[index]?.locked
                    }
                    onChange={(e) =>
                      setScores({

                        ...scores,

                        [index]: {

                          ...scores[index],

                          home:
                            e.target.value,

                        },

                      })
                    }
                    className="w-14 h-14 border border-[#0A2C6D] rounded-xl text-center text-2xl font-black"
                  />

                  <input
                    type="number"
                    min="0"
                    disabled={
                      scores[index]?.locked
                    }
                    onChange={(e) =>
                      setScores({

                        ...scores,

                        [index]: {

                          ...scores[index],

                          away:
                            e.target.value,

                        },

                      })
                    }
                    className="w-14 h-14 border border-[#0A2C6D] rounded-xl text-center text-2xl font-black"
                  />

                </div>

                {/* BUTTON */}
                <button
                  disabled={
                    scores[index]?.locked
                  }
                  onClick={() =>
                    savePrediction(

                      match,

                      Number(
                        scores[index]?.home || 0
                      ),

                      Number(
                        scores[index]?.away || 0
                      ),

                      index
                    )
                  }
                  className={`w-full py-3 rounded-2xl font-bold transition ${
                    scores[index]?.locked
                      ? "bg-gray-400"
                      : "bg-[#0A2C6D] text-white hover:bg-[#082456]"
                  }`}
                >

                  {scores[index]?.locked
                    ? "Pronostic verrouillé"
                    : "Enregistrer"}

                </button>

              </div>

            )
          )}

        </div>

      </section>

    </div>

  );

}