import "dotenv/config";
import app from "./app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`VARIAVEL DE AMBIENTE ${process.env.JWT_SECRET}`);
  console.log(`Servidor está rodando na porta ${port}`);
});

//Iniciando o servidor
