"use client";

import Typewriter from "typewriter-effect";

const CustomTypewriter = () => {
  return (
    <span className="text-primary-400 font-yesteryear">
      <Typewriter
        options={{
          strings: ["Software Engineer", "Web Developer"],
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
};

export default CustomTypewriter;
