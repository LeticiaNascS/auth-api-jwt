import { Router } from "express";
import UsuarioController from "../controller/usuarioController.js";

const router = Router();

router.get("usuarios/", UsuarioController.listarUsuarios);

export default router;
