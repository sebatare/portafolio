import type { Language } from "../App";

type FooterProps = {
    language: Language;
};

const Footer = ({ language }: FooterProps) => {
    const year = new Date().getFullYear();
    const text = {
        es: {
            builtWith: "Construido con",
            and: "y",
            note: "Enfocado en backend, arquitectura y mejora continua.",
        },
        en: {
            builtWith: "Built with",
            and: "and",
            note: "Focused on backend, architecture, and continuous improvement.",
        },
        de: {
            builtWith: "Erstellt mit",
            and: "und",
            note: "Fokus auf Backend, Architektur und kontinuierliche Weiterentwicklung.",
        },
    }[language];

    return (
        <footer className="mt-16 py-8 text-center text-[var(--text-muted)] text-sm border-t border-white/10">
            <p className="mb-2">{text.builtWith} <span className="font-semibold text-[var(--text-primary)]">React</span>, <span className="font-semibold text-[var(--text-primary)]">TypeScript</span> {text.and} <span className="font-semibold text-[var(--text-primary)]">TailwindCSS</span>.</p>
            <p>{text.note}</p>
            <p className="mt-2">© {year} Sebastián Tapia</p>
        </footer>
    );
};

export default Footer