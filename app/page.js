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
              I&apos;m a 20-year-old aspiring software developer. With experience in the MERN stack, my skills in Next.js and backend development have been honed over the past year.
              I have dedicated my time to understanding deep learning fundamentals from the grassroots level.
              Solving the minor and major inconveniences I face in daily life using these learnings brings my efforts to fruition. I have a diverse portfolio that includes bootcamps attended, scholars&apos; fellowships, research work, academic triumph, and open-source contributions.
              This page serves as an introduction to my work! :)
            </p>
            <div className="flex flex-col items-center lg:flex-row">
              {/* <Link
                href="https://drive.google.com/file/d/1Pcvaay1mcUC4pwV5KxH2nNwYFtfJ1olp/view?usp=sharing"
                target="_blank"
              >
                <button class="glossy-button">Resume</button>
              </Link> */}
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
