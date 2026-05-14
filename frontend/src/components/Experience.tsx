import type { Language } from "../App";

const experiences = {
  es: [
    {
      year: "2025 - Hoy",
      title: "Transicion profesional en Berlin",
      location: "Berlin, Alemania",
      detail:
        "Adaptacion internacional mientras continuo construyendo proyectos de software y fortaleciendo aleman e ingles tecnico.",
    },
    {
      year: "2024",
      title: "Fullstack Development Projects",
      location: "Chile",
      detail:
        "Desarrollo de ecommerce, sistemas de reservas y apps moviles con foco en backend APIs, autenticacion y modelado de datos.",
    },
    {
      year: "2019 - 2024",
      title: "Ingenieria en Informatica",
      location: "Duoc UC, Chile",
      detail:
        "Formacion en software engineering, bases de datos, redes, desarrollo backend y diseno de sistemas.",
    },
  ],
  en: [
    {
      year: "2025 - Present",
      title: "Professional transition in Berlin",
      location: "Berlin, Germany",
      detail:
        "International adaptation while continuing to build software projects and strengthening German and technical English.",
    },
    {
      year: "2024",
      title: "Fullstack Development Projects",
      location: "Chile",
      detail:
        "Built ecommerce, reservation systems, and mobile apps focused on backend APIs, authentication, and data modeling.",
    },
    {
      year: "2019 - 2024",
      title: "Computer Engineering",
      location: "Duoc UC, Chile",
      detail:
        "Training in software engineering, databases, networking, backend development, and system design.",
    },
  ],
  de: [
    {
      year: "2025 - Heute",
      title: "Beruflicher Ubergang in Berlin",
      location: "Berlin, Deutschland",
      detail:
        "Internationale Anpassung bei gleichzeitiger Weiterentwicklung von Softwareprojekten und technischem Deutsch/Englisch.",
    },
    {
      year: "2024",
      title: "Fullstack Entwicklungsprojekte",
      location: "Chile",
      detail:
        "Entwicklung von E-Commerce-, Reservierungs- und Mobile-Projekten mit Fokus auf Backend-APIs, Authentifizierung und Datenmodellierung.",
    },
    {
      year: "2019 - 2024",
      title: "Informatikstudium",
      location: "Duoc UC, Chile",
      detail:
        "Ausbildung in Software Engineering, Datenbanken, Netzwerken, Backend-Entwicklung und Systemdesign.",
    },
  ],
};

type ExperienceProps = {
  language: Language;
};

const Experience = ({ language }: ExperienceProps) => {
  const text = {
    es: { title: "Trayectoria" },
    en: { title: "Journey" },
    de: { title: "Werdegang" },
  }[language];

  return (
    <section id="experience" className="max-w-3xl mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-10 tracking-tight">{text.title}</h2>
      <ol className="relative border-l border-white/10 ml-4">
        {experiences[language].map((exp, idx) => (
          <li key={idx} className="mb-12 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-[var(--accent-primary)] rounded-full ring-8 ring-[var(--bg-primary)] text-black font-bold text-xs" />
            <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)] mb-2">{exp.year}</p>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] leading-tight">{exp.title}</h3>
            <p className="text-[var(--accent-secondary)] text-sm mb-2">{exp.location}</p>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed">{exp.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
