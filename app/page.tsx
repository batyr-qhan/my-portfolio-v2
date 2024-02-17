"use client";

import { useState } from "react";
import Toast from "@/components/Toast/Toast";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import ProjectsList from "@/components/ProjectsList/ProjectsList";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Home() {
  const [isToastShown, setIsToastShown] = useState({
    status: false,
    type: "",
    text: "",
  });

  return (
    <main>
      {isToastShown.status && (
        <Toast type={isToastShown.type} text={isToastShown.text} />
      )}
      <Hero />
      <Skills />
      <ProjectsList />
      <ContactForm setIsToastShown={setIsToastShown} />
    </main>
  );
}
