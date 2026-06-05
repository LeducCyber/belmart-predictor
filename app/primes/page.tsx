export default function PrimesPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-4 md:p-6"
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

      <div className="bg-white/95 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-black text-[#082567] mb-8 text-center">
          🎁 Liste des Primes
        </h1>

        <div className="space-y-4 text-[#082567]">

          <div className="bg-yellow-100 p-4 rounded-2xl">
            <h2 className="text-2xl font-black">🥇 1ère Place</h2>
            <p>Grand Prix</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-2xl">
            <h2 className="text-2xl font-black">🥈 2ème Place</h2>
            <p>Deuxième Prix</p>
          </div>

          <div className="bg-orange-100 p-4 rounded-2xl">
            <h2 className="text-2xl font-black">🥉 3ème Place</h2>
            <p>Troisième Prix</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-2xl">
            <h2 className="text-2xl font-black">🏅 4 à 10</h2>
            <p>Récompenses Premium</p>
          </div>

          <div className="bg-green-100 p-4 rounded-2xl">
            <h2 className="text-2xl font-black">🎖️ 11 à 25</h2>
            <p>Récompenses Belmart</p>
          </div>

        </div>
      </div>
    </div>
  );
}