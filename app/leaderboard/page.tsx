"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../../lib/firebase";

import {
  onAuthStateChanged,
} from "firebase/auth";

export default function LeaderboardPage() {

  const [players, setPlayers] =
    useState<any[]>([]);

  const [currentUser,
    setCurrentUser] =
    useState<any>(null);

  const [userPosition,
    setUserPosition] =
    useState<number | null>(
      null
    );

  const [userPoints,
    setUserPoints] =
    useState(0);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {

          setCurrentUser(user);

        }
      );

    return () =>
      unsubscribe();

  }, []);

  useEffect(() => {

    const loadLeaderboard =
      async () => {

        try {

          const predictionsSnapshot =
            await getDocs(
              collection(
                db,
                "predictions"
              )
            );

          const resultsSnapshot =
            await getDocs(
              collection(
                db,
                "results"
              )
            );

          const results: any = {};
const usersSnapshot =
  await getDocs(
    collection(db, "users")
  );

const usersMap: any = {};

usersSnapshot.forEach(
  (doc) => {
    usersMap[doc.id] =
      doc.data();
  }
);
          resultsSnapshot.forEach(
            (doc) => {

              const data =
                doc.data();

              results[
                `${data.team1}-${data.team2}`
              ] = data;

            }
          );

          const playersMap: any =
            {};

          predictionsSnapshot.forEach(
            (doc) => {

              const prediction =
                doc.data();

              const key =
                `${prediction.team1}-${prediction.team2}`;

              const result =
                results[key];

              if (!result)
                return;

              let points = 0;

              let exactScores = 0;

        const predictedWinner =
  prediction.homeScore >
  prediction.awayScore
    ? prediction.team1
    : prediction.homeScore <
      prediction.awayScore
    ? prediction.team2
    : "draw";

              const realWinner =
                result.finalScore1 >
                result.finalScore2
                  ? result.team1
                  : result.finalScore1 <
                    result.finalScore2
                  ? result.team2
                  : "draw";
if (
  prediction.homeScore ==
    result.finalScore1 &&
  prediction.awayScore ==
    result.finalScore2
) {

                points += 3;

                exactScores += 1;

              } else if (
                predictedWinner ===
                realWinner
              ) {

                points += 1;

              }

              if (
                !playersMap[
                  prediction.userId
                ]
              ) {

                playersMap[
                  prediction.userId
                ] = {

                  id:
                    prediction.userId,
      name:
  usersMap[
    prediction.userId
  ]?.username ||
  usersMap[
    prediction.userId
  ]?.fullName ||
  prediction.email,

                  points: 0,

                  exactScores: 0,

                  predictions: 0,

                };

              }

              playersMap[
                prediction.userId
              ].points += points;

              playersMap[
                prediction.userId
              ].exactScores +=
                exactScores;

              playersMap[
                prediction.userId
              ].predictions += 1;

            }
          );

  const leaderboard =
  Object.values(
    playersMap
  ) as any[];

leaderboard.sort(
  (a: any, b: any) =>
    b.points - a.points
);

          setPlayers(
            leaderboard
          );

          if (currentUser) {

            const position =
              leaderboard.findIndex(
                (player: any) =>
                  player.id ===
                  currentUser.uid
              );

            if (
              position !== -1
            ) {

              setUserPosition(
                position + 1
              );

              setUserPoints(
                leaderboard[
                  position
                ].points
              );

            }

          }

        } catch (error) {

          console.log(error);

        }

      };

    loadLeaderboard();

  }, [currentUser]);

  return (

    <div className="min-h-screen bg-[#082567] text-white p-6">

      {/* RETOUR */}

      <div className="mb-8">

        <a
          href="/"
          className="bg-yellow-400 text-[#082567] px-6 py-3 rounded-2xl font-black"
        >
          ← Retour à l'accueil
        </a>

      </div>

      {/* HEADER */}

      <div className="flex flex-col md:flex-row justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-black text-yellow-400">
            Belmart Pronostic 2026
          </h1>

          <p className="text-xl mt-2">
            Classement des meilleurs pronostiqueurs
          </p>

        </div>

        <div className="bg-white text-[#082567] px-6 py-4 rounded-3xl mt-6 md:mt-0 shadow-2xl">

          <h2 className="text-2xl font-black">
            Votre Position
          </h2>

          <p className="text-5xl font-black mt-2">

            {userPosition
              ? `#${userPosition}`
              : "--"}

          </p>

          <p className="font-bold mt-2">
            {userPoints} Points
          </p>

        </div>

      </div>

      {/* TOP 3 */}

      {players.length > 0 && (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {players
            .slice(0, 3)
            .map(
              (
                player,
                index
              ) => (

                <div
                  key={
                    player.id
                  }
                  className="bg-white text-[#082567] rounded-3xl p-8 shadow-2xl text-center"
                >

                  <div className="text-6xl">

                    {index === 0 &&
                      "🥇"}

                    {index === 1 &&
                      "🥈"}

                    {index === 2 &&
                      "🥉"}

                  </div>

                  <h2 className="text-3xl font-black mt-4 break-all">

                    {player.name}

                  </h2>

                  <p className="text-5xl font-black text-yellow-500 mt-4">

                    {player.points}

                  </p>

                  <p className="font-bold mt-2">
                    points
                  </p>

                </div>

              )
            )}

        </div>

      )}

      {/* TABLEAU */}

      <div className="bg-white rounded-3xl p-6 text-[#082567] shadow-2xl overflow-x-auto">

        <h2 className="text-4xl font-black mb-6">

          Classement Général

        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b-2 border-gray-200 text-left">

              <th className="py-4 text-xl">
                Position
              </th>

              <th className="py-4 text-xl">
                Joueur
              </th>

              <th className="py-4 text-xl">
                Points
              </th>

              <th className="py-4 text-xl">
                Scores Exacts
              </th>

              <th className="py-4 text-xl">
                Pronostics
              </th>

            </tr>

          </thead>

          <tbody>

            {players.length ===
            0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-16 text-center text-2xl font-bold text-gray-400"
                >

                  Aucun classement disponible

                </td>

              </tr>

            ) : (

              players.map(
                (
                  player,
                  index
                ) => (

                  <tr
                    key={
                      player.id
                    }
                    className="border-b border-gray-100"
                  >

                    <td className="py-5 font-black text-2xl">

                      #{index + 1}

                    </td>

                    <td className="py-5 font-bold text-lg break-all">

                      {player.name}

                    </td>

                    <td className="py-5 font-black text-yellow-500 text-2xl">

                      {player.points}

                    </td>

                    <td className="py-5">

                      {player.exactScores}

                    </td>

                    <td className="py-5">

                      {player.predictions}

                    </td>

                  </tr>

                )
              )

            )}

          </tbody>

        </table>

      </div>

    </div>

  );
}