"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";

import { auth, db } from "../lib/firebase";

import { getWorldCupMatches } from "../lib/api";

export default function BelmartPredictor2026() {

  const [user, setUser] = useState<any>(null);

  const [matches, setMatches] = useState<any[]>([]);

  const [scores, setScores] = useState<any>({});

  const [leaderboard, setLeaderboard] = useState<any[]>([]);

  // OFFICIAL RESULTS
  const officialResults: any = {

    "Mexico_vs_South Africa": {
      home: 2,
      away: 1,
    },

    "South Korea_vs_Czechia": {
      home: 1,
      away: 1,
    },

    "Canada_vs_Bosnia-Herzegovina": {
      home: 0,
      away: 2,
    },

    "United States_vs_Paraguay": {
      home: 3,
      away: 1,
    },

    "Qatar_vs_Switzerland": {
      home: 1,
      away: 2,
    },

    "Brazil_vs_Morocco": {
      home: 2,
      away: 0,
    },

  };

  // CALCULATE POINTS
  const calculatePoints = (
    team1: string,
    team2: string,
    predictedHome: number,
    predictedAway: number
  ) => {

    const key = `${team1}_vs_${team2}`;

    const official = officialResults[key];

    if (!official) return 0;

    // EXACT SCORE
    if (
      predictedHome === official.home &&
      predictedAway === official.away
    ) {

      return 3;

    }

    // WINNER
    const predictedWinner =
      predictedHome > predictedAway
        ? "home"
        : predictedAway > predictedHome
        ? "away"
        : "draw";

    const officialWinner =
      official.home > official.away
        ? "home"
        : official.away > official.home
        ? "away"
        : "draw";

    if (predictedWinner === officialWinner) {

      return 1;

    }

    return 0;

  };

  // FETCH LEADERBOARD
  const fetchLeaderboard = async () => {

    try {

      const querySnapshot = await getDocs(
        collection(db, "predictions")
      );

      const data: any[] = [];

      querySnapshot.forEach((document) => {

        data.push(document.data());

      });

      setLeaderboard(data);

    } catch (error) {

      console.log(error);

    }

  };

  // SAVE PREDICTION
  const savePrediction = async (
    match: any,
    homeScore: number,
    awayScore: number,
    index: number
  ) => {

    if (!user) {

      alert("Veuillez vous connecter");

      return;

    }

    // LOCK
    if (scores[index]?.locked) {

      alert("Prédiction déjà enregistrée");

      return;

    }

    try {

      const predictionId =
        `${user.uid}_${match.team1}_${match.team2}`;

      const points = calculatePoints(
        match.team1,
        match.team2,
        homeScore,
        awayScore
      );

      await setDoc(
        doc(db, "predictions", predictionId),
        {

          userId: user.uid,

          email: user.email,

          team1: match.team1,

          team2: match.team2,

          homeScore,

          awayScore,

          points,

          locked: true,

          createdAt: new Date(),

        }
      );

      // LOCK UI
      setScores({
        ...scores,
        [index]: {
          ...scores[index],
          locked: true,
        },
      });

      alert(
        `Prédiction enregistrée 🔥 (${points} points)`
      );

      fetchLeaderboard();

    } catch (error) {

      console.log(error);

      alert("Erreur sauvegarde");

    }

  };

  useEffect(() => {

    // AUTH
    onAuthStateChanged(
      auth,
      (currentUser) => {

        setUser(currentUser);

      }
    );

    // FETCH MATCHES
    const fetchMatches = async () => {

      const apiMatches =
        await getWorldCupMatches();

      const countryCodes: any = {

        USA: "us",
        ENG: "gb",
        FRA: "fr",
        GER: "de",
        ESP: "es",
        BRA: "br",
        ARG: "ar",
        MEX: "mx",
        CAN: "ca",
        PAR: "py",
        RSA: "za",
        POR: "pt",
        NED: "nl",
        ITA: "it",
        CRO: "hr",
        BEL: "be",
        SUI: "ch",
        DEN: "dk",
        POL: "pl",
        URU: "uy",
        COL: "co",
        JAP: "jp",
        KOR: "kr",
        MAR: "ma",
        SEN: "sn",
        CMR: "cm",
        NGA: "ng",
        BIH: "ba",
        QAT: "qa",
        CZE: "cz",

      };

      const formattedMatches =
        (apiMatches || [])
          .slice(0, 6)
          .map((match: any) => ({

            team1:
              match.homeTeam.name,

            flag1:
              countryCodes[
                match.homeTeam.tla
              ] || "us",

            team2:
              match.awayTeam.name,

            flag2:
              countryCodes[
                match.awayTeam.tla
              ] || "us",

            date:
              new Date(
                match.utcDate
              ).toLocaleDateString(),

          }));

      setMatches(formattedMatches);

    };

    fetchMatches();

    fetchLeaderboard();

  }, []);

  return (

    <div className="min-h-screen bg-[#0A2C6D] text-white">

      {/* HEADER */}
      <header className="flex flex-col md:flex-row items-center justify-between bg-[#082456] px-6 md:px-8 py-5 shadow-lg gap-5">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          <Image
            src="/belmart-logo.jpeg"
            alt="Belmart Logo"
            width={80}
            height={80}
            className="rounded-2xl shadow-lg"
          />

          <div>

            <h1 className="text-2xl md:text-4xl font-black text-[#FFD400] leading-tight">
              Jeu de pronostique
              <br />
              de Belmart
            </h1>

            <p className="text-sm text-gray-200">
              Coupe du Monde FIFA 2026
            </p>

          </div>

        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 font-bold text-sm md:text-base">

          <a
            href="/"
            className="hover:text-[#FFD400] transition"
          >
            Accueil
          </a>

          <a
            href="/groups"
            className="hover:text-[#FFD400] transition"
          >
            Groupes
          </a>

          <a
            href="/admin"
            className="hover:text-[#FFD400] transition"
          >
            Classement
          </a>

          {!user && (

            <>

              <a
                href="/login"
                className="bg-white text-[#082456] px-5 py-2 rounded-xl hover:scale-105 transition"
              >
                Login
              </a>

              <a
                href="/signup"
                className="bg-[#FFD400] text-[#082456] px-5 py-2 rounded-xl hover:scale-105 transition"
              >
                S'inscrire
              </a>

            </>

          )}

          {user && (

            <button
              onClick={() => signOut(auth)}
              className="bg-red-500 text-white px-5 py-2 rounded-xl hover:scale-105 transition"
            >
              Logout
            </button>

          )}

        </nav>

      </header>

      {/* HERO */}
      <section className="px-8 py-16 text-center">

        <h2 className="text-5xl font-bold mb-5">
          Predict. Win. Celebrate.
        </h2>

        <p className="text-xl text-gray-200">
          Faites vos pronostics et gagnez avec Belmart 🔥
        </p>

      </section>

      {/* MATCHES */}
      <section className="px-8 py-10">

        <h3 className="text-3xl font-bold text-[#FFD400] mb-6">
          Upcoming Matches
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          {matches.map(
            (match: any, index: number) => (

              <div
                key={index}
                className="bg-white text-[#0A2C6D] rounded-3xl p-6 shadow-xl"
              >

                <div className="text-center">

                  <p className="text-sm text-gray-500 mb-4">
                    {match.date}
                  </p>

                  <div className="flex items-center justify-between mb-5">

                    <div className="flex flex-col items-center">

                      <img
                        src={`https://flagcdn.com/w80/${match.flag1}.png`}
                        alt={match.team1}
                        className="w-16 h-16 mb-2 rounded-full"
                      />

                      <div className="font-bold">
                        {match.team1}
                      </div>

                    </div>

                    <span className="font-black text-2xl">
                      VS
                    </span>

                    <div className="flex flex-col items-center">

                      <img
                        src={`https://flagcdn.com/w80/${match.flag2}.png`}
                        alt={match.team2}
                        className="w-16 h-16 mb-2 rounded-full"
                      />

                      <div className="font-bold">
                        {match.team2}
                      </div>

                    </div>

                  </div>

                  <div className="flex justify-center gap-3 mb-5">

                    <input
                      type="number"
                      placeholder="0"
                      disabled={scores[index]?.locked}
                      value={
                        scores[index]?.home || ""
                      }
                      onChange={(e) =>
                        setScores({
                          ...scores,
                          [index]: {
                            ...scores[index],
                            home: e.target.value,
                          },
                        })
                      }
                      className={`w-16 h-16 text-center border rounded-xl text-2xl font-bold ${
                        scores[index]?.locked
                          ? "bg-gray-300 cursor-not-allowed"
                          : ""
                      }`}
                    />

                    <input
                      type="number"
                      placeholder="0"
                      disabled={scores[index]?.locked}
                      value={
                        scores[index]?.away || ""
                      }
                      onChange={(e) =>
                        setScores({
                          ...scores,
                          [index]: {
                            ...scores[index],
                            away: e.target.value,
                          },
                        })
                      }
                      className={`w-16 h-16 text-center border rounded-xl text-2xl font-bold ${
                        scores[index]?.locked
                          ? "bg-gray-300 cursor-not-allowed"
                          : ""
                      }`}
                    />

                  </div>

                  <button
                    disabled={scores[index]?.locked}
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
                    className={`px-5 py-3 rounded-xl w-full transition ${
                      scores[index]?.locked
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#0A2C6D] hover:bg-[#082456] text-white"
                    }`}
                  >

                    {scores[index]?.locked
                      ? "Prediction Locked"
                      : "Save Prediction"}

                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </section>

      {/* GLOBAL LEADERBOARD */}
      <section className="px-8 py-10">

        <h2 className="text-3xl font-bold text-[#FFD400] mb-6">
          Global Leaderboard 🏆
        </h2>

        <div className="bg-white rounded-3xl overflow-hidden">

          <table className="w-full text-[#0A2C6D]">

            <thead className="bg-[#FFD400]">

              <tr>

                <th className="p-4 text-left">
                  Rank
                </th>

                <th className="p-4 text-left">
                  Player
                </th>

                <th className="p-4 text-left">
                  Total Points
                </th>

              </tr>

            </thead>

            <tbody>

              {Object.values(

                leaderboard.reduce(
                  (acc: any, item: any) => {

                    if (!acc[item.email]) {

                      acc[item.email] = {

                        email: item.email,

                        totalPoints: 0,

                      };

                    }

                    acc[item.email]
                      .totalPoints +=
                      item.points || 0;

                    return acc;

                  },
                  {}
                )

              )

              .sort(
                (a: any, b: any) =>
                  b.totalPoints -
                  a.totalPoints
              )

              .map(
                (
                  player: any,
                  index: number
                ) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="p-4 font-black text-xl">

                      {index === 0
                        ? "🥇"
                        : index === 1
                        ? "🥈"
                        : index === 2
                        ? "🥉"
                        : `#${index + 1}`}

                    </td>

                    <td className="p-4 font-bold">
                      {player.email}
                    </td>

                    <td className="p-4 font-black text-2xl text-[#0A2C6D]">
                      {player.totalPoints}
                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#082456] py-6 text-center text-gray-300 mt-10">

        © 2026 Jeu de pronostique de Belmart

      </footer>

    </div>

  );

}