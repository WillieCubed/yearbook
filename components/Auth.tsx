import { useState } from "react";
import { useAuth } from "../lib/auth";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { user, session } = await signIn();
      console.log(user, session);
    } catch (error) {
      console.error(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 flex justify-center bg-white rounded-md dark:bg-slate-900 dark:text-slate-100 text-center">
      <div className="">
        <h1 className="text-xl font-bold">Sign in to edit</h1>
        <div className="my-2">
          <button
            className="p-2 shadow-md hover:shadow-lg bg-slate-500 hover:bg-slate-600 hover:dark:bg-slate-400 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            disabled={loading}
          >
            <span>{loading ? "Loading" : "Sign in with Discord"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
