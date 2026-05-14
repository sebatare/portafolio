type Language = "es" | "en" | "de";

type PresentationSection = {
  aboutTitle: string;
  about: string;
  goalsTitle: string;
  goals: string;
  skillsTitle: string;
  challengeTitle: string;
  challenge: string;
};

export const presentationContent: Record<Language, PresentationSection>;
export const presentationSkills: string[];
