export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="bg-black text-white text-center p-8 rounded-2xl shadow-lg">
        <h1 className="text-5xl font-bold">Fahrzeugwelt</h1>
        <p className="mt-4 text-xl">Deine Plattform für Luxus und Geschwindigkeit</p>
      </header>

      <section className="max-w-4xl mx-auto mt-12 bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-red-600 mb-6">Willkommen auf unserer Kaufseite</h2>
        <p className="text-lg mb-4">
          Entdecke eine exklusive Auswahl an Motorrädern, Flugzeugen, Autos und Trucks – alles an einem Ort.
        </p>
        <p className="text-lg mb-4">
          Egal ob du nach Adrenalin auf zwei Rädern suchst, den Himmel erobern oder mit kraftvollen Trucks die Straße beherrschen willst – 
          hier findest du dein Traumfahrzeug.
        </p>
        <p className="text-lg">
          Durchstöbere unsere Kategorien, finde dein nächstes Abenteuer und kaufe Fahrzeuge mit nur wenigen Klicks.
        </p>
      </section>
    </div>
  );
}
