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
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-2xl font-semibold">{text.title}</h2>
      {projects.length > 0 ? (
        <div className="space-y-4">
          {projects.map((project) => (
            <article key={project.id} className="rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
              <h3 title={`${text.technologies}: ${project.technologies?.map(tech => tech.name).join(', ') || text.notAvailable}`} className="text-xl font-semibold">
                {project.name}
              </h3>
              <p className="mt-1 text-slate-700">{project.description ?? text.notAvailable}</p>

              <p className="mt-2 text-sm text-slate-500">
                {text.technologies}: {project.technologies?.map(tech => tech.name).join(', ') || text.notAvailable}
              </p>

              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                {project.url ? (
                  <a className='rounded-lg border border-slate-300 px-3 py-1 font-medium hover:bg-slate-100' href={project.url} target="_blank" rel="noreferrer">
                    {text.demo}
                  </a>
                ) : (
                  <span className="rounded-lg border border-dashed border-slate-300 px-3 py-1 text-slate-500">
                    {text.demo}: {text.notAvailable}
                  </span>
                )}

                {project.repository ? (
                  <a className='rounded-lg border border-slate-300 px-3 py-1 font-medium hover:bg-slate-100' href={project.repository} target="_blank" rel="noreferrer">
                    {text.repository}
                  </a>
                ) : (
                  <span className="rounded-lg border border-dashed border-slate-300 px-3 py-1 text-slate-500">
                    {text.repository}: {text.notAvailable}
                  </span>
                )}
              </div>

            </article>
          ))}
        </div>
      ) : (
        <p className="text-center">{text.noProjects}</p>
      )}
    </section>
  );
};

export default ListaProyectos;