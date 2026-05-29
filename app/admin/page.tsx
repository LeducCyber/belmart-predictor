"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../../lib/firebase";

import {
  onAuthStateChanged,
} from "firebase/auth";

export default function AdminPage() {

  const [user, setUser] =
    useState<any>(null);

  const [authorized,
    setAuthorized] =
    useState(false);

  /* RESULTATS */

  const [team1, setTeam1] =
    useState("");

  const [team2, setTeam2] =
    useState("");

  const [score1, setScore1] =
    useState("");

  const [score2, setScore2] =
    useState("");

  /* MATCHES */

  const [matchTeam1,
    setMatchTeam1] =
    useState("");

  const [matchTeam2,
    setMatchTeam2] =
    useState("");

  const [flag1, setFlag1] =
    useState("");

  const [flag2, setFlag2] =
    useState("");

  const [matchDate,
    setMatchDate] =
    useState("");

  const [displayDate,
    setDisplayDate] =
    useState("");

  const [matchTime,
    setMatchTime] =
    useState("");

  /* DATA */

  const [results, setResults] =
    useState<any[]>([]);

  const [predictions,
    setPredictions] =
    useState<any[]>([]);

  const [matches, setMatches] =
    useState<any[]>([]);

  /* AUTH */

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser);

          if (
            currentUser?.email ===
            "d.stlouis@belmarthaiti.com"
          ) {

            setAuthorized(true);

          }

        }
      );

    return () =>
      unsubscribe();

  }, []);

  /* LOAD DATA */

  useEffect(() => {

    loadData();

  }, []);

  const loadData =
    async () => {

      /* RESULTS */

      const resultsSnapshot =
        await getDocs(
          collection(
            db,
            "results"
          )
        );

      const resultsData =
        resultsSnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        );

      setResults(resultsData);

      /* PREDICTIONS */

      const predictionsSnapshot =
        await getDocs(
          collection(
            db,
            "predictions"
          )
        );

      const predictionsData =
        predictionsSnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        );

      setPredictions(
        predictionsData
      );

      /* MATCHES */

      const matchesSnapshot =
        await getDocs(
          collection(
            db,
            "matches"
          )
        );

      const matchesData =
        matchesSnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        );

      setMatches(matchesData);

    };

  /* ADD RESULT */

  const addResult =
    async () => {

      if (
        !team1 ||
        !team2 ||
        score1 === "" ||
        score2 === ""
      ) {

        alert(
          "Compléter tous les champs"
        );

        return;

      }

      try {

        await addDoc(
          collection(
            db,
            "results"
          ),
          {
            team1,
            team2,
            finalScore1:
              Number(score1),
            finalScore2:
              Number(score2),
          }
        );

        alert(
          "Résultat ajouté ✅"
        );

        setTeam1("");
        setTeam2("");
        setScore1("");
        setScore2("");

        loadData();

      } catch (error) {

        console.log(error);

        alert(
          "Erreur"
        );

      }

    };

  /* ADD MATCH */

  const addMatch =
    async () => {

      if (
        !matchTeam1 ||
        !matchTeam2 ||
        !flag1 ||
        !flag2 ||
        !matchDate ||
        !displayDate ||
        !matchTime
      ) {

        alert(
          "Compléter tous les champs"
        );

        return;

      }

      try {

        await addDoc(
          collection(
            db,
            "matches"
          ),
          {
            team1:
              matchTeam1,

            team2:
              matchTeam2,

            flag1,

            flag2,

            date:
              matchDate,

            displayDate,

            time:
              matchTime,
          }
        );

        alert(
          "Match ajouté ✅"
        );

        setMatchTeam1("");
        setMatchTeam2("");
        setFlag1("");
        setFlag2("");
        setMatchDate("");
        setDisplayDate("");
        setMatchTime("");

        loadData();

      } catch (error) {

        console.log(error);

        alert(
          "Erreur lors de l'ajout"
        );

      }

    };

  /* EDIT MATCH */


  const deleteMatch =
  async (matchId: string) => {

    const confirmDelete =
      confirm(
        "Voulez-vous supprimer ce match ?"
      );

    if (!confirmDelete) return;

    try {

      await deleteDoc(
        doc(
          db,
          "matches",
          matchId
        )
      );

      alert(
        "Match supprimé ✅"
      );

      loadData();

    } catch (error) {

      console.log(error);

      alert(
        "Erreur suppression"
      );

    }

  };
    async (match: any) => {

      const newTeam1 =
        prompt(
          "Equipe 1",
          match.team1
        );

      const newTeam2 =
        prompt(
          "Equipe 2",
          match.team2
        );

      const newFlag1 =
        prompt(
          "Flag 1",
          match.flag1
        );

      const newFlag2 =
        prompt(
          "Flag 2",
          match.flag2
        );

      const newDate =
        prompt(
          "Date",
          match.date
        );

      const newDisplayDate =
        prompt(
          "Display Date",
          match.displayDate
        );

      const newTime =
        prompt(
          "Heure",
          match.time
        );

      if (
        !newTeam1 ||
        !newTeam2 ||
        !newFlag1 ||
        !newFlag2 ||
        !newDate ||
        !newDisplayDate ||
        !newTime
      ) return;

      try {

        await updateDoc(
          doc(
            db,
            "matches",
            match.id
          ),
          {
            team1:
              newTeam1,

            team2:
              newTeam2,

            flag1:
              newFlag1,

            flag2:
              newFlag2,

            date:
              newDate,

            displayDate:
              newDisplayDate,

            time:
              newTime,
          }
        );

        alert(
          "Match modifié ✅"
        );

        loadData();

      } catch (error) {

        console.log(error);

        alert(
          "Erreur modification"
        );

      }

    };

  /* ACCESS */

  if (!authorized) {

    return (

      <div className="min-h-screen bg-[#082567] text-white flex items-center justify-center text-4xl font-black">

        Accès Refusé

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-[#082567] text-white p-6">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-black text-yellow-400">

            Administration

          </h1>

          <p className="text-xl mt-2">

            Dashboard Belmart Pronostic 2026

          </p>

        </div>

        <a
          href="/"
          className="bg-white text-[#082567] px-6 py-3 rounded-2xl font-black"
        >
          Retour Accueil
        </a>

      </div>

      {/* ADD MATCH */}

      <div className="bg-white text-[#082567] rounded-3xl p-8 shadow-2xl mb-10">

        <h2 className="text-4xl font-black mb-8">

          Ajouter Match

        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Equipe 1"
            value={matchTeam1}
            onChange={(e) =>
              setMatchTeam1(
                e.target.value
              )
            }
            className="border-2 border-gray-200 rounded-2xl p-4"
          />

          <input
            type="text"
            placeholder="Equipe 2"
            value={matchTeam2}
            onChange={(e) =>
              setMatchTeam2(
                e.target.value
              )
            }
            className="border-2 border-gray-200 rounded-2xl p-4"
          />

          <input
            type="text"
            placeholder="Flag 1 (mx)"
            value={flag1}
            onChange={(e) =>
              setFlag1(
                e.target.value
              )
            }
            className="border-2 border-gray-200 rounded-2xl p-4"
          />

          <input
            type="text"
            placeholder="Flag 2 (za)"
            value={flag2}
            onChange={(e) =>
              setFlag2(
                e.target.value
              )
            }
            className="border-2 border-gray-200 rounded-2xl p-4"
          />

          <input
            type="text"
            placeholder="Date 2026-06-11"
            value={matchDate}
            onChange={(e) =>
              setMatchDate(
                e.target.value
              )
            }
            className="border-2 border-gray-200 rounded-2xl p-4"
          />

          <input
            type="text"
            placeholder="Jeudi 11 Juin 2026"
            value={displayDate}
            onChange={(e) =>
              setDisplayDate(
                e.target.value
              )
            }
            className="border-2 border-gray-200 rounded-2xl p-4"
          />

          <input
            type="text"
            placeholder="15:00"
            value={matchTime}
            onChange={(e) =>
              setMatchTime(
                e.target.value
              )
            }
            className="border-2 border-gray-200 rounded-2xl p-4"
          />

        </div>

        <button
          onClick={addMatch}
          className="bg-[#082567] text-white px-8 py-4 rounded-2xl mt-6 font-black text-xl"
        >
          Ajouter Match
        </button>

      </div>

      {/* MATCHES */}

      <div className="bg-white text-[#082567] rounded-3xl p-8 shadow-2xl mb-10">

        <h2 className="text-4xl font-black mb-8">

          Matchs

        </h2>

        <div className="space-y-4">

          {matches.map(
            (match) => (

              <div
                key={match.id}
                className="bg-gray-100 rounded-2xl p-4 flex justify-between items-center"
              >

                <div>

                  <div className="font-black text-xl">

                    {match.team1}

                    {" vs "}

                    {match.team2}

                  </div>

                  <div className="mt-2 text-gray-600">

                    {match.displayDate}

                    {" - "}

                    {match.time}

                  </div>

                </div>

              <div className="flex gap-2">

  <button
    onClick={() =>
      editMatch(match)
    }
    className="bg-yellow-400 text-[#082567] px-4 py-2 rounded-xl font-black"
  >
    Modifier
  </button>

  <button
    onClick={() =>
      deleteMatch(match.id)
    }
    className="bg-red-600 text-white px-4 py-2 rounded-xl font-black"
  >
    Supprimer
  </button>

</div>

              </div>

            )
          )}

        </div>

      </div>

      {/* ADD RESULT */}

      <div className="bg-white text-[#082567] rounded-3xl p-8 shadow-2xl mb-10">

        <h2 className="text-4xl font-black mb-8">

          Ajouter Résultat Officiel

        </h2>
        <div className="bg-white text-[#082567] rounded-3xl p-8 shadow-2xl mb-10">

  <h2 className="text-4xl font-black mb-8">

    Pronostics Utilisateurs

  </h2>

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead>

        <tr className="border-b-2 border-gray-200">

          <th className="text-left py-4">
            Utilisateur
          </th>

          <th className="text-left py-4">
            Match
          </th>

          <th className="text-left py-4">
            Pronostic
          </th>

        </tr>

      </thead>

      <tbody>

        {predictions.map(
          (prediction) => (

            <tr
              key={prediction.id}
              className="border-b border-gray-100"
            >

              <td className="py-4">
                {prediction.userEmail}
              </td>

              <td className="py-4">
                {prediction.team1}
                {" vs "}
                {prediction.team2}
              </td>

              <td className="py-4 font-black">
                {prediction.score1}
                {" - "}
                {prediction.score2}
              </td>

            </tr>

          )
        )}

      </tbody>

    </table>

  </div>

</div>

        <div className="grid md:grid-cols-4 gap-4">

          <input
            type="text"
            placeholder="Equipe 1"
            value={team1}
            onChange={(e) =>
              setTeam1(
                e.target.value
              )
            }
            className="border-2 border-gray-200 rounded-2xl p-4"
          />

          <input
            type="text"
            placeholder="Equipe 2"
            value={team2}
            onChange={(e) =>
              setTeam2(
                e.target.value
              )
            }
            className="border-2 border-gray-200 rounded-2xl p-4"
          />

          <input
            type="number"
            placeholder="Score 1"
            value={score1}
            onChange={(e) =>
              setScore1(
                e.target.value
              )
            }
            className="border-2 border-gray-200 rounded-2xl p-4"
          />

          <input
            type="number"
            placeholder="Score 2"
            value={score2}
            onChange={(e) =>
              setScore2(
                e.target.value
              )
            }
            className="border-2 border-gray-200 rounded-2xl p-4"
          />

        </div>

        <button
          onClick={addResult}
          className="bg-[#082567] text-white px-8 py-4 rounded-2xl mt-6 font-black text-xl"
        >
          Ajouter Résultat
        </button>

      </div>

    </div>

  );
}