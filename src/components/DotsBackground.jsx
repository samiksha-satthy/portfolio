import React, { useEffect, useRef } from "react";

const DOT_COUNT = 90;
const REPEL_RADIUS = 130;
const REPEL_FORCE = 1.6;
const RETURN_STRENGTH = 0.0035;
const RETURN_DAMPING = 0.94;

function DotsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const mouse = { x: -9999, y: -9999 };
    let animationFrameId;
    let dots = [];

    const createDots = () => {
      dots = Array.from({ length: DOT_COUNT }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        return {
          x,
          y,
          homeX: x,
          homeY: y,
          vx: 0,
          vy: 0,
          radius: Math.random() * 1.8 + 0.8,
          alpha: Math.random() * 0.5 + 0.3,
        };
      });
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      createDots();
    };

    const handleMouseMove = (event) => {
      if (event.target instanceof Element && event.target.closest("[data-dots-ignore]")) {
        mouse.x = -9999;
        mouse.y = -9999;
        return;
      }

      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      const ignoreElement = document.querySelector("[data-dots-ignore]");
      const canvasRect = canvas.getBoundingClientRect();
      const ignoreBounds = ignoreElement
        ? (() => {
            const rect = ignoreElement.getBoundingClientRect();
            return {
              left: rect.left - canvasRect.left,
              right: rect.right - canvasRect.left,
              top: rect.top - canvasRect.top,
              bottom: rect.bottom - canvasRect.top,
            };
          })()
        : null;
      const IGNORE_PADDING = 24;

      for (const dot of dots) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distance = Math.hypot(dx, dy);

        if (distance < REPEL_RADIUS && distance > 0) {
          const strength = ((REPEL_RADIUS - distance) / REPEL_RADIUS) * REPEL_FORCE;
          dot.vx += (dx / distance) * strength;
          dot.vy += (dy / distance) * strength;
        }

        dot.vx += (dot.homeX - dot.x) * RETURN_STRENGTH;
        dot.vy += (dot.homeY - dot.y) * RETURN_STRENGTH;

        dot.vx *= RETURN_DAMPING;
        dot.vy *= RETURN_DAMPING;

        dot.x += dot.vx;
        dot.y += dot.vy;

        const isBehindIgnoredElement =
          ignoreBounds &&
          dot.x > ignoreBounds.left - IGNORE_PADDING &&
          dot.x < ignoreBounds.right + IGNORE_PADDING &&
          dot.y > ignoreBounds.top - IGNORE_PADDING &&
          dot.y < ignoreBounds.bottom + IGNORE_PADDING;

        if (!isBehindIgnoredElement) {
          context.beginPath();
          context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
          context.fillStyle = `rgba(212, 190, 251, ${dot.alpha})`;
          context.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

export default DotsBackground;
