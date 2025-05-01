import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Kumba - Trouvez votre maison</title>
      </Head>
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-center">Bienvenue sur Kumba</h1>
      </header>
      <main className="p-4 text-center">
        <p className="text-lg">Trouvez facilement des propriétés à louer partout au Bénin.</p>
      </main>
    </div>
  )
}