import React from "react";
import type { Language } from "../App";

const skills = {
  es: [
    { category: "Frontend", items: ["React", "TypeScript", "Vue"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL"] },
    { category: "Cloud", items: ["AWS", "Docker", "Linux"] },
  ],
  en: [
    { category: "Frontend", items: ["React", "TypeScript", "Vue"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL"] },
    { category: "Cloud", items: ["AWS", "Docker", "Linux"] },
  ],
  de: [
    { category: "Frontend", items: ["React", "TypeScript", "Vue"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL"] },
    { category: "Cloud", items: ["AWS", "Docker", "Linux"] },
  ],
};

type SkillsProps = {
  language: Language;
};

const Skills = ({ language }: SkillsProps) => {
  const text = {
    es: { title: "Habilidades" },
    en: { title: "Skills" },
    de: { title: "Fahigkeiten" },
  }[language];

  return (
    <section id="skills" className="max-w-3xl mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10 tracking-tight">{text.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills[language].map((cat) => (
          <div key={cat.category}>
            <h3 className="text-lg font-semibold text-cyan-400 mb-3">{cat.category}</h3>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item} className="text-zinc-300 text-base">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
