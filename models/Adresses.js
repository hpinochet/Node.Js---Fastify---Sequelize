import Sequelize from "sequelize";
import db from "../db.js";
import CitiesModel from "./Cities.js";
import PeopleModel from "./People.js";

const AdressModel = db.define('adress', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    street: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    main: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

PeopleModel.hasMany(AdressModel, {
    foreignKey: {
        name: 'peopleId',
        type: Sequelize.INTEGER,
        allowNull: false
    }}
);

AdressModel.belongsTo(PeopleModel, {
    foreignKey: "peopleId",
    targetKey: "id"
})

CitiesModel.hasMany(AdressModel, {
    foreignKey: {
        name: 'citieId',
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sourceKery: 'id'
}
);

AdressModel.belongsTo(CitiesModel, {
    foreignKey: "citieId",
    targetKey: "id"
})


export default AdressModel