import axios from 'axios'
import { useEffect, useState } from 'react';
import Login from "./componentes/Login";
import Inicio from './componentes/Inicio';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  const[clases,setClases]=useState([])


  useEffect(
    ()=>{
      axios.get("/data/clases.json")
      .then((respuesta)=>setClases(respuesta.data.clases))
      .catch((e)=>console.log("error al pillar los datos",e))

    },[]
  )

console.log(clases)




  return (
    <BrowserRouter>
    <Routes>
    <Route  path='/inicio' element={<Inicio  clases ={clases} /> } />
    </Routes>
    <Login   />    
    </BrowserRouter>
    
  );
}

export default App;
