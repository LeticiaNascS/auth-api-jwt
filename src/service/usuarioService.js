import dataBase from "../models/index.js";

class UsuarioService {
  async listarUsuarios() {
    const buscaUsuarios = await dataBase.Users.findAll();
    return buscaUsuarios;
  }
}

export default UsuarioService;
