import type { Language } from "../App";
import { presentationContent, presentationSkills } from "../content/presentationContent.js";

type PresentacionProps = {
  language: Language;
};

const Presentacion = ({ language }: PresentacionProps) => {
  const content = presentationContent[language];

  return (
    <section className="mb-10 flex flex-col gap-8">
      {/* Tarjeta de presentación */}
      <div className="rounded-2xl bg-white/80 p-8 shadow-md border border-cyan-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h2 className="mb-4 text-2xl font-extrabold text-cyan-600 flex items-center gap-2">
          <span className="inline-block w-2 h-6 bg-gradient-to-b from-black to-neutral-700 rounded-full mr-2" />
          {content.aboutTitle}
        </h2>
        <p className="mb-6 text-justify text-cyan-800 leading-relaxed">{content.about}</p>
        <h3 className="mb-2 text-lg font-semibold text-cyan-500">{content.goalsTitle}</h3>
        <p className="mb-6 text-justify text-cyan-800">{content.goals}</p>
      </div>

      {/* Tarjeta de habilidades y reto */}
      <div className="rounded-2xl bg-white/80 p-8 shadow-md border border-cyan-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-cyan-500">{content.skillsTitle}</h3>
          <ul className="mb-6 flex flex-wrap gap-2">
            {presentationSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-black/30 bg-black/5 px-3 py-1 text-sm font-medium text-black/90 shadow-sm transition hover:bg-black/10 hover:text-black"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-cyan-500">{content.challengeTitle}</h3>
          <p className="text-justify text-neutral-900">{content.challenge}</p>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;

import type { Language } from "../App";
import { presentationContent, presentationSkills } from "../content/presentationContent.js";

type PresentacionProps = {
  language: Language;
};

const Presentacion = ({ language }: PresentacionProps) => {
  const content = presentationContent[language];

  return (
    <section className="mb-10 flex flex-col gap-8">
      {/* Tarjeta de presentación */}
      <div className="rounded-2xl bg-white/80 p-8 shadow-md border border-cyan-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h2 className="mb-4 text-2xl font-extrabold text-cyan-600 flex items-center gap-2">
          <span className="inline-block w-2 h-6 bg-gradient-to-b from-black to-neutral-700 rounded-full mr-2" />
          {content.aboutTitle}
        </h2>
        <p className="mb-6 text-justify text-cyan-800 leading-relaxed">{content.about}</p>
        <h3 className="mb-2 text-lg font-semibold text-cyan-500">{content.goalsTitle}</h3>
        <p className="mb-6 text-justify text-cyan-800">{content.goals}</p>
      </div>

      {/* Tarjeta de habilidades y reto */}
      <div className="rounded-2xl bg-white/80 p-8 shadow-md border border-cyan-100 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-cyan-500">{content.skillsTitle}</h3>
          <ul className="mb-6 flex flex-wrap gap-2">
            {presentationSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-black/30 bg-black/5 px-3 py-1 text-sm font-medium text-black/90 shadow-sm transition hover:bg-black/10 hover:text-black"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-semibold text-cyan-500">{content.challengeTitle}</h3>
          <p className="text-justify text-neutral-900">{content.challenge}</p>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;