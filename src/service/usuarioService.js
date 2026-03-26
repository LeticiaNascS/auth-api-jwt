import {hash} from "bcrypt";
import dataBase from "../models/index.js";

class UsuarioService {
  async listarUsuarios() {
    const buscaUsuarios = await dataBase.User.findAll();
    return buscaUsuarios;
  }

  async listarUsuarioPorId(id) {
    const buscaUsuarioId = await dataBase.User.findOne({
      where: {
        id: id,
      },
    });
    return buscaUsuarioId;
  }
  async criarUsuario(dto) {
    const usuario = await dataBase.User.findOne({
      where: {
        email: dto.email,
      },
    });
    if (usuario) {
      throw new Error("Usuário já contém cadastro");
    }
    try {
      const senhaHash = await hash(dto.senha, 6); // adicionando o hash a senha e o salt
      const criarUsuario = await dataBase.User.create({
        name: dto.nome,
        email: dto.email,
        password: senhaHash,
      });
      return criarUsuario
    } catch (error) {
      return (error.message);
    }
  }
}
export default UsuarioService;
