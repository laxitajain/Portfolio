"use client";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { projects } from "@/app/_lib/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const FILM_LABELS = ["Portfolio", "35mm", "Dev", "★", "Build"];

export default function ProjectSlider() {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const slider = scrollRef.current;
    let isDown = false;
    let startX;
    let scrollLeftPos;

    const mouseDown = (e) => {
      isDown = true;
      slider.classList.add("cursor-grabbing");
      slider.classList.remove("cursor-grab");
      startX = e.pageX - slider.offsetLeft;
      scrollLeftPos = slider.scrollLeft;
    };

    const mouseLeaveOrUp = () => {
      isDown = false;
      slider.classList.remove("cursor-grabbing");
      slider.classList.add("cursor-grab");
    };

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeftPos - walk;
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeaveOrUp);
    slider.addEventListener("mouseup", mouseLeaveOrUp);
    slider.addEventListener("mousemove", mouseMove);
    slider.classList.add("cursor-grab");

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeaveOrUp);
      slider.removeEventListener("mouseup", mouseLeaveOrUp);
      slider.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };

  const toggleProjectDescription = (project) => {
    setSelectedProject((currentProject) =>
      currentProject?.title === project.title ? null : project
    );
  };

  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-[100vw] group">
      <button
        onClick={scrollLeft}
        className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-secondary-50 rounded-full items-center justify-center text-accent-100 hover:scale-110 hover:bg-secondary-30 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
        aria-label="Scroll left"
      >
        <ChevronLeft size={26} strokeWidth={3} />
      </button>

      <div ref={scrollRef} className="film-reel-viewport scrollable scrollbar-hide">
        <div className="film-strip">
          <div className="film-edge" aria-hidden="true">
            <div className="film-edge-text">
              {FILM_LABELS.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>

          <ul className="film-frames">
            {projects.map((project) => (
              <li key={project.title} className="film-frame">
                <article
                  className="film-frame-inner cursor-pointer transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-30"
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${project.title} project description`}
                  onClick={() => toggleProjectDescription(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggleProjectDescription(project);
                    }
                  }}
                >
                  <div className="film-frame-content">
                    <header>
                      <h3 className="text-2xl sm:text-3xl font-yesteryear font-bold text-accent-100 leading-tight">
                        {project.title}
                      </h3>
                    </header>

                    <div className="film-image-wrap">
                      <Image
                        src={project.src}
                        alt={project.title}
                        width={500}
                        height={320}
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    <ul className="flex flex-wrap gap-1.5 mt-3">
                      {project.techStack.map((technology) => (
                        <li key={technology}>
                          <Button type="secondary">{technology}</Button>
                        </li>
                      ))}
                    </ul>

                    <ul
                      className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 mt-4 pt-3 border-t border-primary-80"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {project.github && (
                        <li>
                          <Link href={project.github} target="_blank">
                            <Button type="tertiary">
                              <img
                                src="/icons/icons8-github-logo.svg"
                                alt="GitHub"
                              />
                              SEE MORE
                            </Button>
                          </Link>
                        </li>
                      )}
                      {project.type === "live" && (
                        <li>
                          <Link href={project.demo} target="_blank">
                            <Button type="tertiary">
                              VIEW PROJECT
                              <img
                                src="/diagonal-arrow (1).png"
                                alt="Demo"
                              />
                            </Button>
                          </Link>
                        </li>
                      )}
                      {project.type === "report" && (
                        <li>
                          <Link href={project.demo} target="_blank">
                            <Button type="tertiary">VIEW REPORT</Button>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="film-edge" aria-hidden="true">
            <div className="film-edge-text">
              {FILM_LABELS.map((label) => (
                <span key={`bottom-${label}`}>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollRight}
        className="hidden sm:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-secondary-50 rounded-full items-center justify-center text-accent-100 hover:scale-110 hover:bg-secondary-30 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
        aria-label="Scroll right"
      >
        <ChevronRight size={26} strokeWidth={3} />
      </button>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <section
            className="relative w-full max-w-xl rounded-lg border border-primary-70 bg-secondary-80 p-6 shadow-2xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-description-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 rounded-full p-2 text-accent-30 transition-colors hover:bg-primary-90 hover:text-accent-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-30"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project description"
            >
              <X size={22} />
            </button>
            <h2
              id="project-description-title"
              className="pr-10 text-3xl font-yesteryear font-bold leading-tight text-accent-100 sm:text-4xl"
            >
              {selectedProject.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-accent-30 sm:text-base">
              {selectedProject.description}
            </p>
          </section>
        </div>
      )}
    </div>
  );
}
