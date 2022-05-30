/**
 * The site-wide footer with a link to the author's website.
 */
export default function SiteFooter() {
  return (
    <footer className="bottom-0 relative p-4 text-center font-bold bg-slate-200 dark:bg-slate-800">
      Built with ❤️ by{" "}
      <a
        className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
        href="https://williecubed.me"
      >
        Willie Chalmers III
      </a>
    </footer>
  );
}
