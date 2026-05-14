import type { Language } from "../App";

const skills = {
  es: [
    { category: "Frontend", items: ["React", "TypeScript", "Vue", "TailwindCSS", "Vite", "React Native"] },
    { category: "Backend", items: ["Node.js", "Express.js", ".NET", "REST APIs", "JWT", "Role-based auth"] },
    { category: "Data", items: ["PostgreSQL", "SQL", "Entity Framework", "Sequelize", "Data modeling"] },
    { category: "Cloud & DevOps", items: ["AWS EC2", "AWS RDS", "AWS Cognito", "Docker", "GitHub Actions", "Linux/Bash"] },
  ],
  en: [
    { category: "Frontend", items: ["React", "TypeScript", "Vue", "TailwindCSS", "Vite", "React Native"] },
    { category: "Backend", items: ["Node.js", "Express.js", ".NET", "REST APIs", "JWT", "Role-based auth"] },
    { category: "Data", items: ["PostgreSQL", "SQL", "Entity Framework", "Sequelize", "Data modeling"] },
    { category: "Cloud & DevOps", items: ["AWS EC2", "AWS RDS", "AWS Cognito", "Docker", "GitHub Actions", "Linux/Bash"] },
  ],
  de: [
    { category: "Frontend", items: ["React", "TypeScript", "Vue", "TailwindCSS", "Vite", "React Native"] },
    { category: "Backend", items: ["Node.js", "Express.js", ".NET", "REST APIs", "JWT", "Role-based auth"] },
    { category: "Data", items: ["PostgreSQL", "SQL", "Entity Framework", "Sequelize", "Data modeling"] },
    { category: "Cloud & DevOps", items: ["AWS EC2", "AWS RDS", "AWS Cognito", "Docker", "GitHub Actions", "Linux/Bash"] },
  ],
};

type SkillsProps = {
  language: Language;
};

const Skills = ({ language }: SkillsProps) => {
  const text = {
    es: { title: "Stack Tecnico", subtitle: "Capacidades enfocadas en arquitectura, producto y despliegue." },
    en: { title: "Technical Stack", subtitle: "Capabilities focused on architecture, product, and deployment." },
    de: { title: "Technischer Stack", subtitle: "Fahigkeiten mit Fokus auf Architektur, Produkt und Deployment." },
  }[language];

  return (
    <section id="skills" className="max-w-3xl mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-3 tracking-tight">{text.title}</h2>
      <p className="text-[var(--text-muted)] mb-10">{text.subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {skills[language].map((cat) => (
          <div key={cat.category} className="rounded-2xl border border-white/10 bg-white/3 p-6">
            <h3 className="text-lg font-semibold text-[var(--accent-primary)] mb-3">{cat.category}</h3>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item} className="text-[var(--text-secondary)] text-base">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
