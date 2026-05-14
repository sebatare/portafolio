import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ListaProyectos from "./components/ListaProyectos";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Presentacion from "./components/Presentacion";
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
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
        <div className="absolute top-0 left-[-18%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(12,211,192,0.24)_0%,rgba(12,211,192,0)_70%)]" />
        <div className="absolute top-[28%] right-[-22%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(241,111,58,0.2)_0%,rgba(241,111,58,0)_72%)]" />
      </div>
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <main className="flex-1 w-full mx-auto max-w-5xl px-5 md:px-8 pt-20 md:pt-24">
        <Hero language={language} />
        <Presentacion language={language} />
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