import "@/app/_styles/globals.css";
import Header from "./_components/Header";

import { Roboto } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import Footer from "./_components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
});

export const metadata = {
  title: {
    template: "%s / Laxita Jain",
    default: "Laxita Jain",
  },
  description: "A Portfolio Website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${dancing.variable} bg-primary-90 text-accent-100 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 mt-8 px-4 pt-32 py-6 grid mb-4">
          <main className="max-w-7xl  mx-auto w-full">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
