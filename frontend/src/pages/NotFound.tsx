import { Link } from "react-router";

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - ¡Página No Encontrada!</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <p>
        <Link to="/">Volver a la página de inicio</Link>
      </p>
    </div>
  );
};

export default NotFound;