"use strict"

module.exports = (sequelize, DataTypes) => {
    const BusinessTransaction = sequelize.define("businessTransaction", {
        businesstransid: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            defaultValue: 0,
            allowNull: false
        },
        cconfigid: {
            type: DataTypes.BIGINT,
            required: true
        },
        transType: {
            type: DataTypes.ENUM,
            values: ["ServiceRequest", "RMA", "REFUND"]
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, {
        underscored: true,
        tableName: "ba_businesstransaction"
    });
    return BusinessTransaction;
};