import CustomTypewriter from "./_components/Typewriter";
import Image from "next/image";
import Timeline from "./_components/Timeline";
import ProjectSlider from "./_components/ProjectSlider";
import BlogCard from "./_components/BlogCard";
import Contact from "./_components/Contact";
import { blogCards } from "@/app/_lib/constants";
import AboutRadial from "./_components/AboutRadial";
import WavyBanner from "./_components/WavyBanner";

export default function Page() {
  return (
    <main className="mx-auto px-4 sm:px-8 pt-2 pb-12 md:mb-[-126px] min-h-screen md:px-16 space-y-24 sm:space-y-32">
      {/* Home Section */}
      <section id="home" className="container mx-auto flex flex-col py-12">
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex flex-col justify-center text-center lg:text-left lg:w-1/2 w-full max-w-full">
            <h3 className="mb-6 text-xl sm:text-xl font-bold font-title-big leading-tight lg:text-3xl">
              <span className="text-accent-50 flex flex-wrap justify-center lg:justify-start items-center gap-x-2">
                <span>Hi, I&#39;m a</span>
                <span className="text-secondary-10">
                  <CustomTypewriter />
                </span>
              </span>
            </h3>
            <p className="mb-6 text-base sm:text-lg md:text-md font-body-1 text-justify font-medium leading-7 text-accent-50">
              I&apos;m a 20-year-old software developer. With experience in the MERN stack, my skills in Next.js and backend development have been honed over the past years.
              I like to understand things from the grassroots level and believe that mastering fundamentals is the key to building great systems.
              Solving the minor and major inconveniences in my life using tech learnings gives me serotonin!
               {/* I have a diverse portfolio that includes bootcamps, scholars&apos; fellowships, research journey, academic milestones, and open-source contributions. */} 
              <br></br>This page serves as an introduction to my work! :)
            </p>
          </div>
          <div className="flex justify-center lg:w-1/2 lg:justify-end mt-8 lg:mt-0">
            <Image
              src="/main.png"
              alt="Profile picture"
              width={400}
              height={400}
              className="rounded-2xl max-w-full h-auto"
            />
          </div>
        </div>

        {/* Wavy Banner positioned perfectly within the homepage section */}
        <div className="mt-4 md:mt-2 w-full z-0">
          <WavyBanner />
        </div>
      </section>

      <AboutRadial />

      {/* Projects Section */}
      <section id="projects" className="container mx-auto scroll-mt-24">
        <h2 className="text-4xl sm:text-5xl font-bold font-yesteryear text-accent-400 mb-7 text-center tracking-wider">Projects</h2>
        <ProjectSlider />
      </section>

      {/* Blog Section */}
      <section id="blog" className="container mx-auto scroll-mt-24">
        <h2 className="text-4xl sm:text-5xl font-bold font-yesteryear text-accent-400 mb-7 text-center tracking-wider">Blog</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogCards.map((card) => (
            <li key={card.title}>
              <BlogCard
                title={card.title}
                description={card.description}
                src={card.src}
                href={card.href}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto pb-12 scroll-mt-24">
        <h2 className="text-4xl sm:text-5xl font-bold font-yesteryear text-accent-400 mb-7 text-center tracking-wider">Contact</h2>
        <h3 className="text-accent-40 text-center text-lg sm:text-xl mb-8">
          Want to collaborate, have project ideas, or curious about something? Hit
          me up!
        </h3>
        <Contact />
      </section>
    </main>
  );
}
