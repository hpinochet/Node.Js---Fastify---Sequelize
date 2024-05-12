import Sequelize from "sequelize";
import db from "../db.js";
import PeopleModel from "./People.js";
import BrandModel from "./Brands.js";

const CarModel = db.define('car', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

PeopleModel.hasMany(CarModel, {
    foreignKey: {
        name: 'peopleId',
        type: Sequelize.INTEGER,
        allowNull: false
    }}
);

CarModel.belongsTo(PeopleModel, {
    foreignKey: "peopleId",
    targetKey: "id"
})

BrandModel.hasMany(CarModel, {
    foreignKey: {
        name: 'brandId',
        type: Sequelize.INTEGER,
        allowNull: false
    }}
);

CarModel.belongsTo(BrandModel, {
    foreignKey: "brandId",
    targetKey: "id"
})


export default CarModel