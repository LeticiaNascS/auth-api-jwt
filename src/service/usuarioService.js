import dataBase from "../models/index.js";

class UsuarioService {
  async listarUsuarios() {
    const buscaUsuarios = await dataBase.User.findAll();
    return buscaUsuarios;
  }

  async listarUsuarioPorId(id) {
    const buscaUsuarioId = await dataBase.User.findOne({
      where: {
        id:id
      }
    });
    return buscaUsuarioId;
  }
}

export default UsuarioService;
