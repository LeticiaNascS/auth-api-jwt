import { Router } from "express";
import UsuarioController from "../controller/usuarioController.js";
import autenticado from "../middleware/autenticado.js";

const router = Router();

router.get("/usuarios", autenticado, UsuarioController.listarUsuarios);
router.get("/usuarios/:id", autenticado, UsuarioController.buscaUsuarioPorId);
router.post("/usuarios", UsuarioController.criarUsuario);
router.put("/usuarios/:id", autenticado, UsuarioController.atualizarUsuario);
router.delete("/usuarios/:id", autenticado, UsuarioController.deletarUsuario);
router.post("/login", UsuarioController.login);

export default router;
