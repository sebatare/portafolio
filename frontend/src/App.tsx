import Footer from "./components/Footer";
import ListaProyectos from "./components/ListaProyectos";
import Presentacion from "./components/Presentacion";
import { useState } from "react";

export type Language = "es" | "en" | "de";

const nextLanguage: Record<Language, Language> = {
  es: "en",
  en: "de",
  de: "es",
};

const languageButtonLabel: Record<Language, string> = {
  es: "ES",
  en: "EN",
  de: "DE",
};

const App = () => {
  const [language, setLanguage] = useState<Language>("es");

  const text = {
    es: {
      title: "Portafolio de Sebastian Tapia",
      subtitle: "Desarrollador Fullstack con foco backend",
      changeLanguage: "Cambiar idioma",
    },
    en: {
      title: "Sebastian Tapia Portfolio",
      subtitle: "Fullstack Developer focused on backend",
      changeLanguage: "Change language",
    },
    de: {
      title: "Portfolio von Sebastian Tapia",
      subtitle: "Fullstack-Entwickler mit Backend-Fokus",
      changeLanguage: "Sprache wechseln",
    },
  }[language];

  const handleLanguageChange = () => {
    setLanguage((current) => nextLanguage[current]);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex w-full max-w-4xl flex-col px-4 py-8 md:px-8">
        <header className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">{text.title}</h1>
            <button
              type="button"
              aria-label={text.changeLanguage}
              title={text.changeLanguage}
              onClick={handleLanguageChange}
              className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-semibold transition hover:bg-slate-200"
            >
              {languageButtonLabel[language]}
            </button>
          </div>
          <p className="text-sm text-slate-600 md:text-base">{text.subtitle}</p>
        </header>

        <main className="grow">
          <Presentacion language={language} />
          <ListaProyectos language={language} />
        </main>

        <Footer language={language} />
      </div>
    </div>
  );
};

export default App;