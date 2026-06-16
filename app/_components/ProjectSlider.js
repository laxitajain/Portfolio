"use client";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "@/app/_lib/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

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
      const walk = (x - startX) * 1.5; // Adjust scroll speed
      slider.scrollLeft = scrollLeftPos - walk;
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeaveOrUp);
    slider.addEventListener("mouseup", mouseLeaveOrUp);
    slider.addEventListener("mousemove", mouseMove);

    // Initial class
    slider.classList.add("cursor-grab");

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeaveOrUp);
      slider.removeEventListener("mouseup", mouseLeaveOrUp);
      slider.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-2 ml-0 mb-4 group">
      <h2 className="text-2xl text-accent-400 mb-7"></h2>

      <button
        onClick={scrollLeft}
        className="hidden sm:flex absolute left-[-4rem] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-secondary-50 rounded-full items-center justify-center text-primary-90 hover:scale-110 hover:bg-secondary-40 transition-transform opacity-0 group-hover:opacity-100"
        aria-label="Scroll left"
      >
        <ChevronLeft size={28} strokeWidth={3} />
      </button>

      <ul
        ref={scrollRef}
        className="scrollable flex flex-col sm:flex-row overflow-x-auto sm:space-x-12 space-y-8 scrollbar-hide py-4"
      >
        {projects.map((project) => (
          <li
            key={project.title}
            className="p-2 text-xl min-w-[150px] max-w-lg flex-shrink-0 text-center"
          >
            <h1 className="text-3xl text-accent-100">{project.title}</h1>
            <p className="text-[1rem] mt-2 text-accent-30">
              {project.description}
            </p>
            <div className="bg-primary-100 rounded-3xl mt-4 p-3">
              <Image
                src={project.src}
                alt={project.title}
                width={500}
                height={500}
                className="rounded-xl"
              ></Image>
            </div>
            <div className="flex flex-col justify-between gap-y-4 mt-2">
              <ul className="flex flex-wrap justify-center gap-y-1.5 gap-x-2 w-full mx-auto">
                {project.techStack.map((technology) => (
                  <li key={technology}>
                    <Button type="secondary">{technology}</Button>
                  </li>
                ))}
              </ul>
              <ul className="flex justify-center gap-x-1.5 w-full mx-auto my-2 sm:m-4 items-center">
                {project.github && (
                  <li>
                    <Link href={project.github} target="_blank">
                      <Button type="tertiary">
                        <img src="/icons/icons8-github-logo.svg" alt="GitHub"></img>SEE MORE
                      </Button>
                    </Link>
                  </li>
                )}
                {project.type === "live" && (
                  <li>
                    <Link href={project.demo} target="_blank">
                      <Button type="tertiary">
                        VIEW PROJECT<img src="/diagonal-arrow (1).png" alt="Demo"></img>
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
          </li>
        ))}
      </ul>

      <button
        onClick={scrollRight}
        className="hidden sm:flex absolute right-[-4rem] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-secondary-50 rounded-full items-center justify-center text-primary-90 hover:scale-110 hover:bg-secondary-40 transition-transform opacity-0 group-hover:opacity-100"
        aria-label="Scroll right"
      >
        <ChevronRight size={28} strokeWidth={3} />
      </button>
    </div>
  );
}
