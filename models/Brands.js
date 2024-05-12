import Sequelize from "sequelize";
import db from "../db.js";

const BrandModel = db.define('brand', {
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


export default BrandModel