"use client";
import { useState, useEffect } from "react";
import {
  Hero,
  AboutMe,
  Contact,
  Footer,
  Project,
  Skills,
} from "../LandingComponent";

import { Header } from "../layout";
import { LeftLine, Rightline } from ".";

export default function Section() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll(".observe-section");
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
          console.log(entry.target.id);
        });
      },
      { threshold: 0.1 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative ">
      <LeftLine />
      <Rightline />

      <div id="hero" className="observe-section">
        <Header active={active} />
      </div>

      <div id="hero" className="observe-section">
        <Hero />
      </div>

      <div id="project" className="observe-section">
        <Project />
      </div>

      <div id="skills" className="observe-section">
        <Skills />
      </div>

      <div id="about" className="observe-section">
        <AboutMe />
      </div>

      <div id="contact" className="observe-section">
        <Contact />
      </div>

      <div id="bottom">
        <Footer />
      </div>
    </div>
  );
}
