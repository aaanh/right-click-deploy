import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import { AiFillGithub } from "react-icons/ai";
import { FaRegHandPointer } from "react-icons/fa";
import Modal from "~/components/Modal";

const Home: NextPage = () => {
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);

  function handleManifestPopup() {
    setIsManifestoOpen(!isManifestoOpen);
  }

  return (
    <>
      <Head>
        <title>Right-Click Deploy</title>
        <meta
          name="description"
          content="Right-Click Deploy Everything into Production."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#249e8a] to-[#1b435e]"> */}
      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <header className="border-b-2 border-b-white py-4">
          <h1 className="text-4xl font-bold text-white">
            ( Right-Click Deploy ) &trade;
          </h1>
        </header>
        <FaRegHandPointer className="text-4xl text-white"></FaRegHandPointer>
        <br></br>
        <section className="flex-col items-center justify-center text-6xl">
          <h1 className="animate-text text-4xl py-2 bg-gradient-to-r text-transparent bg-clip-text from-rose-400 via-green-300 to-blue-300 inline-block">
            &quot;Wait, so how did you guys deploy it?&quot;
          </h1>
        </section>

        <section className="flex items-center justify-center space-x-4 text-neutral-200 mt-6">
          <p>Learn more:</p>
          <a target="_blank" rel="noreferrer" href="https://github.com/aaanh/right-click-deploy">
            <AiFillGithub size={36}></AiFillGithub>
          </a>
          <button className="text-2xl" onClick={handleManifestPopup}>
            📜
          </button>
        </section>
      </main>
      {isManifestoOpen && (
        <Modal handlePopup={handleManifestPopup}>
          <div className="m-2 max-h-[600px]">
            <h1 className="w-full border-b border-b-black pb-4 mb-2 text-2xl">
              Right-Click Deploy Manifesto
            </h1>
            <ol className="list-decimal">
              <li>
                We demand the right to deploy our code with a simple right-click,
                just like we demand the right to eat tacos on Tuesdays.
              </li>
              <li>
                We reject the notion that deployment should be a long and
                complicated process that requires sacrificing a goat under a full
                moon.
              </li>
              <li>
                We believe that deployment should be so easy that even your
                grandma can do it (assuming she knows how to use a computer).
              </li>
              <li>
                We refuse to accept that deployment should involve anything more
                than clicking a button and then sitting back with a cold beverage.
              </li>
              <li>
                We declare that any company that doesn&apos;t support Right-click
                Deploy is stuck in the past and is probably still using Internet
                Explorer.
              </li>
              <li>
                We propose that any developer who creates a deployment process
                that takes more than five minutes should be forced to wear a dunce
                cap for a week.
              </li>
              <li>
                We assert that deployment should be as easy as ordering a pizza
                (except without the greasy mess).
              </li>
              <li>
                We demand that any developer who creates a deployment process that
                involves a series of arcane commands and incantations be banished
                to a remote island (preferably one without Wi-Fi).
              </li>
              <li>
                We affirm that Right-click Deploy is not just a convenience, it&apos;s
                a way of life.
              </li>
              <li>
                We declare that anyone who opposes Right-click Deploy is an enemy
                of progress and is probably still using a flip phone.
              </li>
            </ol>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Home;
