import { Router } from "express";
import UsuarioController from "../controller/usuarioController.js";

const router = Router();

router.get("/usuarios", UsuarioController.listarUsuarios);
router.get("/usuarios/:id", UsuarioController.buscaUsuarioPorId);
router.post("/usuarios", UsuarioController.criarUsuario);
router.delete("/usuarios/:id", UsuarioController.deletarUsuario);
router.post("/login", UsuarioController.login);
export default router;
