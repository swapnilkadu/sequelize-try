"use strict"

module.exports = (sequelize, DataTypes) => {
    const ReferenceNumbers = sequelize.define("referenceNumbers", {
        refNumId: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            defaultValue: 0,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            required: true
        },
        value: {
            type: DataTypes.STRING,
            required: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, {
        underscored: true,
        tableName: "ba_referencenumbers"
    });
    return ReferenceNumbers;
};