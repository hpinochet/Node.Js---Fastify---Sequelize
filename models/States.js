import Sequelize from "sequelize";
import db from "../db.js";
import CitiesModel from "./Cities.js";

const StateModel = db.define('state', {
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

export default StateModel