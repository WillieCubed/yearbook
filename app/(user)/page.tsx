import SiteFooter from "../../components/SiteFooter";

/**
 * A landing page where one can see a brief overview to Yearbook.
 *
 * Route: /
 */
export default function LandingPage() {
  return (
    <div className="lg:w-screen lg:h-screen flex flex-col">
      <main className="w-full flex-1 p-4 lg:p-8 bg-[#3BCEAC] dark:bg-[#333333]">
        <section className="w-full h-full lg:mx-auto max-w-4xl max-h-[66%]">
          <div className="lg:mt-32 p-16 space-y-8 border-4 border-black text-[#333333] bg-[#FFD23F] dark:text-white dark:bg-[#540D6E] drop-shadow-pop">
            <div className=" font-display font-bold text-7xl">
              Your UTD in review.
            </div>
            <div className="font-display font-bold text-5xl">
              Coming this May.
            </div>
          </div>
          <a className="mt-[144px] inline-block p-6 border-4 border-black text-[#333333] bg-[#EE4266] dark:text-white dark:bg-[#457FDC] drop-shadow-pop hover:-translate-x-[8px] hover:-translate-y-[8px] hover:drop-shadow-[16px_16px_#000000] font-display font-semibold text-3xl hover:cursor-pointer hover:text-blue-400 underline transition ease-in-out duration-200" title="Ha, did you really think I was that far along in this project?" href={process.env.WAITLIST_FORM}>Sign up for waitlist</a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
