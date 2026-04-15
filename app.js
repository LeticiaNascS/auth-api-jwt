import express from "express";
import routes from "./src/routes/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpecs from "./src/swagger.js";
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

routes(app);

export default app;
