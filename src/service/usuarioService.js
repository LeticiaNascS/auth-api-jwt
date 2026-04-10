import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import dataBase from "../models/index.js";

class UsuarioService {
  async login(dto) {
    // Busca o usuário pelo e-mail
    const usuario = await dataBase.User.findOne({
      where: { email: dto.email },
    });

    if (!usuario) {
      throw new Error("Usuário ou senha inválidos");
    }

    //  Compara a senha enviada com a do banco
    const senhaIguais = await compare(dto.senha, usuario.password);

    if (!senhaIguais) {
      throw new Error("Usuário ou senha inválidos");
    }

    // Se deu certo, gera o Token

    const accessToken = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }, // O token expira em 1 hora
    );

    return { accessToken };
  }
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
      return criarUsuario;
    } catch (error) {
      throw error;
    }
  }
  async deletarUsuario(id) {
    const deletarUsuario = await dataBase.User.destroy({
      where: {
        id: id,
      },
    });
    if (!deletarUsuario) {
      throw new Error("Não foi possível deletar, confira se o ID existe");
    }
    return { message: "Usuário deletado com sucesso" };
  }
}
export default UsuarioService;
