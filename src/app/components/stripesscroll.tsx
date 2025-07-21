"use client";
import React, { useState, useEffect, CSSProperties } from "react";

export interface StripesScrollProps {
  /** URL of the stripe image */
  bgImage: string;
  /** Size of each tile, in px (defaults to 30×30) */
  tileSize?: string;
  /** How many px to move each frame (defaults to 0.5) */
  speed?: number;
  /** 'left' will scroll negatively, 'right' positively */
  direction?: "left" | "right";
  /** Any extra classes you want on the wrapper */
  className?: string;
}

const StripesScroll: React.FC<StripesScrollProps> = ({
  bgImage,
  tileSize = "30rem",
  speed = 0.5,
  direction = "left",
  className = "",
}) => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const delta = direction === "left" ? -speed : speed;
    const iv = setInterval(() => {
      setScrollX((x) => x + delta);
    }, 16);
    return () => clearInterval(iv);
  }, [direction, speed]);

  const style: CSSProperties = {
    backgroundImage: `url('${bgImage}')`,
    backgroundRepeat: "repeat",
    backgroundSize: `${tileSize}`,
    backgroundPosition: `${scrollX}px 0`,
  };

  return <div className={className} style={style} />;
};

export default StripesScroll;
