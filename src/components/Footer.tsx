"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function Component() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("hello@hamzazain.pk");
    setIsCopied(true);
  };

  return (
    <footer
      className="relative bg-zinc-900 flex flex-col items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute bg-pink-500 rounded-full filter blur-3xl opacity-30"
        style={{
          x: cursorPosition.x - 75,
          y: cursorPosition.y - 75,
          width: 150,
          height: 150,
        }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      <h2 className="text-white text-3xl mb-8 font-light">
        Looking for a new talent?
      </h2>
      <motion.button
        className="text-6xl font-bold transition-colors duration-300 focus:outline-none"
        style={{ color: isHovering ? "#ec4899" : "white" }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        onClick={handleCopy}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        hello@hamzazain.pk
      </motion.button>
      <motion.p
        className="mt-4 text-pink-500"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isCopied ? 1 : 0, y: isCopied ? 0 : 10 }}
        transition={{ duration: 0.3 }}
      >
        Copied to clipboard!
      </motion.p>
      <div className="mt-8 flex space-x-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="/cv.pdf"
          download
          className="text-white hover:text-pink-500 transition-colors duration-300"
        >
          Download CV
        </a>
      </div>
    </footer>
  );
}
