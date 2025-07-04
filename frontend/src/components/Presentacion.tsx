import { motion } from "framer-motion";

const Presentacion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
      animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
      transition={{ duration: 0.7, delay: 0.2 }} // Slightly delayed and smoother
      className="text-center max-w-3xl mx-auto mb-16 p-6 bg-zinc-800/50 rounded-xl shadow-2xl backdrop-blur-sm border border-zinc-700"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-blue-300"
      >
        ¡Hola! Bienvenido a mi Portafolio
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-lg md:text-xl leading-relaxed text-gray-300"
      >
        Mi nombre es **Sebastián Tapia**, soy ingeniero informático especializado en el desarrollo de software. A continuación, te presento algunos{" "}
        <span className="text-purple-400 font-semibold">proyectos personales</span>{" "}
        que he desarrollado utilizando diversas tecnologías, tanto en{" "}
        <span className="text-green-300 font-semibold">frontend</span>,{" "}
        <span className="text-yellow-300 font-semibold">backend</span>, como en{" "}
        <span className="text-red-300 font-semibold">DevOps</span>. Todos ellos cuentan con un repositorio disponible para que puedas explorar el código y la documentación.
      </motion.p>
    </motion.div>
  );
};

export default Presentacion;