import type { NextPage } from "next";
import Head from "next/head";
import type { PointAwardRecord } from "../lib/points";
import { useSupabase } from "../lib/hooks/supabase";
import PointsTable from "../components/PointsTable";
import testData from "../lib/data/test.json";
import SiteFooter from "../components/SiteFooter";
import AccountInfo from "../components/AccountInfo";
import Auth from "../components/Auth";

const HomePage: NextPage = () => {
  const session = useSupabase();

  // TODO: Replace me with database
  const records: PointAwardRecord[] = testData.map(
    ({ timestamp, ...fields }) => {
      return {
        timestamp: new Date(timestamp),
        ...fields,
      };
    }
  );

  return (
    <>
      <Head>
        <title>Clark Program Point Tracker</title>
        <meta
          name="description"
          content="Keep up with your house's points in the 2022 Clark Summer Research Program!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="p-12 text-4xl font-bold text-center bg-blue-200 dark:bg-blue-800">
        Clark Point Tracker
      </header>
      <main className="min-h-[80vh] lg:mx-auto max-w-xl">
        <div>
          {!session ? (
            <Auth />
          ) : (
            <AccountInfo key={session.user.id} session={session} />
          )}
        </div>
        <PointsTable records={records} />
      </main>
      <SiteFooter />
    </>
  );
};

export default HomePage;
