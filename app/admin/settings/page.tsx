import SignInSection from "../../../components/settings/SignInSection";

export const metadata = {
  title: "Account Settings - Yearbook Admin",
};

export default function YearbookAdminSettingsPage() {
  return (
    <div>
      <section className="p-8 max-w-5xl">
        <div className="text-3xl font-bold font-display">User Settings</div>
      </section>
      <SignInSection />
    </div>
  );
}
