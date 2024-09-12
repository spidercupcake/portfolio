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
    <>
      <div className="relative mb-4 overflow-hidden">
        <div
          className={`transform transition-transform duration-500 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <h1 className="text-4xl font-bold">HAMZA ZAIN BHATTI</h1>
        </div>
      </div>
      <div className="relative mb-8 overflow-hidden">
        <div
          className={`transform transition-transform duration-1000 delay-300 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <p className="text-center text-sm">
            MERN Stack Developer, Web Developer, Python Automation Developer,{" "}
            <br />
            Repository Maintainer and a Computer Science Bachelor Student.
          </p>
        </div>
      </div>
    </>
  );
}
