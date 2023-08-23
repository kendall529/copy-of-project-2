const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Topics extends Model {}

Topics.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true,
        },
        topic_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },

    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true,
        underscored: true,
        modelName: "topics",
    }

);

module.exports = Topics; 