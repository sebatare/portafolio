// src/types/Project.ts

export interface Project {
  id: number; // Changed to number, common for SERIAL PRIMARY KEY
  uuid: string; // This remains string
  name: string;
  description: string | null; // Can be null
  url: string | null; // Can be null
  repository: string | null; // Can be null
  createDate: string; // Comes as string from API, convert to Date if needed for ops
  updateDate: string; // Comes as string from API
  technologies: Technology[]; // Make sure 'Technologies' here refers to 'Technology'
}

export interface Technology { // Renamed from Technologies for clarity (single item)
  id: number;
  name: string;
}