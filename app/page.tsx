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
    const [showAllMatches, setShowAllMatches] =
  useState(false);
    const [results, setResults] =
  useState<any>({});

  const [predictions, setPredictions] =
    useState<any>({});
const [showLoginModal, setShowLoginModal] =
  useState(false);
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

  setShowLoginModal(true);

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
  <div
    className="min-h-screen bg-no-repeat"
    style={{
      backgroundImage: "url('/mondial2.png')",
        backgroundSize: "100% auto",
      backgroundPosition: "top center",
       backgroundRepeat: "no-repeat",
    }}
  >

    <div className="min-h-screen bg-black/20">
      {/* HEADER */}
      
     <div className="bg-white text-[#082567] px-3 sm:px-6 py-1 border-b">

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

      {/* LOGO */}


      {/* MATCHS */}

<div className="px-0 pb-10 pt-[20px] md:pt-[400px] lg:pt-[800px]">

<div className="flex justify-center -mb-12 relative z-20">
 <a
  href="/signup"
  className="w-[160px] bg-yellow-400 text-[#082567] py-2 px-2 rounded-xl font-black text-[10px] text-center shadow-lg"
>
  🚀 Inscrivez-vous maintenant
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24">

         {(showAllMatches ? matches : matches.slice(0, 6)).map(
  (match, index) => (

              <div
  key={index}
className="bg-white rounded-xl p-3 md:p-4 text-[#082567] shadow-md border border-gray-200 mx-2 md:mx-0"
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

                </div>

        <div className="grid grid-cols-3 items-center gap-6 mt-8">

 {/* Equipe 1 */}
<div className="flex flex-col items-center">
  <img
    src={`https://flagcdn.com/w160/${match.flag1}.png`}
    className="w-32 h-24 object-cover rounded-xl shadow-lg border border-gray-200"
  />

  <span className="mt-3 font-bold text-lg text-center">
    {match.team1}
  </span>

</div>

  {/* Centre */}
  <div className="text-center">

  <p className="text-xl font-bold text-gray-600">
      {match.displayDate}
    </p>

    <p className="text-4xl font-black mt-2 text-[#082567]">
      {match.time}
    </p>

   <div className="flex justify-center -mb-16 relative z-20">

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
            [`${match.team1}-${match.team2}`]: {
              ...predictions[
                `${match.team1}-${match.team2}`
              ],
              score1: e.target.value,
            },
          })
        }
        className="w-14 h-14 border-2 border-[#082567] rounded-2xl text-center text-2xl font-bold"
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
            [`${match.team1}-${match.team2}`]: {
              ...predictions[
                `${match.team1}-${match.team2}`
              ],
              score2: e.target.value,
            },
          })
        }
        className="w-14 h-14 border-2 border-[#082567] rounded-2xl text-center text-2xl font-bold"
      />

    </div>

  </div>

  {/* Equipe 2 */}
  <div className="flex flex-col items-center">
  <img
   src={`https://flagcdn.com/w160/${match.flag2 === "eng" ? "gb-eng" : match.flag2}.png`}
    className="w-32 h-24 object-cover rounded-xl shadow-lg border border-gray-200"
  />

  <span className="mt-3 font-bold text-lg text-center">
    {match.team2}
  </span>
</div>

</div>
<button
  onClick={() =>
    savePrediction(match)
  }
  className="w-full bg-[#082567] text-white py-4 rounded-2xl mt-10 font-bold text-lg hover:bg-yellow-500 hover:text-[#082567] transition-all duration-300"
>
    {
  predictions[
    `${match.team1}-${match.team2}`
  ]?.docId
    ? "✅ Pronostic placé"
    : "⚽ Quel est votre pronostic ?"
}

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

        </div> {/* fin grid */}

        <div className="flex justify-center mt-8">

          <button
            onClick={() => setShowAllMatches(!showAllMatches)}
            className="bg-[#082567] text-white px-8 py-4 rounded-2xl font-black hover:bg-yellow-500 hover:text-[#082567] transition"
          >
            {showAllMatches
              ? "Voir moins de matchs"
              : "Voir plus de matchs"}
          </button>
        </div>

          </div>

  </div>

{showLoginModal && (

  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 text-center">

      <h2 className="text-3xl font-black text-[#082567]">
        ⚽ Connexion requise
      </h2>

      <p className="mt-4 text-gray-600">
        Vous devez être connecté pour effectuer un pronostic.
      </p>

      <div className="mt-8 flex flex-col gap-4">

        <a
          href="/login"
          className="bg-[#082567] text-white py-4 rounded-2xl font-black"
        >
          Se connecter
        </a>

        <a
          href="/signup"
          className="bg-yellow-400 text-[#082567] py-4 rounded-2xl font-black"
        >
          Créer un compte
        </a>

        <button
          onClick={() => setShowLoginModal(false)}
          className="border-2 border-gray-300 py-4 rounded-2xl font-bold"
        >
          Fermer
        </button>

      </div>

    </div>

  </div>

)}

</div>
);
}
