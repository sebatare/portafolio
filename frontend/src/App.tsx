import ListaProyectos from "./components/ListaProyectos";
import Presentacion from "./components/Presentacion";
import { motion } from "framer-motion"; // Import motion for overall app animation

const App = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-zinc-900 to-black text-gray-100 font-sans p-4"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen-minus-padding" // Custom class for height
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8 drop-shadow-lg">
          Mi Portafolio Digital
        </h1>
        <Presentacion />
        <ListaProyectos />
      </motion.div>
    </div>
  );
};

export default App;