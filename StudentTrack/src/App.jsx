import axios from 'axios'
import { useEffect, useState } from 'react';
import Login from "./componentes/Login";
import Error from './componentes/Error';
import RutasProtegidas from './Login/RutasProtegidas';
import Inicio from './componentes/Inicio';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AuthProvider } from './Login/AuthProvider';
import Clase from './componentes/Clase';
function App() {
  const[clases,setClases]=useState([])
  const[claseSeleccionada,setClaseSeleccionada]=useState(null)

  useEffect(
    ()=>{
      axios.get("/data/clases.json")
      .then((respuesta)=>setClases(respuesta.data.clases))
      .catch((e)=>console.log("error al pillar los datos",e))

    },[]
  )

//console.log(clases)



//AurhtProvider para poder usar en contexto(verificación de login) en todas partes 
//Definimas las rutas que usaremos 
  return (
  <AuthProvider>
    <Routes>

      <Route
      path='/'
      element={<Login/>}
      />

    <Route
    path='*'
    element={<Error/>}
    />

    <Route
    path='/inicio'
    element={ <Inicio clases={clases}  setClaseSeleccionada={setClaseSeleccionada} />}
    
    />
    
    <Route
    path='/clase' 
    element={<Clase claseSeleccionada={claseSeleccionada} />} 
    />



    </Routes>

  </AuthProvider>

    
  );
}

export default App;
