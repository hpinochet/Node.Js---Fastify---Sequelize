import Sequelize from "sequelize";
import db from "../db.js";
import StateModel from "./States.js";

const CitiesModel = db.define('citie', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

StateModel.hasMany(CitiesModel, {
    foreignKey: {
        name: 'stateId',
        type: Sequelize.INTEGER,
        allowNull: false
    }}
);

CitiesModel.belongsTo(StateModel, {
    foreignKey: "stateId",
    targetKey: "id"
})

export default CitiesModel