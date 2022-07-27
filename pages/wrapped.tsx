import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import React from "react";
import WrappedStoriesWrapper from "../components/wrapped/WrappedStoryWrapper";
import { useAuth } from "../lib/auth";
import { getDiscordInfo } from "../lib/discord";
import { MemoryCollection } from "../lib/wrapped";
import { getMemories } from "./api/memories";

const WrappedPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ memoryData, customized }) => {
  const { isSignedIn, signIn } = useAuth();
  React.useEffect(() => {
    const handleSignIn = async () => {
      await signIn();
      console.log("Signed in again");
    };
    if (customized) {
      if (!isSignedIn) {
        handleSignIn();
      }
    }
  });

  const [currentMemory, setCurrentMemory] = React.useState(0);

  const handleMemoryUpdate = (newIndex: number) => {
    setCurrentMemory(newIndex);
  };

  return (
    <>
      <Head>
        <title>Clark &#40;2022&#41; Wrapped</title>
        <meta
          name="description"
          content="Review what's happened in the 2022 Clark Summer Research Program!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen lg:p-8 bg-gray-900 text-white">
        <WrappedStoriesWrapper
          memoryData={memoryData}
          currentStoryIndex={currentMemory}
          onStoryUpdate={handleMemoryUpdate}
        />
      </main>
    </>
  );
};

type WrappedPageParams = {
  memoryData: MemoryCollection;
  customized: boolean;
};

export const getServerSideProps: GetServerSideProps<WrappedPageParams> = async (
  context
) => {
  let isCustomized = true;
  try {
    if (context.query.customized) {
      // TODO: unfudge this
      // const token = context.req.cookies['DISCORD_TOKEN'];
      const token = "token";
      if (!token) {
        console.error(
          "Discord token undefined, providing uncustomized experience"
        );
        isCustomized = false;
      }
      console.log("Customizing experience");
      // TODO: Check if customized flag is present to do customized experience
      const { id } = await getDiscordInfo(token);
      const memoryCollection = await getMemories(id);
      return {
        props: {
          memoryData: memoryCollection,
          customized: isCustomized,
        },
      };
    }

    isCustomized = false;
    const memoryCollection = await getMemories(null);
    return {
      props: {
        memoryData: memoryCollection,
        customized: isCustomized,
      },
    };
  } catch (error) {
    throw error;
  }
};

export default WrappedPage;
