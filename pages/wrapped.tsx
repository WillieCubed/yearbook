import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import React from "react";
import WrappedStoriesWrapper from "../components/wrapped/WrappedStoryWrapper";

const WrappedPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ photos }) => {
  const [currentMemory, setCurrentMemory] = React.useState(0);

  const handleMemoryUpdate = (newIndex: number) => {
    setCurrentMemory(newIndex);
  };

  return (
    <>
      <Head>
        <title>Clark Program Wrapped</title>
        <meta
          name="description"
          content="Review what's happened in the 2022 Clark Summer Research Program!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen lg:p-8 bg-gray-900 text-white">
        <WrappedStoriesWrapper
          memoryData={{
            memories: [],
            statistics: [],
            generated: "",
            recommendedShare: "",
          }}
          currentStoryIndex={currentMemory}
          onStoryUpdate={handleMemoryUpdate}
        />
      </main>
    </>
  );
};

type Photo = {
  id: string;
  baseUrl: string;
  type: "photo" | "video";
  contributor: string;
};

type WrappedPageParams = {
  photos: Photo[];
};

export const getServerSideProps: GetServerSideProps<WrappedPageParams> = async (
  context
) => {
  try {
    const SCOPES = [];
    const GOOGLE_PHOTOS_ALBUMS_ENDPOINT =
      "https://photoslibrary.googleapis.com/v1/albums";
    const result = await fetch(GOOGLE_PHOTOS_ALBUMS_ENDPOINT, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.GOOGLE_API_KEY}`,
      },
    });
    const photos: Photo[] = [];
    return {
      props: {
        photos,
      },
    };
  } catch (error) {
    throw error;
  }
};

export default WrappedPage;
