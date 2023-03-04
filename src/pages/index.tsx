import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { AiFillGithub, AiFillMail } from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>League of MLOps</title>
        <meta
          name="description"
          content="League of MLOps. Applied ML for elevating your LoL skill cap."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#249e8a] to-[#1b435e]"> */}
      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <header className="border-b-2 border-b-white py-4">
          <h1 className="text-4xl font-bold text-white">League of MLOps</h1>
        </header>
        <br></br>
        <section className="flex flex-col items-center justify-center text-6xl font-light text-cyan-300">
          Cool stuff coming soon fr fr
        </section>
        <br></br>
        <section className="flex items-center justify-center space-x-4 text-neutral-200">
          <p>Stay tuned through:</p>
          <Link href="https://github.com/league-of-mlops">
            <AiFillGithub size={36}></AiFillGithub>
          </Link>
          <Link href="mailto:contact@mlops.lol">
            <AiFillMail size={36}></AiFillMail>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
