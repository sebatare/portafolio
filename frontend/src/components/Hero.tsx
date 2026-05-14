import type { Language } from "../App";

type HeroProps = {
  language: Language;
};

const Hero = ({ language }: HeroProps) => {
  const text = {
    es: {
      role: "Fullstack Developer / Software Engineer",
      subtitle:
        "Construyo productos web modernos con foco en backend architecture, escalabilidad y cloud infrastructure.",
      location: "Actualmente en Berlin, Alemania.",
      ctaPrimary: "Ver Proyectos",
      ctaSecondary: "Contactar",
    },
    en: {
      role: "Fullstack Developer / Software Engineer",
      subtitle:
        "I build modern web products with a strong focus on backend architecture, scalability, and cloud infrastructure.",
      location: "Currently in Berlin, Germany.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Contact",
    },
    de: {
      role: "Fullstack Entwickler / Software Engineer",
      subtitle:
        "Ich entwickle moderne Webprodukte mit Fokus auf Backend-Architektur, Skalierbarkeit und Cloud-Infrastruktur.",
      location: "Aktuell in Berlin, Deutschland.",
      ctaPrimary: "Projekte",
      ctaSecondary: "Kontakt",
    },
  }[language];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[66vh] py-20 text-center">
      <div className="absolute inset-0 pointer-events-none opacity-70">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top,rgba(12,211,192,0.18),transparent_45%)]" />
      </div>
      <p className="relative z-10 mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-[0.12em] uppercase text-[var(--text-muted)]">
        {text.role}
      </p>
      <h1 className="relative z-10 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] text-[var(--text-primary)] mb-6">
        Sebastián Tapia
      </h1>
      <p className="relative z-10 text-lg md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-4">
        {text.subtitle}<br />
      </p>
      <p className="relative z-10 text-sm md:text-base text-[var(--text-muted)] mb-10">
        {text.location}
      </p>
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <a href="#projects" className="inline-block px-6 py-3 rounded-full bg-[var(--accent-primary)] text-[#031410] font-semibold text-base shadow hover:brightness-95 transition">
          {text.ctaPrimary}
        </a>
        <a href="#contact" className="inline-block px-6 py-3 rounded-full border border-white/20 text-[var(--text-primary)] font-semibold text-base hover:bg-white/8 transition">
          {text.ctaSecondary}
        </a>
      </div>
    </section>
  );
};

export default Hero;
