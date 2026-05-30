"use client";

import { useEffect, useState } from "react";

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

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-yellow-400">

              Belmart Pronostic 2026

            </h1>

            <p className="text-white text-lg sm:text-xl mt-1">

              Mondial 2026

            </p>

          </div>

        <div className="flex flex-wrap justify-center lg:justify-end gap-4 font-bold items-center text-center">

            <a href="/">
              Accueil
            </a>

            <a href="/leaderboard">
              Classement Client
            </a>

            <a href="/groups">
              Groupes
            </a>

            <a href="/reglement">
              reglement
            </a>

            {user?.email ===
              "d.stlouis@belmarthaiti.com" && (

              <a href="/admin">
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

      <div className="bg-[#082567] text-white py-12 px-6 text-center">

        <h2 className="text-4xl sm:text-6xl font-black">

          Mondial 2026

        </h2>

        <p className="text-2xl mt-4">

          Début de la Coupe du Monde :

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

          <div className="bg-white text-[#082567] rounded-3xl px-8 py-6 w-40 shadow-2xl">

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

          Match

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {matches.map(
            (match, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl p-6 text-[#082567] shadow-xl"
              >

                <div className="text-center">

                  <p className="text-gray-500 font-bold text-lg">

                    {match.displayDate}

                  </p>

                  <p className="text-center text-5xl font-black mt-3">

                    {match.time}

                  </p>

                </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-10 px-2 sm:px-4 gap-6">

                  <div className="flex flex-col items-center w-[110px]">

                    <img
                      src={`https://flagcdn.com/w80/${match.flag1}.png`}
                      className="w-16 h-16 rounded-full"
                    />

                    <span className="mt-3 font-bold text-center text-lg">

                      {match.team1}

                    </span>

                  </div>

                  <div className="flex flex-col items-center">

                    <div className="text-5xl font-black mb-6">

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

                  <div className="flex flex-col items-center w-[110px]">

                    <img
                      src={`https://flagcdn.com/w80/${match.flag2}.png`}
                      className="w-16 h-16 rounded-full"
                    />

                    <span className="mt-3 font-bold text-center text-lg">

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
                  className="w-full bg-[#082567] text-white py-4 rounded-2xl mt-10 font-bold text-lg"
                >

                  Pronostic Sauvegardé

                </button>

              </div>

            )
          )}

        </div>

      </div>

    </div>

  );
}