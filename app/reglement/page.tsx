export default function ReglementPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-4 md:p-6 overflow-x-hidden"
      style={{
        backgroundImage: "url('/pronostic.png')",
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
            <h3 className="text-2xl font-black mb-3"> Inscription</h3>
            <p>
              La participation au jeu Belmart Pronostic 2026 est entièrement gratuite.
            </p>
            <p className="mt-2">
              Le jeu est ouvert à toute personne disposant d’un compte utilisateur valide sur la plateforme Belmart.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3"> Période du jeu</h3>
            <p>
              Le concours se déroule pendant toute la durée de la Coupe du Monde FIFA 2026,
              depuis le match d’ouverture jusqu’à la finale.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3"> Principe du jeu</h3>

            <p>
              Les participants doivent pronostiquer le score des matchs officiels
              de la Coupe du Monde FIFA 2026.
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
            <h3 className="text-2xl font-black mb-3"> Attribution des points</h3>

            <h4 className="text-xl font-black mb-3"> Phase de groupes</h4>

            <p className="mb-2 font-bold">Pour chaque match :</p>

            <ul className="space-y-2 mb-4">
              <li> Score exact trouvé (score des deux équipes correct) : 5 points</li>
              <li> Bon résultat trouvé (vainqueur ou match nul correct, mais score inexact) : 1 point</li>
              <li> Mauvais pronostic : 0 point</li>
            </ul>

            <h4 className="text-lg font-black mb-2">Exemples</h4>

            <p className="mb-3">
              <strong>Résultat officiel :</strong> Haïti 2 - 1 Écosse
            </p>

            <div className="overflow-x-auto mb-6">
            <table className="w-auto">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border p-2 text-left">Pronostic</th>
                    <th className="border p-2 text-left">Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Haïti 2 - 1 Écosse</td>
                    <td className="border p-2"> 5 points</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Haïti 3 - 1 Écosse</td>
                    <td className="border p-2"> 1 point</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Haïti 1 - 0 Écosse</td>
                    <td className="border p-2"> 1 point</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Haïti 1 - 1 Écosse</td>
                    <td className="border p-2"> 0 point</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Écosse 2 - 1 Haïti</td>
                    <td className="border p-2"> 0 point</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-black mb-3">
               Phase à élimination directe
            </h3>

            <p className="mb-2 font-bold">Pour chaque match :</p>

            <ul className="space-y-2 mb-4">
              <li> Score exact trouvé : 10 points</li>
              <li> Bon résultat trouvé (équipe qualifiée ou vainqueur correct, mais score inexact) : 2 points</li>
              <li> Mauvais pronostic : 0 point</li>
            </ul>

            <h4 className="text-lg font-black mb-2">Exemple</h4>

            <p className="mb-3">
              <strong>Résultat officiel :</strong> France 2 - 1 Brésil
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-auto">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="border p-2 text-left">Pronostic</th>
                    <th className="border p-2 text-left">Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">France 2 - 1 Brésil</td>
                    <td className="border p-2"> 10 points</td>
                  </tr>
                  <tr>
                    <td className="border p-2">France 1 - 0 Brésil</td>
                    <td className="border p-2"> 2 points</td>
                  </tr>
                  <tr>
                    <td className="border p-2">France 3 - 2 Brésil</td>
                    <td className="border p-2"> 2 points</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Brésil 2 - 1 France</td>
                    <td className="border p-2"> 0 point</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-black mb-3"> Classement</h3>

            <p className="mb-3">
              Les participants sont classés selon leur nombre total de points.
            </p>

            <p className="font-bold mb-2">En cas d'égalité :</p>

            <ul className="space-y-2">
              <li>• Le plus grand nombre de scores exacts trouvés.</li>
              <li>• Le plus grand nombre de pronostics enregistrés.</li>
              <li>
                • Si l'égalité persiste, les participants conservent le même rang jusqu'à la prochaine mise à jour du classement.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-3">
              <h3 className="text-2xl font-black"> Récompenses</h3>

              <a
                href="/primes"
                className="bg-yellow-400 text-[#082567] px-3 py-1 rounded-xl font-black text-sm hover:bg-yellow-300 transition"
              >
                 Liste des primes
              </a>
            </div>

            <div className="space-y-2">
              <p> 1ère place : Grand Prix</p>
              <p> 2ème place : Deuxième Prix</p>
              <p> 3ème place : Troisième Prix</p>
              <p> Places 4 à 10 : Primes</p>
              <p> Places 11 à 20 : Primes</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3">
               Conditions générales
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
