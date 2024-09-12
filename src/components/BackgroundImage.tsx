"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

export default function BackgroundImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`absolute inset-0 bg-gray-900 transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        src="/assets/background.jpg"
        alt="City background"
        fill
        style={{ objectFit: "cover" }}
        onLoad={handleLoad}
        loading="lazy"
      />
    </div>
  );
}
