"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const lastY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide header when scrolling down past 150px
    // Also, if they scroll up, show it? The user specifically wanted it to hide upon navigation.
    // Let's just hide if scroll > 150.
    if (latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const currentY = e.clientY;
      const movingUp = currentY < lastY.current;
      lastY.current = currentY;

      // If mouse is near top AND moving upwards, show header
      if (currentY < 100 && movingUp) {
        setHidden(false);
      } 
      // If scrolled down and mouse is away from top, hide header
      else if (window.scrollY > 150 && currentY >= 100) {
        setHidden(true);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-[100] px-4 sm:px-8 py-5 bg-primary-90/95"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo location="header" />
        <Navigation />
      </div>
    </motion.header>
  );
}

export default Header;
