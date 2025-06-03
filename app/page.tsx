import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import ProjectsList from "@/components/ProjectsList/ProjectsList";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <ProjectsList />
      <ContactForm />
    </main>
  );
}
