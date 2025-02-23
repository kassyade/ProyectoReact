import Login from './componentes/Login'
import './App.css'
import Inicio from './componentes/Inicio'
import { AuthProvider } from './Login/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import Tienda from './componentes/Tienda'
import  RutasProtegidas from  './Login/RutasProtegidas'
function App() {

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
        <Tienda/>
    </RutasProtegidas>
      }  />

      </Routes>
    
    </AuthProvider>
    </div>
  )
}

export default App
