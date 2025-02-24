import React, { useState } from 'react';
import { useAuth } from '../Login/AuthProvider';
import '../estilos/Admin.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { agregarProducto } from '../herramientas/agregarProducto';
const Admin = ({productos,setProductos}) => {
    //VERIFICACION  DE ADMIN
    const{user}=useAuth();//ussamos use auth ya que almacena el contenxo 
    //console.log(user)
    const modoAdmin =true ? user.administrador===1 :false
    //console.log(modoAdmin)
    const[nombre,setNombre]=useState('');
    const[precio,setPrecio]=useState('');
    const[descripcion,setDescripcion]=useState('');
    const[url,setUrl]=useState('');


    const crearProducto =  () => {
        const nuevoProducto = {
            nombre,precio,descripcion,url
        }
        setProductos([...productos,nuevoProducto])
        // Limpiar formulario
        setNombre('');
        setPrecio('');
        setDescripcion('');
        setUrl('');
    };


    return (
        <div className='admin'>
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
                   
                </div>
       
            </div>

            <div className="formulario">
                <h3>Nuevo producto</h3>
                <p>Nombre</p>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <p>Precio</p>
                <input
                    type="number"
                    value={precio}
                    onChange={(e) => setPrecio(Number(e.target.value))}
                    required
                />
                <p>Descripción</p>
                <input
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                />
                <p>URL</p>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <button onClick={crearProducto}>Crear</button>
            </div>




            <table className='tablaAdmin'>
                <thead>
                    <tr>
                        <td>Producto</td>
                        <td>Precio</td>
                        <td>Descripcion</td>
                        <td>URL</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map(
                            (a,index)=>(
                                <tr key={index}>
                                    <td>{a.nombre}</td>
                                    <td>{a.precio}</td>
                                    <td>{a.descripcion}</td>
                                    <td>{a.url}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>


        </div>
    );
}

export default Admin;
