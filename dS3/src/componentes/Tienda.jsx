import React, { useState,useEffect } from 'react';
import '../estilos/Tienda.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Login/AuthProvider';
import { buscarProducto,incrementarCantidad } from '../herramientas/buscarProducto';
const Tienda = ({carrito,setCarrito,cesta,setCesta,productos,setProductos}) => {

    //estado del modal carrito
    const [modalCarrito,setModalCarrito]=useState(false);
    //estado del modal info
    const[modalInfo,setModalInfo]=useState(false);
    //objeto de info
    const[productoInfo,setProductoInfo]=useState({});
   
    //VERIFICACION  DE ADMIN
    const{user}=useAuth();//ussamos use auth ya que almacena el contenxo 
    //console.log(user)
    const modoAdmin =true ? user.administrador===1 :false
    //console.log(modoAdmin)


        //CERRAMOS lA SESION
        //Tomamos el logout e Authprovider
        const{logout}=useAuth()
        const cerrarSesion =()=>{
            logout()
        }


 
     // console.log(productos)
      const añadir=(producto)=>{
        setCarrito([...carrito,producto])
        const nombre = producto.nombre
        const precio = producto.precio
        //le pasamos el nombre del producto y el array de la cesta 
        if(buscarProducto(nombre,cesta) === null){
            setCesta([...cesta, {"nombre" : nombre, "cantidad":1,"precio":precio}])
           // console.log("Se añade un nuevo:", {"nombre" : nombre, "cantidad":1} )
          }else{
                        //pasamos la centa y el nomnbre del producto 
             setCesta(incrementarCantidad(cesta,nombre,precio))
            
          }     
              
      }
     // console.log(carrito)

      const info =(producto)=>{
        setModalInfo(true)
        setProductoInfo(producto)

      }

      const abrirCesta=()=>{
        setModalCarrito(true)

      }


      //console.log(cesta)

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


                    <Link to="/carrito" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div className="boton">
                        <h3>CARRITO</h3> 
                        </div>
                    </Link>

                    {modoAdmin &&
                    (
                    <Link to="/admin" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div className="boton">
                        <h3>ADMIN</h3> 
                        </div>
                    </Link>
                    )
                    
                    }

                        <div className="boton"  onClick={abrirCesta} >
                        <h3>X</h3> 
                        </div>
                   


                        <div className="boton">
                        <h3 onClick={cerrarSesion} > CERRAR SESIÓN</h3> 
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
                     <h3>Cesta</h3>
                    <ul>
                        {cesta.map(
                            (x,index)=>(
                                <li key={index}>{x.nombre} :{x.cantidad} </li>
                            )
                        )
                        
                        }
                    </ul>
                    <button className="boton-cerrar" onClick={() => setModalCarrito(false)}>Cerrar</button>
                </div>
            )}

            {modalInfo && (
                <div className="modal-info">
                    <div className="info-card">
                        <button className="close-btn" onClick={() => setModalInfo(false)}>X</button>
                        <h1>{productoInfo.nombre}</h1>
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
