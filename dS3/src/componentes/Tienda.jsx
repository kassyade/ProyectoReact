import React, { useState,useEffect } from 'react';
import '../estilos/Tienda.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
const Tienda = () => {

    const [productos,setProductos]=useState([]);
    
    useEffect(
        ()=>{
          axios.get("/data/data.json")
          .then( (respuesta)=>setProductos(respuesta.data.productos)
            
        )
          .catch((e)=>console.log("error al pillar los datos",e))
    
        },[]
      )

      console.log(productos)




    return (
        <div className='tienda' >
            <div className="cabecera">
                <div className="logo"></div>
                <div className="botonesCabecera">
                <div className="boton">
                    {/* Coloca el Link alrededor del texto */}
                    <Link to="/tienda" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <h3>TIENDA</h3>
                    </Link>
                </div>
         
                    {/* Coloca el Link alrededor del texto */}
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div className="boton">
                        <h3>INICIO</h3> 
                        </div>
                    </Link>
              
                </div>
       
            </div>
            <h2>TIENDA</h2>
            <div className="productos-container">
                {productos.map((producto, index) => (
                    <div key={index} className="producto">
                        <img src={producto.url} alt={producto.nombre} />
                        <h3>{producto.nombre}</h3>
                        <p>{producto.precio}€</p>
                    </div>
                ))}
            </div>

                    
        
        </div>
    );
}

export default Tienda;
