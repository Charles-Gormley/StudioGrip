// components/CanvasStarfield.jsx
"use client"
import React, { useEffect, useRef, useState } from 'react';

const StarsBackground = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const starCount = 500;

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');

    const stars = Array(starCount).fill().map(() => ({
      x: (Math.random() - 0.5) * (canvas.width / 2),
      y: (Math.random() - 0.5) * (canvas.height / 2),
      z: Math.random() * 1000,
      size: Math.random() * 2
    }));

    let animationFrameId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDarkMode = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDarkMode ? '#FFFFFF' : '#000000';

      stars.forEach(star => {
        star.z -= 2; // Speed of movement towards the viewer

        if (star.z <= 1) {
          star.z = 1000;
          star.x = (Math.random() - .5) * (canvas.width / 2);
          star.y = (Math.random() - .5) * (canvas.height / 2);
        }

        // Project the star into the 2D space
        let k = 360.0 / star.z; // Perspective factor; adjust for effect intensity
        let px = star.x * k + canvas.width / 2; // Convert position with perspective
        let py = star.y * k + canvas.height / 2;

        // Calculate size of star based on distance
        let size = star.size * k;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, 2 * Math.PI);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} className="fixed top-0 left-0 w-full h-full pointer-events-none" />;

};

export default StarsBackground;