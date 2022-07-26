import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/work-sans";

function PointsApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark:bg-slate-900 dark:text-slate-100 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default PointsApp;
