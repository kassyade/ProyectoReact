import React, { useState,useEffect } from 'react';
import '../estilos/Tienda.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
const Tienda = ({carrito,setCarrito}) => {

    const [productos,setProductos]=useState([]);
    const [modalCarrito,setModalCarrito]=useState(false);
    const[modalInfo,setModalInfo]=useState(false);
    const[productoInfo,setProductoInfo]=useState({});

    useEffect(
        ()=>{
          axios.get("/data/data.json")
          .then( (respuesta)=>setProductos(respuesta.data.productos)
            
        )
          .catch((e)=>console.log("error al pillar los datos",e))
    
        },[]
      )

     // console.log(productos)
      const añadir=(producto)=>{
        setCarrito([...carrito,producto])

      }
      console.log(carrito)

      const info =(producto)=>{
        setModalInfo(true)
        setProductoInfo(producto)

      }




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
                    <div className="boton">
                        <h3>CARRITO</h3> 
                        </div>

                        <div className="boton" onClick={  ()=> setModalCarrito(true)}   >
                        <h3>X</h3> 
                        </div>
                </div>
       
            </div>
            <h2>TIENDA</h2>
            <div className="productos-container">
                {productos.map((producto, index) => (
                    <div key={index} className="producto" >
                        <img src={producto.url} alt={producto.nombre} />
                        <h3>{producto.nombre}</h3>
                        <p>{producto.precio}€</p>
                        <button   onClick={  ()=> añadir(producto)} >Añadir a la cesta</button>
                        <button  onClick={()=>info(producto)}  > INFO</button>
                    </div>
                ))}
            </div>



            {modalCarrito && (
                <div className="modal-carrito">
                    <h3>Carrito</h3>
                    <ul>
                        {carrito.map((producto, index) => (
                            <li key={index}>{producto.nombre} : {producto.precio}€</li>
                        ))}
                    </ul>
                    <button className="boton-cerrar" onClick={() => setModalCarrito(false)}>Cerrar</button>
                </div>
            )}

            {modalInfo && (
                <div className="modal-info">
                    <div className="info-card">
                        <button className="close-btn" onClick={() => setModalInfo(false)}>X</button>
                        <h2>{productoInfo.nombre}</h2>
                        <img src={productoInfo.url} alt={productoInfo.nombre} />
                        <p>{productoInfo.precio} €</p>
                        <p>{productoInfo.descripcion}</p>
                    </div>
                </div>
            )}

          
        
        </div>
    );
}

export default Tienda;
