'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Alan',
        lastname: 'Martinez',
        email: 'admin@ami.com',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),    
      },
      {
        firstName: 'Miguel Angel',
        lastname: 'Ortiz',
        email: 'miguel@ami.com',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),    
      },
      {
        firstName: 'María Fernanda',
        lastname: 'González',
        email: 'maria@correo.com',
        password: 'contraseña123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Javier',
        lastname: 'López',
        email: 'javier@email.com',
        password: 'clave456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Alejandra',
        lastname: 'Martínez',
        email: 'alejandra@correo.com',
        password: 'password789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Ricardo',
        lastname: 'Sánchez',
        email: 'ricardo@email.com',
        password: 'segura123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Laura',
        lastname: 'Rodríguez',
        email: 'laura@email.com',
        password: 'contraseña456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Gabriel',
        lastname: 'Pérez',
        email: 'gabriel@correo.com',
        password: 'clave789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Ana',
        lastname: 'García',
        email: 'ana@email.com',
        password: 'segura456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Carlos',
        lastname: 'Hernández',
        email: 'carlos@email.com',
        password: 'clave123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Paula',
        lastname: 'Fernández',
        email: 'paula@correo.com',
        password: 'contraseña789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Diego',
        lastname: 'Gómez',
        email: 'diego@email.com',
        password: 'segura789',
        createdAt: new Date(),
        updatedAt: new Date()
      }      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
