import React from 'react';
import '../estilos/Incio.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Inicio = ({ clases,setClaseSeleccionada }) => {


  //iniciamos la constante para enviar al usuario a la clase seleccionada
const navigate =useNavigate();

  const seleccion =(clase)=>{
    //cambiamos la clase seleccioanda que viene de la app
    setClaseSeleccionada(clase)
    //redirigimos a clase que ahora tiene el id 
    navigate('/clase')
  }
  
  
  
  return (
    <div className="container">
      <header>
        StudentTrack
      </header>

      {/* Contenedor de las tarjetas */}
      <div className="cards-container"   >
        {clases.map((clase, index) => (
          <div className="tarjeta" key={index} onClick={()=>seleccion(clase)}   >
            <div className="tarjeta-img"></div>
            <div className="tarjeta-contenido">
              <div className="nombre">{clase.nombre}</div>
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
