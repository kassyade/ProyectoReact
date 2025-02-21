import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Pagina no encontrada</h2>
            <Link to="/" >Volver a las clases </Link>
        </div>
    );
}

export default Error;
