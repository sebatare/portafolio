import React from "react";
import type { Language } from "../App";

type NavbarProps = {
  language: Language;
  onLanguageChange: () => void;
};

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const labels = {
    es: { projects: "Proyectos", experience: "Experiencia", contact: "Contacto", switchLanguage: "Cambiar idioma" },
    en: { projects: "Projects", experience: "Experience", contact: "Contact", switchLanguage: "Change language" },
    de: { projects: "Projekte", experience: "Erfahrung", contact: "Kontakt", switchLanguage: "Sprache wechseln" },
  }[language];

  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur-xl bg-black/30 border-b border-white/5">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3 gap-3">
        <span className="text-lg font-semibold tracking-tight text-white">ST</span>
        <ul className="hidden md:flex gap-6 text-zinc-300 text-sm font-medium">
          <li><a href="#projects" className="hover:text-cyan-400 transition">{labels.projects}</a></li>
          <li><a href="#experience" className="hover:text-cyan-400 transition">{labels.experience}</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">{labels.contact}</a></li>
          <li><a href="https://github.com/sebatare" target="_blank" rel="noopener" className="hover:text-cyan-400 transition">GitHub</a></li>
        </ul>
        <button
          type="button"
          aria-label={labels.switchLanguage}
          title={labels.switchLanguage}
          onClick={onLanguageChange}
          className="rounded-full border border-white/20 px-3 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-zinc-200 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition"
        >
          {language.toUpperCase()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
