
import http from "./http-axios.js";

class ServicioUsuario {

  login(usuario,pass) {
      //return http.get(`/usuarios?nombre=${usuario}&pass=${pass}`);
      //http://localhost:3000/usuarios?nombre=agustin&pass=123
      return http.get(`/usuarios?nombre=${usuario}`);

   }
}

export default new ServicioUsuario();
