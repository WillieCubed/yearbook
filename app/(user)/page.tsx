import SiteFooter from "../../components/SiteFooter";

/**
 * A landing page where one can see a brief overview to Yearbook.
 *
 * Route: /
 */
export default function LandingPage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <main className="w-full flex-1 p-4 lg:p-8 dark:bg-[#333333]">
        <section className="w-full h-full lg:mx-auto max-w-4xl max-h-[66%] flex flex-col justify-between">
          <div className="space-y-8">
            <div className="mt-16 lg:mt-32 font-display font-bold text-7xl">
              Your UTD in review.
            </div>
            <div className="font-display font-bold text-5xl">
              Coming this May.
            </div>
          </div>
          <a className="font-display font-semibold text-3xl hover:cursor-pointer hover:text-blue-400 underline transition ease-in-out duration-200" title="Ha, did you really think I was that far along in this project?" href={process.env.WAITLIST_FORM}>Sign up for waitlist</a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
