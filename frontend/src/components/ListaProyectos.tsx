import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion
import type { Project } from '../types/Project'; // Adjust path if necessary

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

  // Framer Motion variants for staggered list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children animations by 0.1 seconds
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
    <div className="w-full max-w-6xl mx-auto my-12 p-8 bg-zinc-900/60 rounded-3xl shadow-2xl border border-zinc-800">
      <h2 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-md">
        Proyectos Destacados
      </h2>
      {projects.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(0,0,0,0.6)" }} // Lift and shadow on hover
              className="bg-zinc-800/80 rounded-xl p-6 shadow-lg flex flex-col justify-between border border-zinc-700 hover:border-blue-500 transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-semibold text-blue-300 mb-3 leading-tight">
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200 block truncate"
                >
                  {project.url}
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-700 text-xs text-gray-500 flex justify-between items-center">
                <span>
                  Creado: {new Date(project.createDate).toLocaleDateString("es-CL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                {/* Optional: Add a "View Project" button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-colors duration-200"
                >
                  Ver Proyecto
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-gray-400 text-lg">No hay proyectos disponibles.</p>
      )}
    </div>
  );
};

export default ListaProyectos;