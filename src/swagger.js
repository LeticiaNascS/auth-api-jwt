import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Usuários - Letícia Nascimento",
      version: "1.0.0",
      description: "Documentação completa do CRUD e Autenticação JWT",
    },
    servers: [
      { url: "https://api.letnascimento.dev", description: "Produção" },
      { url: "http://localhost:3000", description: "Local" },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    paths: {
      "/login": {
        post: {
          summary: "Realiza o login do usuário",
          tags: ["Autenticação"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    email: { type: "string", example: "seu@email.com" },
                    senha: { type: "string", example: "suasenha123" },
                  },
                },
              },
            },
          },
          responses: {
            200: { description: "Login realizado com sucesso" },
            401: { description: "Credenciais inválidas" },
          },
        },
      },
      "/usuarios": {
        get: {
          summary: "Lista todos os usuários",
          tags: ["Usuários"],
          security: [{ bearerAuth: [] }],
          responses: {
            200: { description: "Lista retornada com sucesso" },
            401: { description: "Não autorizado" },
          },
        },
        post: {
          summary: "Cadastra um novo usuário",
          tags: ["Usuários"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    nome: { type: "string" },
                    email: { type: "string" },
                    senha: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            201: { description: "Usuário criado com sucesso" },
          },
        },
      },
      "/usuarios/{id}": {
        get: {
          summary: "Busca usuário por ID",
          tags: ["Usuários"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: { description: "Usuário encontrado" },
            404: { description: "Usuário não encontrado" },
          },
        },
        delete: {
          summary: "Deleta um usuário",
          tags: ["Usuários"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            200: { description: "Usuário deletado" },
          },
        },
        put: {
          summary: "Atualiza dados do usuário",
          tags: ["Usuários"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    nome: { type: "string" },
                    email: { type: "string" },
                    senha: { type: "string" },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Atualizado com sucesso",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: { type: "string" },
                    },
                  },
                },
              },
            },
            400: { description: "Erro na atualização" },
          },
        },
      },
    },
  },
  apis: [],
};

const specs = swaggerJsdoc(options);
export default specs;
