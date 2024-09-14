"use client";

import { useState, useEffect } from "react";

export default function AnimatedText() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsOpen(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="relative mb-4 overflow-hidden">
        <div
          className={`transform transition-transform duration-500 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            HAMZA ZAIN
          </h1>
        </div>
      </div>
      <div className="relative mb-8 overflow-hidden">
        <div
          className={`transform transition-transform duration-1000 delay-300 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
            MERN Stack Developer, Web Developer, Python Automation Developer,
            <br className="hidden sm:inline" />
            Repository Maintainer and a Computer Science Bachelor Student.
          </p>
        </div>
      </div>
    </div>
  );
}
