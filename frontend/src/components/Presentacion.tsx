import type { Language } from "../App";
import { presentationContent, presentationSkills } from "../content/presentationContent.js";

type PresentacionProps = {
  language: Language;
};

const Presentacion = ({ language }: PresentacionProps) => {
  const content = presentationContent[language];

  return (
    <section id="about" className="mb-12 flex flex-col gap-7">
      <div className="rounded-3xl bg-[var(--surface-1)] p-8 md:p-10 border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1">
        <h2 className="mb-4 text-2xl md:text-3xl font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <span className="inline-block w-2 h-6 bg-[var(--accent-primary)] rounded-full mr-2" />
          {content.aboutTitle}
        </h2>
        <p className="mb-7 text-[var(--text-secondary)] leading-relaxed">{content.about}</p>
        <h3 className="mb-2 text-lg font-semibold text-[var(--accent-primary)]">{content.goalsTitle}</h3>
        <p className="text-[var(--text-secondary)]">{content.goals}</p>
      </div>

      <div className="rounded-3xl bg-[var(--surface-2)] p-8 md:p-10 border border-white/10 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-[var(--accent-secondary)]">{content.skillsTitle}</h3>
          <ul className="mb-6 flex flex-wrap gap-2">
            {presentationSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-white/15 bg-white/6 px-3 py-1 text-sm font-medium text-[var(--text-secondary)] shadow-sm transition hover:bg-white/10 hover:text-[var(--text-primary)]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-[var(--accent-secondary)]">{content.challengeTitle}</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed">{content.challenge}</p>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;
