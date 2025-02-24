import Login from './componentes/Login'
import './App.css'
import Inicio from './componentes/Inicio'
import { AuthProvider } from './Login/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import Tienda from './componentes/Tienda'
import  RutasProtegidas from  './Login/RutasProtegidas'
import { useState } from 'react'
import Carrito from './componentes/Carrito'
function App() {
      
        //lista del carriot (si se repiten)
        const [carrito,setCarrito]=useState([]);
       //lista de la cesta(no se repite)
          const[cesta,setCesta]=useState([]);
      
      
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
      path='/carrito' 
      element={
        <RutasProtegidas>
          <Carrito  cesta={cesta}  setCesta={setCesta} carrito={carrito} />
        </RutasProtegidas>
      }  />





      <Route    
      path='/tienda' 
      element={
        <RutasProtegidas>
        <Tienda   carrito={carrito} setCarrito={setCarrito}  cesta={cesta} setCesta={setCesta} />
    </RutasProtegidas>
      }  />

      </Routes>
    
    </AuthProvider>
    </div>
  )
}

export default App
