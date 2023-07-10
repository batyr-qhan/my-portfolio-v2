import PatternRings from "@/public/PatternRings";
import React from "react";

export default function SkillsSection() {
  return (
    <section className="skills">
      <div className="wrapper skills__wrapper bottom-border">
        {/* <h2 className="visually-hidden">Skills</h2> */}
        <div className="skills__item">
          <h3 className="skills__title">JavaScript</h3>
          <p className="skills__description">3 Years Experience</p>
        </div>
        <div className="skills__item">
          <h3 className="skills__title">CSS</h3>
          <p className="skills__description">3 Years Experience</p>
        </div>
        <div className="skills__item">
          <h3 className="skills__title">React</h3>
          <p className="skills__description">3 Years Experience</p>
        </div>
        <div className="skills__item">
          <h3 className="skills__title">TypeScript</h3>
          <p className="skills__description">1 Year Experience</p>
        </div>
        <div className="skills__item">
          <h3 className="skills__title">React Native</h3>
          <p className="skills__description">1 Year Experience</p>
        </div>
        <div className="skills__item">
          <h3 className="skills__title">Sass</h3>
          <p className="skills__description">2 Years Experience</p>
        </div>
      </div>
      <PatternRings className="skills__rings" />
    </section>
  );
}
