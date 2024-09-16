"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

export default function BackgroundImage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const maxScroll = fullHeight - windowHeight;
      const percentage = Math.min((scrollPosition / maxScroll) * 100, 25);
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 1 + scrollPercentage / 100;
  const blur = scrollPercentage / 5;

  return (
    <div
      className="fixed inset-0 bg-zink-900"
      style={{
        transform: `scale(${scale})`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div
        className={`w-full h-full transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          filter: `blur(${blur}px)`,
          transition: "filter 0.1s ease-out, opacity 1s ease-out",
          position: "relative",
        }}
      >
        <Image
          src="/assets/background.jpg"
          alt="City background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          onLoad={handleLoad}
          loading="lazy"
        />
      </div>
    </div>
  );
}
