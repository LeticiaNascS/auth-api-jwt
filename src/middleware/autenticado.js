import jwt from "jsonwebtoken";

export default async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Token não fornecido");
  }

  // O token geralmente vem como "Bearer <token>",  pegar só a parte do código
  const [, accessToken] = token.split(" ");

  try {
    //  Verifica se o token é válido usando a  chave secreta do .env
    const decode = jwt.verify(accessToken, process.env.JWT_SECRET);

    req.usuarioId = decode.id;
    req.usuarioEmail = decode.email;
    return next();
  } catch (error) {
    return res.status(401).json({message: "Usuário não autorizado ou token expirado"});
  }
};
