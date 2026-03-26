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
      res.status(200).json(buscaId)
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}
export default UsuarioController;
