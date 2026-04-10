# 🔐 Auth API JWT

API de autenticação desenvolvida com **Node.js**, focada em segurança e escalabilidade. O projeto implementa um CRUD completo de usuários com rotas protegidas, criptografia de senhas e documentação interativa.

---

## 🚀 Tecnologias Utilizadas

* **Runtime:** Node.js
* **Framework:** Express
* **ORM:** Sequelize
* **Banco de Dados:** SQLite 
* **Segurança:** JWT (JSON Web Token) & Bcrypt (Hashing de senhas)
* **Documentação:** Swagger UI

---

## ⚙️ Funcionalidades

* **Cadastro de Usuário:** Registro seguro.
* **Autenticação:** Sistema de Login que gera tokens JWT com expiração de 1h.
* **Segurança:** Senhas protegidas com Salt Hashing via Bcrypt.
* **CRUD Completo:** Listagem, busca por ID, atualização de dados, criação de novos usuários e exclusão de usuários.
* **Middleware de Proteção:** Verificação de token em rotas sensíveis.
* **Documentação Viva:** Interface Swagger para testes em tempo real.

---

## 📂 Estrutura do Projeto

```text
src/
 ├── controller/    # Gerenciamento de requisições e respostas
 ├── service/       # Regras de negócio e integração com banco
 ├── routes/        # Definição dos endpoints da API
 ├── middleware/    # Filtro de autenticação JWT
 ├── models/        # Mapeamento das tabelas do banco de dados
 ├── database/      # Configurações de migrations e conexão
 └── swagger.js     # Configurações da documentação
server.js           # Ponto de entrada da aplicação