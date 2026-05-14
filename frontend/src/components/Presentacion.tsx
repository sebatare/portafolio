
import type { Language } from "../App";

type PresentacionProps = {
  language: Language;
};

const Presentacion = ({ language }: PresentacionProps) => {
  const content = {
    es: {
      aboutTitle: "Sobre mi",
      about:
        "Hola, soy Sebastian Tapia, chileno, ingeniero informatico y desarrollador fullstack. Actualmente estoy en Alemania con working holiday, estudiando y profundizando especialmente en backend, sin dejar de lado el desarrollo de interfaces utiles y claras.",
      goalsTitle: "Objetivo profesional",
      goals:
        "Quiero aportar como fullstack con foco backend, construir soluciones confiables de punta a punta y seguir creciendo en Cloud/DevOps para disenar productos robustos y escalables.",
      skillsTitle: "Habilidades",
      challengeTitle: "Reto actual",
      challenge:
        "Mi reto es consolidar experiencia internacional trabajando en ingles, mejorar practicas de arquitectura y elevar la calidad de despliegues y observabilidad en entornos reales.",
    },
    en: {
      aboutTitle: "About me",
      about:
        "Hi, I am Sebastian Tapia, from Chile, a computer engineer and fullstack developer. I am currently in Germany on a working holiday, studying and going deeper into backend development while still building clear and practical user interfaces.",
      goalsTitle: "Professional goal",
      goals:
        "I want to contribute as a backend-focused fullstack developer, build reliable end-to-end solutions, and keep growing in Cloud/DevOps to design robust and scalable products.",
      skillsTitle: "Skills",
      challengeTitle: "Current challenge",
      challenge:
        "My current challenge is to strengthen international experience working in English, improve architecture practices, and raise deployment and observability quality in real environments.",
    },
    de: {
      aboutTitle: "Uber mich",
      about:
        "Hallo, ich bin Sebastian Tapia aus Chile, Informatikingenieur und Fullstack-Entwickler. Zurzeit bin ich mit einem Working-Holiday-Visum in Deutschland, lerne weiter und vertiefe mich vor allem im Backend, wahrend ich weiterhin klare und nutzliche Benutzeroberflachen entwickle.",
      goalsTitle: "Berufliches Ziel",
      goals:
        "Ich mochte als Fullstack-Entwickler mit Backend-Fokus beitragen, zuverlassige End-to-End-Losungen bauen und mich im Bereich Cloud/DevOps weiterentwickeln, um robuste und skalierbare Produkte zu gestalten.",
      skillsTitle: "Fahigkeiten",
      challengeTitle: "Aktuelle Herausforderung",
      challenge:
        "Meine aktuelle Herausforderung ist es, internationale Erfahrung in englischer Arbeitssprache zu festigen, Architekturpraktiken zu verbessern und die Qualitat von Deployments und Observability in realen Umgebungen zu steigern.",
    },
  }[language];

  const skills = ["Django", "Node", "React", "PostgreSQL", "AWS", "Linux"];

  return (
    <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-2xl font-semibold">{content.aboutTitle}</h2>
      <p className="mb-6 text-justify text-slate-700">{content.about}</p>

      <h3 className="mb-2 text-xl font-semibold">{content.goalsTitle}</h3>
      <p className="mb-6 text-justify text-slate-700">{content.goals}</p>

      <h3 className="mb-2 text-xl font-semibold">{content.skillsTitle}</h3>
      <ul className="mb-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm">
            {skill}
          </li>
        ))}
      </ul>

      <h3 className="mb-2 text-xl font-semibold">{content.challengeTitle}</h3>
      <p className="text-justify text-slate-700">{content.challenge}</p>
    </section>
  );
};

export default Presentacion;