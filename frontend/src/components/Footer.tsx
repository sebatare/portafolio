import type { Language } from "../App";

type FooterProps = {
    language: Language;
};

const Footer = ({ language }: FooterProps) => {
    const text = {
        es: {
            email: "Correo",
            phone: "Telefono",
            linkedin: "LinkedIn",
        },
        en: {
            email: "Email",
            phone: "Phone",
            linkedin: "LinkedIn",
        },
        de: {
            email: "E-Mail",
            phone: "Telefon",
            linkedin: "LinkedIn",
        },
    }[language];

    return (
        <footer className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-700 shadow-sm md:text-sm">
            <ul className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <li>
                    {text.email}: <a className="font-medium hover:underline" href="mailto:sebatapiareb@gmail.com">sebatapiareb@gmail.com</a>
                </li>
                <li>{text.phone}: +56 9 9931 8387</li>
                <li>
                    {text.linkedin}: <a className="font-medium hover:underline" href="https://www.linkedin.com/in/sebatapiareb/" target="_blank" rel="noreferrer">sebatapiareb</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer