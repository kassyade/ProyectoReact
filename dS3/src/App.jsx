import Login from './componentes/Login'
import './App.css'
import Inicio from './componentes/Inicio'
import { AuthProvider } from './Login/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import Tienda from './componentes/Tienda'
import  RutasProtegidas from  './Login/RutasProtegidas'
import { useState } from 'react'
function App() {
      const [carrito,setCarrito]=useState([]);
  return (
    <div className="contendor">

    
    <AuthProvider>

      <Routes>

      <Route
        path='/login'  
        element={
        <Login/>
        
      } 
       />
      <Route    
      path='/' 
      element={
        <RutasProtegidas>
          <Inicio/>
        </RutasProtegidas>
      }  />
      <Route    
      path='/tienda' 
      element={
        <RutasProtegidas>
        <Tienda   carrito={carrito} setCarrito={setCarrito} />
    </RutasProtegidas>
      }  />

      </Routes>
    
    </AuthProvider>
    </div>
  )
}

export default App
