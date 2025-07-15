import { useState, useEffect } from 'react';
import type { Project } from '../types/Project';

const ListaProyectos = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-48 text-lg text-gray-400">
        Cargando proyectos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-48 text-lg text-red-400">
        Error al cargar los proyectos: {error.message}
      </div>
    );
  }

  return (
    <>
      {projects.length > 0 ? (
        <div>
          {projects.map((project) => (
            <div key={project.id} className="group my-5 py-1">
              {/* SOLUCIÓN APLICADA AQUÍ: Usa el operador de encadenamiento opcional `?.` */}
              <h3 title={`Tecnologías: ${project.technologies?.map(tech => tech.name).join(', ') || 'N/A'}`} className="group-hover:underline transition-all duration-200 text-xl">
                {project.name}
              </h3>
              <p>{project.description}</p>

              <a className='hover:underline' href={project.url || '#'}> {project.url} </a>
              <br />
              <a className='hover:underline' href={project.repository || '#'}>{project.repository}</a>

            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No hay proyectos disponibles.</p>
      )}
    </>
  );
};

export default ListaProyectos;