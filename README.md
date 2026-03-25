# auth-api-jwt
# 🔐 Auth API JWT

API de autenticação desenvolvida com Node.js, utilizando boas práticas de arquitetura e segurança, incluindo criptografia de senhas e autenticação via token JWT.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* Sequelize
* SQLite
* JWT (JSON Web Token)
* Bcrypt
* Swagger

---

## 📂 Estrutura do projeto

```
src/
 ├── controllers/
 ├── routes/
 ├── middlewares/
 ├── services/
 └── app.js

config/
models/
migrations/
seeders/

server.js
```

---

## ⚙️ Funcionalidades

* Cadastro de usuário
* Login com autenticação JWT
* Senha criptografada com bcrypt
* Rotas protegidas por middleware
* Documentação interativa com Swagger

---

## 🔐 Autenticação

A API utiliza JWT para autenticação.
Após o login, um token é gerado e deve ser enviado nas requisições protegidas.

Exemplo de header:

```
Authorization: Bearer seu_token_aqui
```


---

## 📚 Documentação Swagger

Acesse:

```
http://localhost:3000/api-docs
```

---

## 🧠 Aprendizados

Este projeto foi desenvolvido com foco em:

* Boas práticas de arquitetura (MVC)
* Segurança em aplicações backend
* Autenticação e autorização
* Integração com banco de dados usando ORM
* Documentação de API com Swagger

---


## 👩‍💻 Autora

Desenvolvido por Letícia de Sousa do Nascimento
