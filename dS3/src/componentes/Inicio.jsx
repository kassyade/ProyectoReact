import React from 'react';
import '../estilos/Inicio.css'
import { Link } from 'react-router-dom';
import { AuthProvider, useAuth } from '../Login/AuthProvider';



const Inicio = () => {
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

    return (

        <div className='Inicio'>
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

            <div className="contenedorPrincipal">
    <div className="a"></div>
    <div className="contenido">
        <div className="imagen"></div>
        <h3 className="novedades">NOVEDADES</h3>
    </div>
    <div className="a"></div>
</div>

<div className="carrusel">
    <div className="carrusel-items">
        <div className="carrusel-item">
            <img src="https://static.wixstatic.com/media/839e94_2e7114897b954077ad0a9b5a2142da22~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/839e94_2e7114897b954077ad0a9b5a2142da22~mv2.jpg" alt="Novedad 1" />
        </div>
        <div className="carrusel-item">
            <img src="https://static.wixstatic.com/media/839e94_5b63d47987aa4f4684dabd333800c327~mv2.jpeg/v1/fill/w_577,h_721,al_c,lg_1,q_85/839e94_5b63d47987aa4f4684dabd333800c327~mv2.jpeg" alt="Novedad 2" />
        </div>
        <div className="carrusel-item">
            <img src="https://extrememusicevents.com/wp-content/uploads/2023/02/2023-02-24-Wos.jpg" alt="Novedad 3" />
        </div>
    </div>
</div>
<div className="ir-tienda-container">
<div className="boton">
                    {/* Coloca el Link alrededor del texto */}
                    <Link to="/tienda" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <h3>TIENDA</h3>
                    </Link>
                </div>
</div>



        </div>
    );
}

export default Inicio;
