import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Login/AuthProvider';
import ServicioUsuario from '../servicios/ServicioUsuario';
import '../estilos/Login.css'
//import axios from 'axios';
import bcrypt from 'bcryptjs';
const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
  
    // Ciframos la contraseña
    const cifrarPassword = () => {
      // Generamos salt
      const salt = bcrypt.genSaltSync(10)
      // Hasheamos la contraseña
      const hash = bcrypt.hashSync(password, salt)
  
      console.log(`salt: ${salt}`)
      console.log(`mensaje cifrado: ${hash}`)
  
      return hash
    }
  
    const procesarFormulario = async (e) => {
    
      e.preventDefault();
      //console.log(cifrarPassword())
    
      ServicioUsuario.login(usuario)
        .then((response) => {
         if(response.data.length !== 0 ){ 
          const usuario = response.data[0]
          const hashUsuario = usuario.pass

          const esCorrecta = bcrypt.compareSync(password, hashUsuario)
  
          if (esCorrecta) {
            login(usuario.nombre)
            const nombre = usuario.nombre
            const administrador = usuario.administrador
            localStorage.setItem('usuario', JSON.stringify({nombre, administrador })); //guardamos en el local el rol del usuario 
            navigate('/')
          } else {
            setError("Contraseña incorrecta")
          }
        }else {
          
          setError("Usuario no es correcto")
         }
         
          
        })
        .catch((error) => {   
          alert(error)                 
         navigate('/login'); 
        });    
    };
  

    return (
    
      <div className="login-container">
          <div className="logo-container"></div> {/* Mitad izquierda */}
          <div className="form-container">
              <h1>DS3</h1>
              <p>Usuario</p>
              <input
                  type='text'
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  required
              />
              <p>Contraseña</p>
              <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
              {error && <p className="error">{error}</p>}
              <p><button onClick={procesarFormulario}>Entrar</button></p>
          </div>
      </div>
  );
  
}

export default Login;
