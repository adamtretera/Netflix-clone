import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <Head>
        <title>Netflix clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center ">
        <h1 className="text-5xl text-white font-bold">Neomezená podívaná na filmy, TV pořady a další.</h1>
        <h2 className="text-3xl text-white my-4">Dívejte se kdekoli. Zrušte kdykoli.</h2>
        <p className="text-3xl text-white">Jste připraveni se dívat? Pro vytvoření nebo obnovení účtu zadejte e-mail.</p>


      </main>
  </div>
  )
}
