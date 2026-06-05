export default function ReglementPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-4 md:p-6 overflow-x-hidden"
      style={{
        backgroundImage: "url('/mondial2.png')",
      }}
    >
      <div className="mb-8">
        <a
          href="/"
          className="bg-yellow-400 text-[#082567] px-6 py-3 rounded-2xl font-black hover:bg-yellow-300 transition"
        >
          ← Retour à l'accueil
        </a>
      </div>

      <div className="bg-white/95 backdrop-blur-sm text-[#082567] rounded-3xl p-8 shadow-2xl">
        <h2 className="text-4xl font-black mb-6">
          BELMART PRONOSTIC 2026
        </h2>

        <div className="space-y-8 text-lg">

          <div>
            <h3 className="text-2xl font-black mb-3">🆓 Inscription</h3>
            <p>
              La participation au jeu Belmart Pronostic 2026 est entièrement gratuite.
            </p>
            <p className="mt-2">
              Le jeu est ouvert à toute personne disposant d’un compte utilisateur valide sur la plateforme Belmart.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3">📅 Période du jeu</h3>
            <p>
              Le concours se déroule pendant toute la durée de la Coupe du Monde FIFA 2026, depuis le match d’ouverture jusqu’à la finale.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3">🎯 Principe du jeu</h3>

            <p>
              Les participants doivent pronostiquer le score des matchs officiels de la Coupe du Monde FIFA 2026.
            </p>

            <p className="mt-2">
              Chaque pronostic doit être enregistré avant le début du match concerné.
            </p>

            <p className="mt-2 font-bold">
              Les pronostics peuvent être modifiés jusqu’à 20 minutes avant le coup d’envoi officiel.
            </p>

            <p className="mt-2">
              Passé ce délai, aucun changement ne sera autorisé.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3">🧮 Attribution des points</h3>

            <h4 className="text-xl font-black mb-2">Phase de groupes</h4>

            <ul className="space-y-2">
              <li>🎯 Score exact trouvé : 5 points</li>
              <li>✅ Bon résultat trouvé (vainqueur ou match nul, sans le score exact) : 1 point</li>
              <li>❌ Mauvais pronostic : 0 point</li>
            </ul>

            <div className="mt-4">
              <p className="font-bold">Exemple :</p>
              <p className="mt-2">Résultat du match : Haïti 2 - 1 Écosse</p>

              <ul className="mt-2 space-y-2">
                <li>🎯 Pronostic : Haïti 2 - 1 Écosse → 5 points</li>
                <li>✅ Pronostic : Argentine 1 - 0 Algérie → 1 point</li>
                <li>❌ Pronostic : Haïti 1 - 1 Brésil → 0 point</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3">
              🏆 Phase à élimination directe
            </h3>

            <p>
              À partir des matchs à élimination directe, les points sont doublés afin de maintenir le suspense.
            </p>

            <ul className="space-y-2 mt-3">
              <li>🎯 Score exact trouvé : 10 points</li>
              <li>✅ Bon résultat trouvé : 2 points</li>
              <li>❌ Mauvais pronostic : 0 point</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3">🎁 Récompenses</h3>

            <div className="space-y-2">
              <p>🥇 1ère place : Grand Prix</p>
              <p>🥈 2ème place : Deuxième Prix</p>
              <p>🥉 3ème place : Troisième Prix</p>
              <p>🏅 Places 4 à 10 : Récompenses Premium</p>
              <p>🎖️ Places 11 à 25 : Récompenses Belmart</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3">
              ⚠️ Conditions générales
            </h3>

            <ul className="space-y-2">
              <li>Toute tentative de fraude entraîne une disqualification immédiate.</li>
              <li>Le fair-play est obligatoire entre tous les participants.</li>
              <li>Les décisions de Belmart sont finales et sans appel.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
