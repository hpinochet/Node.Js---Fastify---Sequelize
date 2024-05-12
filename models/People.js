import Sequelize from "sequelize";
import db from "../db.js";

const PeopleModel = db.define('people', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addressId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'adresses',
            key: 'id'
        }
    },
    carId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'cars',
            key: 'id'
        }
    }
})

export default PeopleModel