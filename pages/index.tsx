import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import SiteFooter from "../components/SiteFooter";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Clark Summer Research Program &#40;2022&#41; Dashboard</title>
        <meta
          name="description"
          content="See how the Clark Summer Research Program is doing."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen h-screen flex flex-col">
        <main className="p-4 lg:p-8 flex-1 dark:bg-gray-900 lg:mx-auto max-w-4xl grid place-content-center scrollbar scrollbar-track-gray-700 scrollbar-thumb-gray-600">
          <div className="text-center">
            <div className="mx-auto font-bold font-display text-5xl lg:text-6xl text-center">
              It&apos;s been a fun summer.
            </div>
            <div className="mx-auto mt-8 font-semibold font-display text-4xl lg:text-5xl text-center">
              Let's wrap this up.
            </div>
            <div className="mt-12">
              <Link href="/wrapped?customized=1">
                <a className="inline-block mx-auto p-4 font-bold text-xl text-primary text-center rounded-lg border-4 border-primary hover:bg-primary hover:text-gray-800 hover:transition-all focus:bg-primary focus:text-gray-800 focus:transition-all ease-in-out duration-300">
                  My Wrapped
                </a>
              </Link>
            </div>
            <div className="mt-4">
              <Link href="/wrapped">
                <a className="inline-block mx-auto p-4 font-bold text-lg text-secondary text-center rounded-lg hover:bg-secondary hover:text-gray-800 hover:transition-all focus:bg-secondary focus:text-gray-800 focus:transition-all ease-in-out duration-300 opacity-80">
                  Wrapped Without Discord
                </a>
              </Link>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
};

export default HomePage;
