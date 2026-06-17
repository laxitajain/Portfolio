import CustomTypewriter from "./_components/Typewriter";
import Image from "next/image";
import Timeline from "./_components/Timeline";
import ProjectSlider from "./_components/ProjectSlider";
import BlogCard from "./_components/BlogCard";
import Contact from "./_components/Contact";
import { blogCards } from "@/app/_lib/constants";
import AboutRadial from "./_components/AboutRadial";

export default function Page() {
  return (
    <main className="mx-auto px-4 sm:px-8 pt-2 pb-12 md:mb-[-126px] min-h-screen md:px-16 space-y-24 sm:space-y-32">
      {/* Home Section */}
      <section id="home" className="container mx-auto flex flex-col py-12">
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
            <p className="mb-6 text-base sm:text-lg md:text-md font-body-1 text-justify font-medium leading-7 text-accent-50">
              I&apos;m a 20-year-old software developer. With experience in the MERN stack, my skills in Next.js and backend development have been honed over the past years.
              I like to understand things from the grassroots level and believe that mastering fundamentals is the key to building great systems.
              Solving the minor and major inconveniences in my life using tech learnings gives me serotonin!
               {/* I have a diverse portfolio that includes bootcamps, scholars&apos; fellowships, research journey, academic milestones, and open-source contributions. */} 
              <br></br>This page serves as an introduction to my work! :)
            </p>
            
            <div className="relative mt-4 mb-4 ml-[-1rem] sm:ml-[-1.5rem] flex items-stretch filter drop-shadow-lg">
              {/* 3D Fold under the left side */}
              <div 
                className="absolute left-0 -bottom-2 w-4 sm:w-6 h-2 bg-secondary-80" 
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              ></div>
              
              {/* Stationary FEATURED badge */}
              <div className="bg-secondary-70 text-white font-bold px-4 sm:px-6 py-1.5 flex items-center z-10 tracking-widest text-xs sm:text-sm">
                FEATURED
              </div>

              {/* Scrolling Marquee Area */}
              <div 
                className="flex-1 flex overflow-hidden bg-secondary-70 py-1.5 group transition-all duration-300"
                style={{ 
                  clipPath: "polygon(0 0, 100% 0, calc(100% - 1.25rem) 50%, 100% 100%, 0 100%)" 
                }}
              >
                <div className="flex whitespace-nowrap animate-marquee items-center">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex items-center">
                      {[
                        { label: "Check out my Codolio Profile", href: "https://codolio.com/profile/lax" },
                        // Add more links here in the future!
                      ].map((link, idx) => (
                        <a 
                          key={idx}
                          href={link.href}
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center opacity-0 group-hover:opacity-100 text-accent-100 hover:!text-white font-yesteryear text-xl tracking-normal font-normal transition-all duration-300"
                        >
                          {link.label}<span> &nbsp; &nbsp; ↗ &nbsp; &nbsp;</span> 
                          {/* <span className="mx-6 opacity-50 font-sans">✦</span> */}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
