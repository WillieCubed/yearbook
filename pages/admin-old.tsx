import {
  NextPage,
  InferGetServerSidePropsType,
  GetServerSideProps,
} from "next";
import SiteFooter from "../components/SiteFooter";
import { oauth2Client } from "../lib/server/server-auth";

const AdminPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ authorizationUrl }) => {
  const loadPhotosInDb = () => {
    // TODO: Fetch image files and store in own database
  };

  return (
    <div>
      <header className="p-4 text-center text-xl bg-gray-200 dark:bg-gray-800">
        <div className="max-w-2xl mx-auto font-bold">Admin Dashboard</div>
      </header>
      <main className="min-h-[90vh] max-w-3xl mx-auto p-4 text-center">
        <div className="py-4">
          <h1 className="my-2 text-xl">Reauthorize DB</h1>
          <p>
            To push your refresh token to the database so the API may use it,
            use this link.
          </p>
          <a
            className="my-2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 focus:text-blue-600 dark:focus:text-blue-400 transition ease-in-out duration-200"
            href={authorizationUrl}
          >
            Sync Google Token
          </a>
        </div>
        <div className="py-4">
          <h1 className="my-2 text-xl">Sync photos to DB</h1>
          <button
            className="my-2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 focus:text-blue-600 dark:focus:text-blue-400 transition ease-in-out duration-200"
            onClick={loadPhotosInDb}
          >
            Sync
          </button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

type AdminPageProps = {
  authorizationUrl: string;
};

export default AdminPage;

export const getServerSideProps: GetServerSideProps<AdminPageProps> = async (
  context
) => {
  // TODO: Detect if admin has refresh token stored

  const SCOPES = ["https://www.googleapis.com/auth/photoslibrary.readonly"];

  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    include_granted_scopes: true,
    prompt: "consent",
    redirect_uri: `${process.env.ROOT_DOMAIN}/api/auth`,
  });
  // context.res.writeHead(301, {
  //   Location: authorizationUrl,
  // });

  return {
    props: {
      authorizationUrl,
    },
  };
};
