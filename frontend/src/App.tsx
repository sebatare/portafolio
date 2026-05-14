import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ListaProyectos from "./components/ListaProyectos";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

export type Language = "es" | "en" | "de";

const nextLanguage: Record<Language, Language> = {
  es: "en",
  en: "de",
  de: "es",
};

const App = () => {
  const [language, setLanguage] = useState<Language>("es");

  const handleLanguageChange = () => {
    setLanguage((current) => nextLanguage[current]);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <main className="flex-1 w-full mx-auto max-w-4xl px-4 md:px-0">
        <Hero language={language} />
        <section id="projects">
          <ListaProyectos language={language} />
        </section>
        <Skills language={language} />
        <Experience language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;