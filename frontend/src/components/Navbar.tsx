import type { Language } from "../App";

type NavbarProps = {
  language: Language;
  onLanguageChange: () => void;
};

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const labels = {
    es: { about: "Perfil", projects: "Proyectos", experience: "Trayectoria", contact: "Contacto", switchLanguage: "Cambiar idioma" },
    en: { about: "Profile", projects: "Projects", experience: "Journey", contact: "Contact", switchLanguage: "Change language" },
    de: { about: "Profil", projects: "Projekte", experience: "Werdegang", contact: "Kontakt", switchLanguage: "Sprache wechseln" },
  }[language];

  return (
    <nav className="fixed top-0 left-0 z-40 w-full backdrop-blur-xl bg-black/35 border-b border-white/10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-5 md:px-8 py-3 gap-3">
        <span className="text-lg font-semibold tracking-tight text-white">ST</span>
        <ul className="hidden md:flex gap-6 text-zinc-300 text-sm font-medium">
          <li><a href="#about" className="hover:text-[var(--accent-primary)] transition">{labels.about}</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">{labels.projects}</a></li>
          <li><a href="#skills" className="hover:text-[var(--accent-primary)] transition">Stack</a></li>
          <li><a href="#experience" className="hover:text-[var(--accent-primary)] transition">{labels.experience}</a></li>
          <li><a href="#contact" className="hover:text-[var(--accent-primary)] transition">{labels.contact}</a></li>
          <li><a href="https://github.com/sebatare" target="_blank" rel="noopener" className="hover:text-[var(--accent-primary)] transition">GitHub</a></li>
        </ul>
        <button
          type="button"
          aria-label={labels.switchLanguage}
          title={labels.switchLanguage}
          onClick={onLanguageChange}
          className="rounded-full border border-white/20 px-3 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-zinc-200 hover:text-white hover:border-[var(--accent-primary)] hover:bg-[rgba(12,211,192,0.14)] transition"
        >
          {language.toUpperCase()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
