const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Enrollments extends Model {}

Enrollments.init (
{
    enrollment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
            unique: false
        }
    },

    study_group_id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'study_groups',
            key: 'id',
            unique: false
        }
    },


},

{
    sequelize, 
    timestamps: false, 
    freezeTableName: true, 
    underscored: true,
    modelName: "enrollments"

}

);

module.exports = Enrollments; 