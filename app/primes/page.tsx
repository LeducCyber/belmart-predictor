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
           Liste des Primes
        </h1>

        <div className="space-y-4 text-[#082567]">

          <div className="bg-yellow-100 p-4 rounded-2xl">
            <h2 className="text-2xl font-black"> 1ère Place</h2>
            <p>Bon d'achat Belmart HTG 150,000</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-2xl">
            <h2 className="text-2xl font-black"> 2ème Place</h2>
            <p>Bon d'achat Belmart HTG 125,000</p>
          </div>

          <div className="bg-orange-100 p-4 rounded-2xl">
            <h2 className="text-2xl font-black"> 3ème Place</h2>
            <p>Bon d'achat Belmart HTG 100,000</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">4ème Place</h2>
            <p>1 Caisse Casamigos Tequila</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">5ème Place</h2>
            <p>50 Caisses Assortiment de Produits Coca Cola</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">6ème Place</h2>
            <p>45 Caisses Assortiment de Produits Coca Cola</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">7ème Place</h2>
            <p>1 Caisse Johnnie Walker Red Label</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">8ème Place</h2>
            <p>40 Caisses Assortiment de Produits Coca Cola</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">9ème Place</h2>
            <p>1 Caisse Ménage-A-Trois Vin</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">10ème Place</h2>
            <p>35 Caisses Assortiment de Produits Coca Cola</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">11ème Place</h2>
            <p>1 Caisse B&W Blended Scotch Whisky</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">12ème Place</h2>
            <p>30 Caisses Assortiment de Produits Coca Cola</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">13ème Place</h2>
            <p>1 Caisse Smirnoff Vodka</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">14ème Place</h2>
            <p>5 Caisses Assortiment de Produits Frito-Lay</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">15ème Place</h2>
            <p>25 Caisses Assortiment de Produits Coca Cola</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">16ème Place</h2>
            <p>25 Caisses Assortiment de Produits Coca Cola</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">17ème Place</h2>
            <p>25 Caisses Assortiment de Produits Coca Cola</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">18ème Place</h2>
            <p>25 Caisses Assortiment de Produits Coca Cola</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">19ème Place</h2>
            <p>25 Caisses Assortiment de Produits Coca Cola</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-black">20ème Place</h2>
            <p>1 Caisse Pitars Prosecco Rosé</p>
          </div>

        </div>
      </div>
    </div>
  );
}