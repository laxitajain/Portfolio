"use client";
import { useRef, useEffect } from "react";

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
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      slider.classList.add("cursor-grabbing");
      slider.classList.remove("cursor-grab");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
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
      slider.scrollLeft = scrollLeft - walk;
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

  return (
    <div className="mt-2 ml-0 mb-4">
      <h2 className="text-2xl text-accent-400 mb-7"></h2>
      <ul
        ref={scrollRef}
        //border-l-4 pl-4 border-secondary-30
        className="scrollable flex flex-col sm:flex-row overflow-x-auto sm:space-x-12 space-y-8 scrollbar-hide"
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
            <div className="flex flex-col justify-betweem gap-y-4  mt-2">
              <ul className="flex flex-wrap gap-y-1.5 gap-x-2 mx-auto">
                {project.techStack.map((technology) => (
                  <li key={technology}>
                    <Button type="secondary">{technology}</Button>
                  </li>
                ))}
              </ul>
              <ul className="flex gap-x-1.5 mx-auto my-2 sm:m-4 items-centre">
                {project.github && (
                  <li>
                    <Link href={project.github} target="_blank">
                      <Button type="tertiary">
                        <img src="/icons/icons8-github-logo.svg"></img>SEE MORE
                      </Button>
                    </Link>
                  </li>
                )}
                {project.type === "live" && (
                  <li>
                    <Link href={project.demo} target="_blank">
                      <Button type="tertiary">
                        VIEW PROJECT<img src="/diagonal-arrow (1).png"></img>
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
    </div>
  );
}
