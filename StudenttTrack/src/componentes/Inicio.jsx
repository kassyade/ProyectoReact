import React from 'react';
import '../estilos/Incio.css'
import { Link } from 'react-router-dom';

const Inicio = ({ clases }) => {
  return (
    <div className="container">
      <header>
        StudentTrack
      </header>

      {/* Contenedor de las tarjetas */}
      <div className="cards-container"   >
        {clases.map((clase, index) => (
          <div className="tarjeta" key={index}>
            <div className="tarjeta-img"></div>
            <div className="tarjeta-contenido">
              <div className="nombre">{clase.nombre}</div>
              <div className="id">{clase.id}</div>
            </div>
          </div>
        ))}
      </div>

      <footer>
        © 2025 StudentTrack. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default Inicio;
