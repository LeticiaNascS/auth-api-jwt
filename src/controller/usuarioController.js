import UsuarioService from "../service/usuarioService.js";

const usuarioService = new UsuarioService();

class UsuarioController {
  static async listarUsuarios(req, res) {
    try {
      const buscarUsuarios = await usuarioService.listarUsuarios();
      res.status(200).json(buscarUsuarios);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  static async buscaUsuarioPorId(req, res) {
    const { id } = req.params;
    try {
      const buscaId = await usuarioService.listarUsuarioPorId(id);
      res.status(200).json(buscaId);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  static async criarUsuario(req, res) {
    const { nome, email, senha } = req.body;
    try {
      const cadastrarUsuario = await usuarioService.criarUsuario({
        nome,
        email,
        senha,
      });
      res.status(201).json({
        message: "Usuário cadastrado com sucesso!",
        usuario: cadastrarUsuario,
      });
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  static async deletarUsuario(req, res) {
    const { id } = req.params;

    try {
      const excluirUsuario = await usuarioService.deletarUsuario(id);
      res.status(200).json(excluirUsuario);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  static async login(req, res) {
    const { email, senha } = req.body;

    try {
      const loginData = await usuarioService.login({ email, senha });
      res.status(200).json(loginData);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}
export default UsuarioController;
