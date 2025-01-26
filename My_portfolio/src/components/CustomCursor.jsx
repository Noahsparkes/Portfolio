// const cursorDot = document.querySelector("[data-cursor-dot]");
// const cursorOutline = document.querySelector("[data-cursor-outline]");

// window.addEventListener("mousemove", (e) => {
//     const posY = e.clientY;
//     const posX = e.clientX;

//     cursorDot.style.top = `${posY}px`;
//     cursorDot.style.left = `${posX}px`;

//    // cursorOutline.style.top = `${posY}px`;
//     //cursorOutline.style.left = `${posX}px`;

//     cursorOutline.animate({
//         top: `${posY}px`,
//         left: `${posX}px`
//     }, {
//         duration: 500,
//         fill: "forwards"
    
// });


import React, { useEffect, useRef, useState } from "react";

const CursorDot = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateCircle = () => {
      const diffX = mousePosition.x - outlinePosition.x;
      const diffY = mousePosition.y - outlinePosition.y;
      const speed = 0.05;

      setOutlinePosition({
        x: outlinePosition.x + diffX * speed,
        y: outlinePosition.y + diffY * speed,
      });

      requestAnimationFrame(animateCircle);
    };

    animateCircle();
  }, [mousePosition, outlinePosition]);

  return (
    <>
      <div
        ref={cursorDotRef}
        className="cursor-dot"
        data-cursor-dot
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
        }}
      />
      <div
        ref={cursorOutlineRef}
        className="cursor-outline"
        data-cursor-outline
        style={{
          top: `${outlinePosition.y}px`,
          left: `${outlinePosition.x}px`,
        }}
      />
    </>
  );
};

export default CursorDot;