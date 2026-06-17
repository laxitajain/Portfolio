"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Timeline from "./Timeline";
import dynamic from "next/dynamic";
import { experience, languages, frameworks, platforms, achievements } from "@/app/_lib/constants";

const GitHubCalendar = dynamic(() => import("react-github-calendar").then((mod) => mod.GitHubCalendar), { ssr: false });

const navItems = [
  { id: "about", label: "About me", angle: -40 },
  { id: "education", label: "Education", angle: -20 },
  { id: "skills", label: "Skills", angle: 0 },
  { id: "experience", label: "Experience", angle: 20 },
  { id: "achievements", label: "Achievements", angle: 40 },
];

export default function AboutRadial() {
  const [selectedId, setSelectedId] = useState("about");

  const selectedItem = navItems.find((item) => item.id === selectedId);
  const selectedAngle = selectedItem?.angle || 0;

  return (
    <section id="about" className="container mx-auto pt-4 pb-12 scroll-mt-8">
      <h2 className="text-4xl sm:text-5xl font-bold font-yesteryear text-accent-400 mb-12 text-center tracking-wider">
        About & Experience
      </h2>

      {/* Mobile view: Horizontal Tabs */}
      <div className="flex sm:hidden overflow-x-auto gap-4 pb-4 mb-8 scrollbar-hide">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`whitespace-nowrap px-6 py-2 rounded-full font-medium transition-colors ${
              selectedId === item.id
                ? "bg-accent-50 text-primary-90"
                : "bg-primary-80 text-accent-40"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row relative min-h-[600px] overflow-visible">
        {/* Desktop view: Radial Ring Navigation */}
        <div className="hidden sm:block relative w-[20%] shrink-0">
          {/* The ring */}
          <motion.div
            className="absolute rounded-full border-2 border-primary-80 shadow-[0_0_15px_rgba(160,90,220,0.1)]"
            style={{
              width: 800,
              height: 800,
              left: -650,
              top: "calc(50% - 400px)",
            }}
            animate={{ rotate: -selectedAngle }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          >
            {navItems.map((item) => {
              const isActive = selectedId === item.id;
              // Total rotation applied to this item's container: (angle - selectedAngle)
              // To keep text upright, we apply the inverse rotation.
              const inverseRotation = -(item.angle - selectedAngle);

              return (
                <div
                  key={item.id}
                  className="absolute top-1/2 right-0 origin-left"
                  style={{
                    width: 400,
                    transform: `translateY(-50%) rotate(${item.angle}deg)`,
                  }}
                >
                  <motion.div
                    className="absolute right-0 translate-x-1/2 z-10"
                    animate={{ rotate: inverseRotation }}
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                  >
                    <button
                      onClick={() => setSelectedId(item.id)}
                      className={`relative group flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
                        isActive ? "scale-110" : "scale-100 hover:scale-105"
                      }`}
                    >
                      <div
                        className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-accent-50 text-primary-90 shadow-[0_0_20px_theme('colors.accent.50')]"
                            : "bg-primary-80 text-accent-30 hover:bg-primary-70"
                        }`}
                      >
                        {item.label}
                      </div>
                    </button>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Content Panel */}
        <div className="w-full sm:w-[80%] sm:pl-8 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {selectedId === "about" && <AboutMeContent />}
              {selectedId === "education" && <EducationContent />}
              {selectedId === "skills" && <SkillsContent />}
              {selectedId === "experience" && <ExperienceContent />}
              {selectedId === "achievements" && <AchievementsContent />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Sub-components for content panels

function AboutMeContent() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-accent-40 mb-6">About me</h3>
      <div className="text-accent-30 text-lg leading-7 text-justify mb-12">
        I am now in my final year of B.Tech. in Computer Science! Throughout my college years, I have practiced Data Structures and Algorithms rigorously and have solved 900+ problems till date. I have studied frontend and backend technologies, and converted those learnings into implementation via several of my <a href="./#projects">projects.</a> I have solid experience in integrating AI into systems and applications via hackathons and internship projects. Recently, I have taken an interest in cloud native technologies and have quickly realised their importance and relevance moving forward~
        Beyond tech, I am an avid reader, a comic fanatic, a writer and a philosophy nerd! I value
        integrity and enjoy engaging in meaningful conversations! :)
      </div>

      <h3 className="text-3xl sm:text-4xl font-bold font-yesteryear tracking-wider text-accent-40 mb-6 mt-8">
        Days I <span className="text-secondary-50">Code</span>
      </h3>
      <div className="w-full overflow-x-auto scrollbar-hide py-4">
        <GitHubCalendar 
          username="laxitajain" 
          blockSize={12} 
          blockMargin={4} 
          colorScheme="dark" 
          theme={{
            dark: ['#E2E8F0', '#6F3F9A', '#A05ADC', '#B178E2', '#C397EA']
          }}
          fontSize={14}
        />
      </div>
    </div>
  );
}

function EducationContent() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-accent-40 mb-6">Education</h3>
      <Timeline />
    </div>
  );
}

function SkillsContent() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-accent-40 mb-6">Tools and Platforms</h3>
      <ul className="space-y-8">
        <li className="p-2">
          <h4 className="text-lg font-semibold text-accent-50 mb-4 tracking-wider">
            Languages
          </h4>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {languages.map((item) => (
              <li
                key={item.name}
                className="relative group flex justify-center items-center rounded-full bg-transparent ring-2 ring-secondary-20 p-1 sm:p-2"
              >
                <Image src={item.src} alt={item.name} width="35" height="35" quality={100} />
                <span className="absolute bottom-0 transform translate-y-full font-body-1 text-center bg-primary-100 sm:bg-primary-90 text-white-1 text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li className="p-2">
          <h4 className="text-lg font-semibold text-accent-50 mb-4 tracking-wider">
            Frameworks & Technologies
          </h4>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {frameworks.map((item) => (
              <li
                key={item.name}
                className="relative group flex justify-center items-center rounded-full bg-transparent ring-2 ring-secondary-20 p-1 sm:p-2"
              >
                <Image src={item.src} alt={item.name} width="35" height="35" quality={100} />
                <span className="absolute bottom-0 transform translate-y-full font-body-1 text-center bg-primary-100 sm:bg-primary-90 text-white-1 text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li className="p-2">
          <h4 className="text-lg font-semibold text-accent-50 mb-4 tracking-wider">
            Platforms & Version Control
          </h4>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {platforms.map((item) => (
              <li
                key={item.name}
                className="relative group flex justify-center items-center rounded-full bg-transparent ring-2 ring-secondary-20 p-1 sm:p-2"
              >
                <Image src={item.src} alt={item.name} width="35" height="35" quality={100} />
                <span className="absolute top-0 transform -translate-y-full font-body-1 text-center bg-primary-100 sm:bg-primary-90 text-white-1 text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

function ExperienceContent() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-accent-40 mb-6">Experience</h3>
      <ol className="relative border-s-2 border-accent-100 ml-2">
        {experience.map((exp, index) => (
          <li key={index} className="relative mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-5 h-5 bg-secondary-10 rounded-full -start-[35px] top-1 shadow-[0_0_10px_rgba(195,151,234,0.5)]"></span>
            <h4 className="flex items-center mb-1 text-xl font-bold text-accent-40">{exp.role}</h4>
            <div className="text-primary-60 mb-2">
              <span className="font-semibold">{exp.company}</span> | {exp.location}
            </div>
            <div className="text-sm text-primary-60 mb-4">{exp.dates}</div>
            <p className="mb-4 text-base font-normal text-accent-30 text-justify leading-7">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-primary-80 text-secondary-10 text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function AchievementsContent() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-accent-40 mb-6">Achievements</h3>
      <ol className="relative border-s-2 border-accent-100 ml-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="relative mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-5 h-5 bg-secondary-10 rounded-full -start-[35px] top-1 shadow-[0_0_10px_rgba(195,151,234,0.5)]"></span>
            <h4 className="flex items-center mb-2 text-xl font-bold text-accent-40">{achievement.title}</h4>
            <p className="text-base font-normal text-accent-30 text-justify leading-7">
              {achievement.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
