import Link from "next/link";
import CustomTypewriter from "./_components/Typewriter";
import Image from "next/image";
import Button from "./_components/Button";

export default function Page() {
  return (
    <main className="mx-auto px-8 pt-2 pb-0 md:mb-[-126px] min-h-screen md:px-16">
      <div className="container mx-auto flex flex-col py-12">
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex flex-col justify-center text-center lg:text-left lg:w-1/2">
            <h3 className="mb-6 text-xl sm:text-xl font-bold font-title-big leading-tight lg:text-3xl">
              <span className="text-accent-50 flex">
                Hi, I&#39;m a&nbsp;
                <span className="text-secondary-10">
                  <CustomTypewriter />
                </span>
              </span>
            </h3>
            <p className="mb-6 text-base sm:text-lg md:text-md font-body-1 text-justify font-medium leading-7 text-primary-200">
              In a world teeming with code, I strive to build meaning. My
              commitment lies in more than writing clean code; it&apos;s about
              decoding chaos and delivering web solutions that breathe purpose
              into pixels. I aim to make interfaces intuitive, performance
              sharp, and ideas concrete. I believe software should not just
              function — it should resonate, empower, and simplify lives. From
              frictionless user flows to scalable architectures, my passion is
              rooted in bridging problems to practical solutions. I see
              challenges as creative blueprints, each waiting to be transformed
              into impact. Whether it&apos;s through frontend finesse or backend
              strategy, I&apos;m here to build tools that don&apos;t just work —
              but catalyze.
            </p>
            <div className="flex flex-col items-center lg:flex-row">
              <Link
                href="https://drive.google.com/file/d/1Pcvaay1mcUC4pwV5KxH2nNwYFtfJ1olp/view?usp=sharing"
                target="_blank"
              >
                <button class="glossy-button">Resume</button>
              </Link>
              {/* x */}
            </div>
          </div>
          <div className="flex  justify-center lg:w-1/2 lg:justify-end mt-8 lg:mt-0">
            <Image
              src="/me1.png"
              alt="Profile picture"
              width={300}
              height={300}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
