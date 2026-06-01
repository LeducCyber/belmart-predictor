"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth, db } from "../lib/firebase";

import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";

export default function BelmartPredictor2026() {

  const [user, setUser] =
    useState<any>(null);

  const [matches, setMatches] =
    useState<any[]>([]);
    const [results, setResults] =
  useState<any>({});

  const [predictions, setPredictions] =
    useState<any>({});

  const [timeLeft, setTimeLeft] =
    useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

  /* AUTH */

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser);

          if (currentUser) {

            setTimeout(async () => {

              await signOut(auth);

              alert(
                "Session expirée. Veuillez vous reconnecter."
              );

              window.location.reload();

            }, 5 * 60 * 1000);

          }

        }
      );

    return () => unsubscribe();

  }, []);

  /* COUNTDOWN */

  useEffect(() => {

    const targetDate =
      new Date(
        "2026-06-11T00:00:00"
      ).getTime();

    const interval =
      setInterval(() => {

        const now =
          new Date().getTime();

        const distance =
          targetDate - now;

        setTimeLeft({

          days: Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
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

  /* LOAD MATCHES */

  useEffect(() => {

    const loadMatches =
      async () => {

        try {

          const querySnapshot =
            await getDocs(
              collection(
                db,
                "matches"
              )
            );

          const matchesData =
            querySnapshot.docs.map(
              (doc) => ({
                id: doc.id,
                ...doc.data(),
              })
            );

          const sortedMatches =
            matchesData.sort(
              (a: any, b: any) => {

                const dateA =
                  new Date(
                    `${a.date}T${a.time}:00`
                  ).getTime();

                const dateB =
                  new Date(
                    `${b.date}T${b.time}:00`
                  ).getTime();

                return (
                  dateA - dateB
                );

              }
            );

          setMatches(
            sortedMatches
          );
          const resultsSnapshot =
  await getDocs(
    collection(
      db,
      "results"
    )
  );

const resultsMap: any = {};

resultsSnapshot.forEach(
  (doc) => {

    const data =
      doc.data();

    resultsMap[
      `${data.team1}-${data.team2}`
    ] = data;

  }
);

setResults(resultsMap);

        } catch (error) {

          console.log(error);

        }

      };

    loadMatches();

  }, []);

  /* LOAD PREDICTIONS */

  useEffect(() => {

    const loadPredictions =
      async () => {

        if (!user) return;

        try {

          const q = query(
            collection(
              db,
              "predictions"
            ),
            where(
              "userId",
              "==",
              user.uid
            )
          );

          const querySnapshot =
            await getDocs(q);

          const loadedPredictions: any =
            {};

          querySnapshot.forEach(
            (docSnap) => {

              const data =
                docSnap.data();

              loadedPredictions[
                `${data.team1}-${data.team2}`
              ] = {

                score1:
                  data.score1,

                score2:
                  data.score2,

                docId:
                  docSnap.id,

              };

            }
          );

          setPredictions(
            loadedPredictions
          );

        } catch (error) {

          console.log(error);

        }

      };

    loadPredictions();

  }, [user]);

  /* LOGOUT */

  const handleLogout =
    async () => {

      await signOut(auth);

      window.location.reload();

    };

  /* SAVE PREDICTION */

  const savePrediction =
    async (match: any) => {

      if (!user) {

        alert(
          "Veuillez vous connecter"
        );

        return;

      }

      const prediction =
        predictions[
          `${match.team1}-${match.team2}`
        ];

      if (
        !prediction ||
        prediction.score1 === "" ||
        prediction.score2 === ""
      ) {

        alert(
          "Entrer les scores"
        );

        return;

      }

      const matchDate =
        new Date(
          `${match.date}T${match.time}:00`
        ).getTime();

      const now =
        new Date().getTime();

      const diffMinutes =
        (matchDate - now) /
        (1000 * 60);

      if (diffMinutes <= 30) {

        alert(
          "Modification impossible 30 minutes avant le match"
        );

        return;

      }

      try {

        if (prediction.docId) {

          await updateDoc(
            doc(
              db,
              "predictions",
              prediction.docId
            ),
            {
              score1:
                prediction.score1,

              score2:
                prediction.score2,
            }
          );

          alert(
            "Pronostic modifié ✅"
          );

        } else {

          const docRef =
            await addDoc(
              collection(
                db,
                "predictions"
              ),
              {
                userId:
                  user.uid,

                userEmail:
                  user.email,

                team1:
                  match.team1,

                team2:
                  match.team2,

                score1:
                  prediction.score1,

                score2:
                  prediction.score2,

                createdAt:
                  serverTimestamp(),
              }
            );

          setPredictions({

            ...predictions,

            [`${match.team1}-${match.team2}`]:
              {

                ...prediction,

                docId:
                  docRef.id,

              },

          });

          alert(
            "Pronostic enregistré ✅"
          );

        }

      } catch (error) {

        console.log(error);

        alert(
          "Erreur lors de l'enregistrement"
        );

      }

    };

  return (

    <div className="min-h-screen bg-[#082567]">

      {/* HEADER */}

      <div className="bg-[#082567] text-white px-3 sm:px-6 py-5">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

          <div className="text-center lg:text-left">

        
  
          </div>

        <div className="flex flex-wrap justify-center lg:justify-end gap-4 font-bold items-center text-center">

            <a
  href="/"
  className="hover:text-yellow-400 transition-colors"
>
  Accueil
</a>
            <a
  href="/leaderboard"
  className="hover:text-yellow-400 transition-colors"
>
  Classement Client
</a>

           <a
  href="/groups"
  className="hover:text-yellow-400 transition-colors"
>
  Groupes
</a>

            <a
  href="/reglement"
  className="hover:text-yellow-400 transition-colors"
>
  Règlement
</a>

            {user?.email ===
              "d.stlouis@belmarthaiti.com" && (

              <a
  href="/admin"
  className="hover:text-yellow-400 transition-colors"
>
  Administration
</a>

            )}

            {user ? (

              <button
                onClick={
                  handleLogout
                }
                className="bg-white text-[#082567] px-5 py-2 rounded-2xl font-black"
              >
                Déconnexion
              </button>

            ) : (

              <a
                href="/login"
                className="bg-white text-[#082567] px-5 py-2 rounded-2xl font-black"
              >
                Connexion
              </a>

            )}

          </div>

        </div>

      </div>

      {/* COUNTDOWN */}


{/* COUNTDOWN */}

<div className="bg-[#082567] text-white py-12 px-6 text-center">
<div className="relative flex justify-center mb-8">

  <div className="absolute w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>

  <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
    <Image
      src="/logos/belmart-logo.png"
      alt="Belmart"
      width={140}
      height={140}
    />
  </div>

</div>

  <h2 className="text-4xl sm:text-6xl font-black text-yellow-400">
  Coupe du Monde 2026
</h2>

<p className="text-lg sm:text-2xl mt-4 text-gray-200">
  Pronostiquez les matchs et grimpez au sommet du classement Belmart
</p>

<p className="mt-3 text-yellow-300 font-bold text-xl">
  🏆 Gagnez des récompenses exclusives Belmart
</p>

<p className="text-xl mt-4 font-semibold text-white">
  ⏳ Début de la Coupe du Monde dans :
</p>

        <div className="flex justify-center gap-8 mt-10 flex-wrap">

        <div className="bg-white text-[#082567] rounded-3xl px-6 py-5 w-32 sm:w-40 shadow-2xl">

            <div className="text-5xl font-black">
              {timeLeft.days}
            </div>

            <div className="mt-2 font-bold text-xl">
              Jours
            </div>

          </div>

        <div className="bg-white text-[#082567] rounded-3xl px-6 py-5 w-32 sm:w-40 shadow-2xl hover:scale-105 transition-all duration-300">


            <div className="text-5xl font-black">

              {timeLeft.hours}

            </div>

            <div className="mt-2 font-bold text-xl">

              Heures

            </div>

          </div>

          <div className="bg-white text-[#082567] rounded-3xl px-8 py-6 w-40 shadow-2xl">

            <div className="text-5xl font-black">

              {timeLeft.minutes}

            </div>

            <div className="mt-2 font-bold text-xl">

              Minutes

            </div>

          </div>

          <div className="bg-white text-[#082567] rounded-3xl px-8 py-6 w-40 shadow-2xl">

            <div className="text-5xl font-black">

              {timeLeft.seconds}

            </div>

            <div className="mt-2 font-bold text-xl">

              Secondes

            </div>

          </div>

        </div>

      </div>

      {/* MATCHS */}

      <div className="px-4 pb-10 pt-10">

       <h2 className="text-5xl font-black text-yellow-400 mb-8">
  ⚽ Matchs à pronostiquer
</h2> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {matches.map(
            (match, index) => (

              <div
  key={index}
  className="bg-white rounded-3xl p-6 text-[#082567] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-yellow-400 min-h-[650px]"
>

                <div className="text-center">
             {results[`${match.team1}-${match.team2}`] ? (
  <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-bold mb-3">
    ✅ Terminé
  </div>
) : (
  <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold mb-3">
    ⏳ À venir
  </div>
)}

                  <p className="text-gray-500 font-bold text-lg">

                    {match.displayDate}

                  </p>

                  <p className="text-center text-5xl font-black mt-3">

                    {match.time}

                  </p>

                </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-10 px-2 sm:px-4 gap-6">

                <div className="flex flex-col items-center w-[120px]">

                    <img
                      src={`https://flagcdn.com/w80/${match.flag1}.png`}
                      className="w-20 h-20 rounded-full shadow-lg"
/>

                  

                <span className="mt-3 font-bold text-center text-sm leading-tight max-w-[90px] break-words">
  {match.team1}
</span>
                  </div>

                 <div className="flex flex-col items-center">

  <div className="text-4xl font-black mb-4 text-yellow-500">
    VS
  </div>

                    <div className="flex gap-4">

                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={
                          predictions[
                            `${match.team1}-${match.team2}`
                          ]?.score1 || ""
                        }
                        onChange={(e) =>

                          setPredictions({

                            ...predictions,

                            [`${match.team1}-${match.team2}`]:
                              {

                                ...predictions[
                                  `${match.team1}-${match.team2}`
                                ],

                                score1:
                                  e.target.value,

                              },

                          })

                        }
                        className="w-14 h-14 border-2 border-[#082567] rounded-2xl text-center text-2xl font-bold outline-none"
                      />

                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={
                          predictions[
                            `${match.team1}-${match.team2}`
                          ]?.score2 || ""
                        }
                        onChange={(e) =>

                          setPredictions({

                            ...predictions,

                            [`${match.team1}-${match.team2}`]:
                              {

                                ...predictions[
                                  `${match.team1}-${match.team2}`
                                ],

                                score2:
                                  e.target.value,

                              },

                          })

                        }
                        className="w-14 h-14 border-2 border-[#082567] rounded-2xl text-center text-2xl font-bold outline-none"
                      />

                    </div>

                  </div>

                <div className="flex flex-col items-center w-[120px]">

                    <img
  src={`https://flagcdn.com/w80/${match.flag2}.png`}
  className="w-20 h-20 rounded-full shadow-lg"
/>

            <span className="mt-3 font-bold text-center text-sm leading-tight max-w-[90px] break-words">
  {match.team2}
</span>

                  </div>

                </div>

                <button
                  onClick={() =>
                    savePrediction(
                      match
                    )
                  }
                className="w-full bg-[#082567] text-white py-4 rounded-2xl mt-10 font-bold text-lg hover:bg-yellow-500 hover:text-[#082567] transition-all duration-300"
                >

                  Pronostic Sauvegardé

                </button>
{results[`${match.team1}-${match.team2}`] && (
<div className="text-center mt-6 bg-green-50 border border-green-200 rounded-2xl py-4">
   <p className="text-sm font-bold text-gray-600 uppercase">
  Score final
</p>

    <p className="text-4xl font-black text-green-600">
      {results[`${match.team1}-${match.team2}`].finalScore1}
      {" - "}
      {results[`${match.team1}-${match.team2}`].finalScore2}
    </p>
  </div>
)}

              </div>

            )
          )}

        </div>

      </div>

    </div>

  );
}