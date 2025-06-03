import PatternCircle from "@/public/PatternCircle";
import PatternRings from "@/public/PatternRings";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="wrapper hero__wrapper bottom-border">
        <div className="hero__content">
          <picture>
            <source
              media="(min-width: 62.5em)"
              srcSet="image-profile-desktop.webp"
            />
            <source
              media="(min-width: 37.5em)"
              srcSet="image-profile-tablet.webp"
            />
            <img
              className="hero__image"
              src="image-profile-mobile.webp"
              alt="picture of Adam Keyes"
              width-="200"
              height="500"
            />
          </picture>

          <PatternRings className="hero__rings" />

          <PatternCircle className="hero__circle" />

          <div className="hero__text">
            <h1 className="hero__headline header-xl">
              Nice to meet you! I`m <span>Han</span>.
            </h1>
            <p className="hero__description">
              I`m a front-end developer who enjoys building web and mobile apps
              that users love.
            </p>
            <div className="hero__actions-item">
              <Link
                href="#contact"
                className="hero__contact underline"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact me
              </Link>
            </div>
            <div className="hero__actions-item">
              <Link
                href="#projects"
                className="hero__contact underline"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("projects");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                My projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
