import dataBase from "../models/index.cjs";

class UsuarioService {
  async listarUsuarios() {
    const buscaUsuarios = await dataBase.Users.findAll();
    return buscaUsuarios;
  }
}

export default UsuarioService;
