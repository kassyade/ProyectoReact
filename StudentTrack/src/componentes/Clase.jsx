import React, { useState } from 'react';
import '../estilos/Clase.css'
import { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const Clase = ({claseSeleccionada}) => {
   // console.log(claseSeleccionada)

    const[alumnos,setAlumnos]=useState([]);
    const   alumnoSeleccionado =(a)=>{
      console.log(a)
    }
    //MODAL DE NUEVO ALUMNO
    const  [modalNuevo,setModalNuevo]=useState(false);
    
    const crearAlumno=()=>{
      setModalNuevo(true)
    }


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

      
    // console.log(alumnos)



    return (
        <div>
        <header>
            Lista de alumnos de {claseSeleccionada.nombre}
        </header>
        <div className="contenedor-alumnos">
            <div className="alumnos-grid">
                {alumnos.map((a, index) => (
                    <div key={index} className="alumno-card"  onClick={()=>alumnoSeleccionado(a)} >
                         {a.nombre}  {a.apellido}
                    </div>
                ))}
            </div>
            <Link to="/inicio" className="volver-link">Volver a las clases</Link>
            <button onClick={crearAlumno} className='volver-link'  >Añadir un nuevo alumno</button>
        </div>
        {modalNuevo && (
            <>
              <div className="modal-overlay" onClick={() => setModalNuevo(false)}></div> {/* Cierra el modal si se hace clic fuera */}
              <div className="modal">
                <h2>Nuevo alumno</h2>
                <p>Nombre</p>
                <input />
                <p>Apellidos</p>
                <input />
                <p>
                  <button>Crear</button>
                </p>
              </div>
            </>
        )}



    </div>
    );
}

export default Clase;
