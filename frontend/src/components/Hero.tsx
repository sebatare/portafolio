import type { Language } from "../App";

type HeroProps = {
  language: Language;
};

const Hero = ({ language }: HeroProps) => {
  const text = {
    es: {
      subtitle: "Ingeniero Fullstack creando sistemas web escalables y arquitecturas backend.",
      location: "Actualmente basado en Berlin.",
      cta: "Ver Proyectos",
    },
    en: {
      subtitle: "Fullstack Engineer crafting scalable web systems and backend architectures.",
      location: "Currently based in Berlin.",
      cta: "View Projects",
    },
    de: {
      subtitle: "Fullstack Engineer mit Fokus auf skalierbare Websysteme und Backend-Architekturen.",
      location: "Aktuell in Berlin ansassig.",
      cta: "Projekte ansehen",
    },
  }[language];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_40%)]" />
      </div>
      <h1 className="relative z-10 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] text-white mb-6">
        Sebastián Tapia
      </h1>
      <p className="relative z-10 text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-8">
        {text.subtitle}<br />
        {text.location}
      </p>
      <a href="#projects" className="relative z-10 inline-block px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold text-base shadow hover:bg-cyan-500 transition">
        {text.cta}
      </a>
    </section>
  );
};

export default Hero;
