import Footer from "./components/Footer";
import ListaProyectos from "./components/ListaProyectos";
import Presentacion from "./components/Presentacion";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="bg-white flex justify-center grow">
        <div className="mx-auto max-w-80 md:max-w-1/3">
          <h1 className="text-5xl text-center font-light my-10 hover:underline decoration-1">
            Portafolissso
          </h1>
          <Presentacion />
          <ListaProyectos />
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default App;