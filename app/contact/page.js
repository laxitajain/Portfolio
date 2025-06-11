import Contact from "../_components/Contact";

export const metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <div>
      <h2 className="text-accent-40 text-center text-lg sm:text-xl mb-4">
        Want to collaborate, have project ideas, or curious about something? Hit
        me up!
      </h2>
      <Contact />
    </div>
  );
}
