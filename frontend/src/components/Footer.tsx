import type { Language } from "../App";

type FooterProps = {
    language: Language;
};

const Footer = ({ language }: FooterProps) => {
    const text = {
        es: {
            builtWith: "Construido con",
            and: "y",
        },
        en: {
            builtWith: "Built with",
            and: "and",
        },
        de: {
            builtWith: "Erstellt mit",
            and: "und",
        },
    }[language];

    return (
        <footer className="mt-16 py-8 text-center text-zinc-500 text-sm">
            {text.builtWith} <span className="font-semibold text-white">React</span>, <span className="font-semibold text-white">TypeScript</span> {text.and} <span className="font-semibold text-white">TailwindCSS</span>.
        </footer>
    );
};

export default Footer