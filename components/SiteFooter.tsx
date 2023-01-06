/**
 * The site-wide footer with a link to the author's website.
 */
export default function SiteFooter() {
  return (
    <footer className="bottom-0 relative p-3 text-center font-bold font-display bg-slate-200 dark:bg-slate-800">
      <a
        className="text-primary hover:text-blue-600 dark:hover:text-blue-200 focus:text-blue-600 dark:focus:text-blue-200 transition ease-in-out duration-200"
        href="https://github.com/WillieCubed/yearbook"
      >
        Built
      </a>{" "}
      with ❤️ by{" "}
      <a
        className="text-primary hover:text-blue-600 dark:hover:text-blue-200 focus:text-blue-600 dark:focus:text-blue-200 transition ease-in-out duration-200"
        href="https://williecubed.me"
      >
        Willie Chalmers III
      </a>
    </footer>
  );
}
