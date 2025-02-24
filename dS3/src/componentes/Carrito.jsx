import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../estilos/Carrito.css'
import { useAuth } from '../Login/AuthProvider';
import { reducirCantidad } from '../herramientas/buscarProducto';
const Carrito = ({cesta,setCesta,carrito}) => {

    //calculamos el total del carrito
    const total = cesta.map((c) => c.precio * c.cantidad).reduce((acc, val) => acc + val, 0);
    //console.log(cesta)

    
    //PESTAÑA DE ADMIN
    const {user}=useAuth();
    //console.log(user)
    const modoAdmin =true ?user.administrador===1 : false; 
    //console.log(modoAdmin)





    const reducir=(producto)=>{
        
        const nuevaCesta=   reducirCantidad(cesta,producto.nombre)
        const cestaActualizada = nuevaCesta.filter(item => item.cantidad > 0);

        setCesta(cestaActualizada)
    }
   // console.log(cesta)
    return (
        <div className='carrito'>
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

                    { modoAdmin && (
                    <Link to="/admin" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div className="boton">
                        <h3>ADMIN</h3> 
                        </div>
                    </Link>

                    )  }
      
                </div>
       
            </div>
            <h2>CARRITO</h2>
            <table border="1">
            <thead>
                <tr>
                    <td>Producto</td>
                    <td>Precio</td>
                    <td>Cantidad</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
                {cesta.map((a, index) => (
                    <tr key={index}>
                        <td>
                        <div >
                            <button className='a' onClick={() => reducir(a)}>-</button>   
                            {a.nombre}
                        </div>
                        </td>                        
                        <td>{carrito.find((b) => b.nombre === a.nombre)?.precio || "No disponible"}</td>
                        <td>{a.cantidad}</td>
                        <td>{(carrito.find((b) => b.nombre === a.nombre)?.precio || 0) * a.cantidad}€</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <h2>TOTAL DEL CARRITO :  {total}  </h2>


        </div>
    );
}

export default Carrito;
