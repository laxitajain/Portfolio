"use client";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "@/app/_lib/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const FILM_LABELS = ["Portfolio", "35mm", "Dev", "★", "Build"];

export default function ProjectSlider() {
  const scrollRef = useRef(null);

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
                <article className="film-frame-inner">
                  <div className="film-frame-content">
                    <header>
                      <h3 className="text-2xl sm:text-3xl font-yesteryear font-bold text-accent-100 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-[0.95rem] mt-2 text-accent-30 leading-relaxed">
                        {project.description}
                      </p>
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

                    <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 mt-4 pt-3 border-t border-primary-80">
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
    </div>
  );
}
