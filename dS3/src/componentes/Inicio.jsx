import React from 'react';
import '../estilos/Inicio.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/AuthProvider';


const Inicio = () => {


    return (

        <div>
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
        </div>
    );
}

export default Inicio;
