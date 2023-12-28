import Head from "next/head";
import { useState } from "react";
import Toast from "@/components/Toast";
import Hero from "@/components/MainPage/HeroSection";
import SkillsSection from "@/components/MainPage/SkillsSection";
import ProjectsSection from "@/components/MainPage/ProjectsSection";
import ContactFormSection from "@/components/MainPage/ContactFormSection";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isToastShown, setIsToastShown] = useState({
    status: false,
    type: "",
    text: "",
  });

  return (
    <>
      <Head>
        <title>batyrkhan portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="main">
        {isToastShown.status && (
          <Toast type={isToastShown.type} text={isToastShown.text} />
        )}
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <ContactFormSection setIsToastShown={setIsToastShown} />
      </main>
    </>
  );
}
