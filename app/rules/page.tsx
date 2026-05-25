import Image from "next/image";

export default function RulesPage() {

  return (

    <div className="min-h-screen bg-gradient-to-b from-[#001B70] to-[#002C9B] text-white px-6 py-10">

      {/* BACK HOME BUTTON */}
      <div className="mb-8">

        <a
          href="/"
          className="inline-block bg-white text-[#001B70] font-black px-6 py-3 rounded-2xl shadow-xl hover:scale-105 transition"
        >
          ← Retour à l'accueil
        </a>

      </div>

      {/* HEADER */}
      <div className="flex flex-col items-center mb-14">

        <Image
          src="/belmart-logo.jpeg"
          alt="Belmart"
          width={120}
          height={120}
          className="rounded-3xl shadow-2xl mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-black text-center uppercase leading-tight">

          Règlement Officiel

        </h1>

        <div className="bg-cyan-400 text-[#001B70] px-6 py-2 rounded-xl font-black text-2xl mt-5 shadow-lg">

          Belmart 2026

        </div>

      </div>

      {/* RULES */}
      <div className="max-w-5xl mx-auto bg-white text-[#001B70] rounded-3xl p-10 shadow-2xl space-y-10">

        <div>

          <h2 className="text-3xl font-black mb-4">
            ⚽ Comment jouer
          </h2>

          <p className="text-xl">
            Les participants doivent prédire les scores
            des matchs de la Coupe du Monde FIFA 2026.
          </p>

        </div>

        <div>

          <h2 className="text-3xl font-black mb-4">
            🏆 Système de points
          </h2>

          <ul className="space-y-4 text-xl">

            <li>
              ✅ Score exact = 3 points
            </li>

            <li>
              ✅ Bon vainqueur = 1 point
            </li>

            <li>
              ❌ Mauvais résultat = 0 point
            </li>

          </ul>

        </div>

        <div>

          <h2 className="text-3xl font-black mb-4">
            🔒 Verrouillage des pronostics
          </h2>

          <p className="text-xl">
            Les pronostics sont automatiquement
            verrouillés avant le début des matchs.
          </p>

        </div>

        <div>

          <h2 className="text-3xl font-black mb-4">
            📊 Classement
          </h2>

          <p className="text-xl">
            Le classement général est mis à jour
            automatiquement après chaque match.
          </p>

        </div>

        <div>

          <h2 className="text-3xl font-black mb-4">
            🎁 Récompenses
          </h2>

          <p className="text-xl">
            Les meilleurs pronostiqueurs recevront
            des cadeaux et bons d’achat Belmart.
          </p>

        </div>

      </div>

    </div>

  );

}