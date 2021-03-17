import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";
export default function Home() {
	const [session, loading] = useSession();
	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen py-2 "
			style={{
				"background-image":
					"linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(./hero.jpeg) ",
			}}
		>
			<Head>
				<title>Netflix clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-col items-center">
				{!session && (
					<>
						Not signed in <br />
						<button>Sign in</button>
					</>
				)}
				{session && (
					<>
						Signed in as {session.user.email} <br />
						<button onClick={() => signOut()}>Sign out</button>
					</>
				)}
				<h1 className="text-5xl text-white font-bold max-w-xl text-center">
					Neomezená podívaná na filmy, TV pořady a další.
				</h1>
				<h2 className="text-2xl text-white mt-4 mb-8">
					Dívejte se kdekoli. Zrušte kdykoli.
				</h2>
				<p className="text-white text-xl">
					Jste připraveni se dívat? Pro vytvoření nebo obnovení účtu zadejte
					e-mail.
				</p>
				<div className="flex mt-6">
					<input
						placeholder="Emailová adresa"
						className="p-4 rounded-none bg-white min-w-10 min-w-[30vw]"
					/>
					<button
						onClick={() => signIn()}
						className="text-lg text-white bg-[#e50914]  font-light px-3 flex items-center "
					>
						Vyzkoušet na 30 zadarma
						<svg
							className="w-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							></path>
						</svg>
					</button>
				</div>
				<p className="text-white text-xl pt-12">
					Nabídka je určená jenom pro nové členy.
				</p>
			</main>
		</div>
	);
}
