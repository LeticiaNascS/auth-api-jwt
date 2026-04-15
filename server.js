import app from "./app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

//Iniciando o servidor
