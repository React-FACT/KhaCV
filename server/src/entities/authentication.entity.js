const { BaseEntity } = require("./bases/base.entity");
const { Sequelize } = require('sequelize');

class Authentication extends BaseEntity {
    username = { type: Sequelize.STRING(50) };
    password = { type: Sequelize.STRING(50) };
}
module.exports = { Authentication }