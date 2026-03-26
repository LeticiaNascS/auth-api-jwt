import express from "express";
import usuarios from "../routes/routesUsuarios.js";

const routes = (app) => {
  app.use(express.json(), usuarios);
};

export default routes;
