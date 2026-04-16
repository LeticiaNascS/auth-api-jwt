# 🔐 Auth API JWT

API de autenticação desenvolvida com **Node.js**, focada em segurança e escalabilidade. O projeto implementa um CRUD completo de usuários com rotas protegidas, criptografia de senhas e documentação interativa.

---

## 🚀 Tecnologias Utilizadas

* **Runtime:** Node.js
* **Framework:** Express
* **ORM:** Sequelize
* **Banco de Dados:** * **Desenvolvimento (Local):** SQLite 
* **Produção (Deploy):** PostgreSQL
* **Segurança:** JWT (JSON Web Token) & Bcrypt (Hashing de senhas)
* **Documentação:** Swagger UI

---

## 🧪 Credenciais de Teste

Para agilizar o teste inicial da aplicação, você pode utilizar o seguinte usuário pré-configurado:

|
| **Nome** | `Teste aplicação` |
| **E-mail** | `testeApi@email.com` |
| **Senha** | `TesteApi1234` |

---

## ⚙️ Funcionalidades

* **Cadastro de Usuário:** Registro seguro.
* **Autenticação:** Sistema de Login que gera tokens JWT.
* **Segurança:** Senhas protegidas com Salt Hashing via Bcrypt.
* **Ambientes Híbridos:** Configuração automatizada para usar SQLite localmente e PostgreSQL em produção.
* **Middleware de Proteção:** Verificação de token em rotas sensíveis.
* **Documentação Viva:** Interface Swagger para testes em tempo real.

---

## ☁️ Deploy (Railway)

Esta aplicação está hospedada no **Railway**. 

---

## 📂 Estrutura do Projeto

src/
 ├── controller/    # Gerenciamento de requisições e respostas
 ├── service/       # Regras de negócio e integração com banco
 ├── routes/        # Definição dos endpoints da API
 ├── middleware/    # Filtro de autenticação JWT
 ├── models/        # Mapeamento das tabelas do banco de dados
 ├── database/      # Configurações de migrations e conexão
 └── swagger.js     # Configurações da documentação
server.js           # Ponto de entrada da aplicação
