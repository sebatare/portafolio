import type { Language } from "../App";

type ContactProps = {
  language: Language;
};

const Contact = ({ language }: ContactProps) => {
  const text = {
    es: {
      title: "Contacto",
      subtitle: "Disponible para nuevas oportunidades.",
      email: "Correo",
    },
    en: {
      title: "Contact",
      subtitle: "Available for opportunities.",
      email: "Email",
    },
    de: {
      title: "Kontakt",
      subtitle: "Verfugbar fur neue Moglichkeiten.",
      email: "E-Mail",
    },
  }[language];

  return (
    <section id="contact" className="max-w-3xl mx-auto py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">{text.title}</h2>
      <p className="text-zinc-400 text-lg mb-8">{text.subtitle}</p>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <a href="https://github.com/sebatare" target="_blank" rel="noopener" className="text-cyan-400 hover:underline text-lg font-medium">GitHub</a>
        <a href="https://www.linkedin.com/in/sebatapiareb/" target="_blank" rel="noopener" className="text-cyan-400 hover:underline text-lg font-medium">LinkedIn</a>
        <a href="mailto:sebatapiareb@gmail.com" className="text-cyan-400 hover:underline text-lg font-medium">{text.email}</a>
      </div>
    </section>
  );
};

export default Contact;
