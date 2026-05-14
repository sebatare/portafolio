import type { Language } from "../App";

type ContactProps = {
  language: Language;
};

const Contact = ({ language }: ContactProps) => {
  const text = {
    es: {
      title: "Contacto",
      subtitle: "Disponible para oportunidades backend y fullstack en Europa o remoto.",
      location: "Berlin, Alemania | Espanol (nativo), Ingles (profesional), Aleman (en progreso)",
      email: "Correo",
    },
    en: {
      title: "Contact",
      subtitle: "Available for backend and fullstack opportunities in Europe or remote.",
      location: "Berlin, Germany | Spanish (native), English (professional), German (learning)",
      email: "Email",
    },
    de: {
      title: "Kontakt",
      subtitle: "Verfugbar fur Backend- und Fullstack-Moglichkeiten in Europa oder remote.",
      location: "Berlin, Deutschland | Spanisch (Muttersprache), Englisch (beruflich), Deutsch (lernend)",
      email: "E-Mail",
    },
  }[language];

  return (
    <section id="contact" className="max-w-3xl mx-auto py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-6 tracking-tight">{text.title}</h2>
      <p className="text-[var(--text-secondary)] text-lg mb-3">{text.subtitle}</p>
      <p className="text-[var(--text-muted)] text-sm mb-8">{text.location}</p>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <a href="https://github.com/sebatare" target="_blank" rel="noopener" className="text-[var(--accent-primary)] hover:underline text-lg font-medium">GitHub</a>
        <a href="https://www.linkedin.com/in/sebatapiareb/" target="_blank" rel="noopener" className="text-[var(--accent-primary)] hover:underline text-lg font-medium">LinkedIn</a>
        <a href="mailto:sebatapiareb@gmail.com" className="text-[var(--accent-primary)] hover:underline text-lg font-medium">{text.email}</a>
      </div>
    </section>
  );
};

export default Contact;
