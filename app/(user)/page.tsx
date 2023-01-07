import SiteFooter from "../../components/SiteFooter";

/**
 * A landing page where one can see a brief overview to Yearbook.
 *
 * Route: /
 */
export default function LandingPage() {
  return (
    <div className="h-screen">
      <main className="h-full p-8 bg-[#3BCEAC] dark:bg-[#540D6E]">
        <section className="mx-auto max-w-4xl">
          <div className="mt-16 lg:mt-32 p-8 lg:p-16 border-4 border-black text-[#333333] bg-[#FFD23F] dark:text-white dark:bg-[#2767CE] drop-shadow-pop">
            <div className="font-display font-bold text-4xl lg:text-7xl">
              Your UTD in review.
            </div>
            <div className="mt-4 lg:mt-8 font-display font-bold lg:text-5xl">
              Coming this May.
            </div>
          </div>
          <a
            className="mt-[72px] lg:mt-[144px] inline-block p-6 border-4 border-black text-[#333333] bg-[#EE4266] dark:text-white dark:bg-[#3BCEAC] drop-shadow-pop hover:-translate-x-[8px] hover:-translate-y-[8px] hover:drop-shadow-pop-1 focus:-translate-x-[8px] focus:-translate-y-[8px] focus:drop-shadow-pop-1 font-display font-semibold text-3xl hover:cursor-pointer hover:text-blue-400 underline transition ease-in-out duration-200"
            title="Ha, did you really think I was that far along in this project?"
            href={process.env.WAITLIST_FORM}
          >
            Sign up for waitlist
          </a>
        </section>
      </main>
      <div className="bottom-0 absolute left-0 right-0">
        <SiteFooter />
      </div>
    </div>
  );
}
