import React, { useState } from 'react';
import '../estilos/Clase.css'
import { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const Clase = ({claseSeleccionada}) => {
   // console.log(claseSeleccionada)

    const[alumnos,setAlumnos]=useState([]);
    


    useEffect(
        ()=>{
          axios.get("/data/clases.json")
          .then((respuesta)=>{
            const todosAlumnos =respuesta.data.alumnos
            const resultado = todosAlumnos.filter((a)=> a.idClase === claseSeleccionada.id )
            setAlumnos(resultado)
          }
                
        )
          .catch((e)=>console.log("error al pillar los datos",e))
    
        },[]
      )

      
     console.log(alumnos)



    return (
        <div>
        <header>
            Lista de alumnos de {claseSeleccionada.nombre}
        </header>
        <div className="contenedor-alumnos">
            <div className="alumnos-grid">
                {alumnos.map((a, index) => (
                    <div key={index} className="alumno-card">
                        Nombre: {a.nombre} - Apellidos: {a.apellido}
                    </div>
                ))}
            </div>
            <Link to="/inicio" className="volver-link">Volver a las clases</Link>
        </div>
    </div>
    );
}

export default Clase;
