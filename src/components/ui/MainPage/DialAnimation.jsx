"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function DialAnimation() {
  useEffect(() => {
    const select = (s) => document.querySelector(s);
    const mark = select(".mark");
    const num = 18;
    const step = 360 / num;
    const container1 = select(".container1");
    const container2 = select(".container2");
    let mainTl = gsap.timeline();
    let count = 0;

    gsap.set("svg", { visibility: "visible" });

    function makeDial(container, radius, alpha) {
      for (let i = 0; i < num; i++) {
        const angle = step * i;
        const clone = mark.cloneNode(true);
        container.appendChild(clone);

        const point = {
          x: Math.cos((angle * Math.PI) / 180) * radius + 400,
          y: Math.sin((angle * Math.PI) / 180) * radius + 300,
        };

        gsap.set(clone, {
          x: point.x,
          y: point.y,
          rotation: angle,
          opacity: alpha,
        });

        const tl = gsap.timeline({ repeat: -1 });
        tl.to(clone, {
          duration: 1,
          attr: { x2: 120 },
          ease: "power3.inOut",
        }).to(clone, {
          duration: 2,
          attr: { x1: 150, x2: 150 },
          ease: "power1.inOut",
        });

        mainTl.add(tl, count / 10);
        count++;
      }
    }

    makeDial(container1, 66, 0.3);
    makeDial(container2, 66, 1);

    gsap.set([container2, container1], { transformOrigin: "50% 50%" });
    mainTl.timeScale(2);
  }, []);

  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", margin: "0 auto" }}
    >
      <defs>
        <line
          className="mark"
          x1="0"
          y1="0"
          x2="0"
          y2="0"
          fill="none"
          stroke="rgba(0, 0, 0, 0.75)"
          strokeMiterlimit="10"
          strokeLinecap="none"
          strokeWidth="24"
        />
      </defs>
      <g className="container1" />
      <g className="container2" />
    </svg>
  );
}
