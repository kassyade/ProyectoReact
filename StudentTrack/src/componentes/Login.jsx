import React, { useState } from 'react';
import ServicioUsuario from '../servicios/ServicioUsuario'
import '../estilos/Login.css'
import { useNavigate } from 'react-router-dom';//para navegar entre páginas sin recargar la app
import { useAuth } from '../Login/AuthProvider';//se usa para guardar la sesion en un estado de "nuve"
const Login = () => {
    const [usuario,setUsuario]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const{login}=useAuth();
    const navigate=useNavigate();

    const procesarFormulario = async (e) => {
  
        e.preventDefault();
      
        ServicioUsuario.login(usuario,password)//se lo pasamos a la funcion q valide el usuario
          .then((response) => {
           if(response.data.length !== 0 ){        
            login(response.data[0].nombre);
            navigate('/inicio'); //esta ruta la tenemos que definir en el App.jsx
           }else {
            setError("Usuario no es correcto")
           }
           
            
          })
          .catch((error) => {   
            alert(error)                 
           navigate('/'); 
          });    
      };


    return (
        <div className="login-container">
            <h2 className="login-title">Inicio de sesión</h2>
            <form onSubmit={procesarFormulario} className="login-form">
                <p className="login-label">Usuario</p>
                <input
                    type='text'
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                    className="login-input"
                />
                <p className="login-label">Contraseña</p>
                <input 
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="login-input"
                />
                {error && <p className="login-error">{error}</p>}
                <button type='submit' className="login-button">Comprobar datos</button>
            </form>
        </div>
    );
}

export default Login;
