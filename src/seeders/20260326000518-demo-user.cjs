"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin do Sistema",
          email: "admin@sistema.com",
          password:
            "$2b$10$xoGHprvi2nhf/nCEmR67VuWRxvZoDYr9pV.sqayqwhfUjvYlTgjgS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { ignoreDuplicates: true },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "Users",
      { email: "admin@sistema.com" },
      {},
    );
  },
};