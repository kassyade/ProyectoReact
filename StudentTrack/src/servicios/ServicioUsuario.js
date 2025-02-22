import http from "./http-axios.js";

class ServicioUsuario {
  login(usuario, pass) {
    return http.get(`/usuarios?nombre=${usuario}&pass=${pass}`);
  }
}

export default new ServicioUsuario();
