"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Letícia Teste",
          email: "leticia@teste.com",
          password: "123456_fake_password", // Depois usaremos hash real aqui!
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Admin do Sistema",
          email: "admin@sistema.com",
          password: "admin_password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
