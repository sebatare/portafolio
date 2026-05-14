import React from "react";
import type { Language } from "../App";

const experiences = {
  es: [
    { year: "2025", title: "Amazon Logistics", location: "Berlin" },
    { year: "2024", title: "Desarrollador Fullstack", location: "Chile" },
  ],
  en: [
    { year: "2025", title: "Amazon Logistics", location: "Berlin" },
    { year: "2024", title: "Fullstack Developer", location: "Chile" },
  ],
  de: [
    { year: "2025", title: "Amazon Logistics", location: "Berlin" },
    { year: "2024", title: "Fullstack-Entwickler", location: "Chile" },
  ],
};

type ExperienceProps = {
  language: Language;
};

const Experience = ({ language }: ExperienceProps) => {
  const text = {
    es: { title: "Experiencia" },
    en: { title: "Experience" },
    de: { title: "Erfahrung" },
  }[language];

  return (
    <section id="experience" className="max-w-3xl mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10 tracking-tight">{text.title}</h2>
      <ol className="relative border-l border-white/10 ml-4">
        {experiences[language].map((exp, idx) => (
          <li key={idx} className="mb-12 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-400 rounded-full ring-8 ring-[#0A0A0A] text-black font-bold text-sm">{exp.year}</span>
            <h3 className="text-xl font-semibold text-white leading-tight">{exp.title}</h3>
            <p className="text-zinc-400 text-base">{exp.location}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
