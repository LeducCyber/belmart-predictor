export default function ReglementPage() {
  return (
    <div className="min-h-screen bg-[#082567] text-white p-8">

      {/* BOUTON RETOUR */}

      <div className="mb-8">
        <a
          href="/"
          className="bg-yellow-400 text-[#082567] px-6 py-3 rounded-2xl font-black hover:bg-yellow-300 transition"
        >
          ← Retour à l'accueil
        </a>
      </div>

      <h1 className="text-5xl font-black text-yellow-400 mb-8">
        Règlement Officiel du Jeu
      </h1>

      <div className="bg-white text-[#082567] rounded-3xl p-8 shadow-2xl">

        <h2 className="text-4xl font-black mb-6">
          Belmart Pronostic 2026
        </h2>

        <div className="space-y-8 text-lg">

          <div>
            <h3 className="text-2xl font-black mb-3">
              🆓 Inscription
            </h3>

            <p>
              L'inscription au jeu Belmart Pronostic 2026 est gratuite et ouverte à tous les utilisateurs disposant d'un compte valide.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3">
              📅 Organisation du jeu
            </h3>

            <p>
              Le jeu Belmart Pronostic 2026 se déroule pendant toute la durée de la Coupe du Monde FIFA 2026.
            </p>

            <p className="mt-2">
              Les participants réalisent des pronostics sur les matchs officiels de la compétition.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3">
              🎯 Principe du jeu
            </h3>

            <p>
              Chaque utilisateur participe en effectuant des pronostics sur les matchs.
            </p>

            <p className="mt-2">
              Les points sont attribués en fonction de la précision des résultats.
            </p>

            <p className="mt-2 font-bold">
              Les pronostics peuvent être modifiés jusqu'à 30 minutes avant le coup d'envoi officiel du match.
            </p>

            <p className="mt-2">
              Passé ce délai, aucune modification ne sera autorisée.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3">
              🧮 Système de points
            </h3>

            <ul className="space-y-2">
              <li>🎯 Score exact trouvé : +5 points</li>
              <li>🟡 Bon résultat (vainqueur ou match nul mais score incorrect) : +3 points</li>
              <li>❌ Mauvais pronostic : 0 point</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3">
              🏆 Classement et récompenses
            </h3>

            <p>
              À la fin de la compétition, les joueurs les mieux classés recevront des récompenses offertes par Belmart.
            </p>

            <div className="mt-4 space-y-2">
              <p>🥇 Top 5 : Primes importantes</p>
              <p>🥈 Top 10 : Primes</p>
              <p>🥉 Top 20 : Primes</p>
            </div>

            <p className="mt-4">
              Plus le classement est élevé, plus la récompense est importante.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3">
              ⚠️ Conditions générales
            </h3>

            <ul className="space-y-2">
              <li>Toute fraude ou tentative de manipulation entraîne une disqualification immédiate.</li>
              <li>Le fair-play est obligatoire entre tous les participants.</li>
              <li>L'organisation se réserve le droit de modifier les règles ou le système de points à tout moment.</li>
              <li>Les décisions de l'organisation sont finales et sans appel.</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}