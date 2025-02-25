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



      // Estado para editar producto
  const [productoEditado, setProductoEditado] = useState(null);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoPrecio, setNuevoPrecio] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');
  const [nuevaUrl, setNuevaUrl] = useState('');
    //CERRAMOS lA SESION
    //Tomamos el logout e Authprovider
    const{logout}=useAuth()
    const cerrarSesion =()=>{
            logout()
    }


    ///CRUD CREAR BORRAR ACTUALIZAR

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


    const[modalActualizar,setModalActualizar]=useState(false);

    const abrirModal = (producto) => {
        setProductoEditado(producto);
        setNuevoNombre(producto.nombre);
        setNuevoPrecio(producto.precio);
        setNuevaDescripcion(producto.descripcion);
        setNuevaUrl(producto.url);
        setModalActualizar(true)
      };
    // Actualizar producto
    const editarProducto = () => {
        const productosActualizados = productos.map((producto) => {
        if (producto === productoEditado) {
            return { ...producto, nombre: nuevoNombre, precio: nuevoPrecio, descripcion: nuevaDescripcion, url: nuevaUrl };
        }
        return producto;
        });
        setProductos(productosActualizados);
        setModalActualizar(false);
        setProductoEditado(null);
    };



    const eliminarProducto = (producto) => {
        setProductos(productos.filter((p) => p.url !== producto.url));
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
                        <div className="boton">
                        <h3 onClick={cerrarSesion} > CERRAR SESIÓN</h3> 
                        </div>
                   
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
                        <td>Acciones</td>
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
                                    <td>
                                    <button onClick={() => abrirModal(a)}>Editar</button>
                                    <button onClick={()=>eliminarProducto(a)} >Eliminar</button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>

            {modalActualizar && (
                <div className="modal-fondo">
                    <div className="modal-contenido">
                        <h3>Actualiza el producto:</h3>
                        <p>Nombre</p>
                        <input
                            type="text"
                            value={nuevoNombre}
                            onChange={(e) => setNuevoNombre(e.target.value)}
                            required
                        />
                        <p>Precio</p>
                        <input
                            type="number"
                            value={nuevoPrecio}
                            onChange={(e) => setNuevoPrecio(Number(e.target.value))}
                            required
                        />
                        <p>Descripción</p>
                        <input
                            type="text"
                            value={nuevaDescripcion}
                            onChange={(e) => setNuevaDescripcion(e.target.value)}
                            required
                        />
                        <p>URL</p>
                        <input
                            type="text"
                            value={nuevaUrl}
                            onChange={(e) => setNuevaUrl(e.target.value)}
                            required
                        />
                        <button className="boton-cerrar" onClick={editarProducto}>
                            Guardar cambios
                        </button>
                    </div>
                </div>
            )}



        </div>
    );
}

export default Admin;
