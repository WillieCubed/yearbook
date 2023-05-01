"use client";

import Link from "next/link";

/**
 * The site-wide footer with a link to the author's website.
 */
export default function SiteFooter() {
  return (
    <footer className="border-t-4 border-black p-3 font-bold font-display bg-slate-200 dark:bg-slate-800">
      <section className="pb-2 px-4 max-w-4xl mx-auto md:grid md:grid-cols-2 md:space-x-4 prose dark:prose-invert prose-neutral hover:prose-a:text-blue-400 prose-a:transition prose-a:ease-in-out prose-a:duration-200 prose-a:font-semibold">
        <div>
          Check us out on{" "}
          <a className="" href="https://github.com/WillieCubed/yearbook">
            GitHub
          </a>
        </div>
        <div className="space-y-2 text-right">
          <Link href="/admin">Admin Dashboard</Link>
        </div>
      </section>
      <div className="text-center">
        Built with ❤️ by{" "}
        <a
          className="text-blue-500 dark:text-primary hover:text-blue-600 dark:hover:text-blue-200 focus:text-blue-600 dark:focus:text-blue-200 transition ease-in-out duration-200"
          href="https://williecubed.me"
        >
          Willie Chalmers III
        </a>
      </div>
    </footer>
  );
}
