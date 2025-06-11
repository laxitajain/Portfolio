"use client";

import Typewriter from "typewriter-effect";

const CustomTypewriter = () => {
  return (
    <span className="text-primary-400">
      <Typewriter
        options={{
          strings: ["Software Developer", "Web Developer"],
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
};

export default CustomTypewriter;
