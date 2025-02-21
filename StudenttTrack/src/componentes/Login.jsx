import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <p>Introduce tu correo</p>
            <input
            type='text'
            name='usuario'
            />
            <p>Contraseña</p>
            <input
            type='password'
            name='contraseña'
            />
            <p></p>
            <button>Iniciar sesión</button>
        </div>
    );
}

export default Login;
