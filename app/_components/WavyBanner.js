"use client";

import { useState, useRef, useEffect } from 'react';

export default function WavyBanner() {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsAnimating(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Matches the 1000ms transition duration
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div 
      className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden flex items-center justify-center z-10 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg 
        viewBox="0 0 1440 120" 
        className="w-full h-auto min-w-[1440px] drop-shadow-xl" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <path 
            id="wavePath" 
            d="M -1440,60 C -1080,100 -1080,20 -720,60 C -360,100 -360,20 0,60 C 360,100 360,20 720,60 C 1080,100 1080,20 1440,60 C 1800,100 1800,20 2160,60 C 2520,100 2520,20 2880,60 C 3240,100 3240,20 3600,60" 
          />
        </defs>

        {/* Thick background stroke acting as the banner */}
        <use 
          href="#wavePath" 
          fill="none" 
          className="stroke-secondary-70" 
          strokeWidth="40" 
        />

        {/* Static Text that animates on hover */}
        <text className="font-yesteryear text-lg md:text-xl fill-accent-100 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" dy="5">
          <textPath href="#wavePath" startOffset="0">
            {isAnimating && (
              <animate 
                attributeName="startOffset" 
                from="0" 
                to="-2880" 
                begin="0s" 
                dur="40s" 
                repeatCount="indefinite" 
              />
            )}
            {[...Array(40)].map((_, i) => (
              <a 
                key={i} 
                href="https://codolio.com/profile/lax" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:fill-white transition-colors duration-300"
              >
                Check out my Codolio Profile ↗ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GitHub Stats ↗ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            ))}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
