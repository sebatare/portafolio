import { useState, useEffect } from 'react';
import type { Project } from '../types/Project';
import type { Language } from '../App';

type ListaProyectosProps = {
  language: Language;
};

const ListaProyectos = ({ language }: ListaProyectosProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const text = {
    es: {
      title: "Proyectos",
      loading: "Cargando proyectos...",
      error: "Error al cargar los proyectos:",
      noProjects: "No hay proyectos disponibles.",
      technologies: "Tecnologias",
      demo: "Demo",
      repository: "Repositorio",
      notAvailable: "No disponible",
    },
    en: {
      title: "Projects",
      loading: "Loading projects...",
      error: "Error loading projects:",
      noProjects: "No projects available.",
      technologies: "Technologies",
      demo: "Demo",
      repository: "Repository",
      notAvailable: "Not available",
    },
    de: {
      title: "Projekte",
      loading: "Projekte werden geladen...",
      error: "Fehler beim Laden der Projekte:",
      noProjects: "Keine Projekte verfugbar.",
      technologies: "Technologien",
      demo: "Demo",
      repository: "Repository",
      notAvailable: "Nicht verfugbar",
    },
  }[language];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
        const endpoint = baseUrl.endsWith('/api')
          ? `${baseUrl}/projects`
          : `${baseUrl}/api/projects`;

        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('Unknown error while loading projects'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-48 text-lg text-slate-500">
        {text.loading}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-48 text-lg text-red-500">
        {text.error} {error.message}
      </div>
    );
  }

  return (
    <section className="py-20" id="projects">
      <h2 className="mb-14 text-4xl md:text-5xl font-semibold text-white tracking-tight text-center">{text.title}</h2>
      {projects.length > 0 ? (
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-500 p-8 flex flex-col min-h-[220px]"
            >
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition">{project.name}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-4 line-clamp-3">{project.description ?? text.notAvailable}</p>
              <p className="text-zinc-500 text-sm mb-4">
                {text.technologies}: {project.technologies?.map(tech => tech.name).join(', ') || text.notAvailable}
              </p>
              <div className="flex gap-4 mt-auto">
                {project.url && (
                  <a
                    className="inline-block px-4 py-2 rounded-full border border-cyan-400 text-cyan-400 font-medium text-sm hover:bg-cyan-400 hover:text-black transition"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text.demo}
                  </a>
                )}
                {project.repository && (
                  <a
                    className="inline-block px-4 py-2 rounded-full border border-blue-500 text-blue-500 font-medium text-sm hover:bg-blue-500 hover:text-black transition"
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text.repository}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-center text-zinc-500/80">{text.noProjects}</p>
      )}
    </section>
  );
};

export default ListaProyectos;