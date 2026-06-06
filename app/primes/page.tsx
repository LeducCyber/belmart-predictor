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
          href="/reglement"
          className="bg-yellow-400 text-[#082567] px-6 py-3 rounded-2xl font-black hover:bg-yellow-300 transition"
        >
          ← Retour au règlement
        </a>
      </div>

      <div className="bg-white/95 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-black text-[#082567] mb-8 text-center">
          🎁 Liste des Primes
        </h1>

        <div className="space-y-4 text-[#082567]">

          <div className="bg-yellow-100 p-4 rounded-2xl">
            <h2 className="text-2xl font-black">🥇 1ère Place</h2>
            <p>150 000 Gourdes</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-2xl">
            <h2 className="text-2xl font-black">🥈 2ème Place</h2>
            <p>125 000 Gourdes</p>
          </div>

          <div className="bg-orange-100 p-4 rounded-2xl">
            <h2 className="text-2xl font-black">🥉 3ème Place</h2>
            <p>100 000 Gourdes</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">4ème Place</h2>
            <p>5 CS Battery (AFD)</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">5ème Place</h2>
            <p>1 CS J&W Black & White 140 (AFD)</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">6ème Place</h2>
            <p>1 CS Smirnoff (AFD)</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">7ème Place</h2>
            <p>1 CS Menage à Trois (AFD)</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">8ème Place</h2>
            <p>1 CS Casamigos 440 (AFD)</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">9ème Place</h2>
            <p>5 CS Frito Lay (AFD)</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">10ème Place</h2>
            <p>1 CS Pitars Prosecco (AFD)</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">11ème Place</h2>
            <p>5 CS Freeze (AFD)</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">12ème Place</h2>
            <p>3 CS Buzz (AFD)</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">13ème Place</h2>
            <p>1 CS J&W Red Label (AFD)</p>
          </div>

          <div className="bg-green-100 p-4 rounded-2xl shadow">
            <h2 className="font-black">14ème Place</h2>
            <p>50 Caisses La Couronne</p>
          </div>

          <div className="bg-green-100 p-4 rounded-2xl shadow">
            <h2 className="font-black">15ème Place</h2>
            <p>45 Caisses La Couronne</p>
          </div>

          <div className="bg-green-100 p-4 rounded-2xl shadow">
            <h2 className="font-black">16ème Place</h2>
            <p>35 Caisses La Couronne</p>
          </div>

          <div className="bg-green-100 p-4 rounded-2xl shadow">
            <h2 className="font-black">17ème Place</h2>
            <p>25 Caisses La Couronne</p>
          </div>

          <div className="bg-green-100 p-4 rounded-2xl shadow">
            <h2 className="font-black">18ème Place</h2>
            <p>20 Caisses La Couronne</p>
          </div>

          <div className="bg-green-100 p-4 rounded-2xl shadow">
            <h2 className="font-black">19ème Place</h2>
            <p>15 Caisses La Couronne</p>
          </div>

          <div className="bg-green-100 p-4 rounded-2xl shadow">
            <h2 className="font-black">20ème Place</h2>
            <p>10 Caisses La Couronne</p>
          </div>

        </div>
      </div>
    </div>
  );
}