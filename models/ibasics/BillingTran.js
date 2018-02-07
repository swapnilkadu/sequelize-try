"use strict"

module.exports = (sequelize, DataTypes) => {
    const BillingTransaction = sequelize.define("billingTransaction", {
        billingtransid: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            defaultValue: 0,
            allowNull: false
        },
        businesstransid: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        cconfigid: {
            type: DataTypes.BIGINT,
            required: true
        },
        transType: {
            type: DataTypes.ENUM,
            values: ["CHARGE", "AUTH", "REFUND"]
        },
        amount: {
            type: DataTypes.DOUBLE,
            defaultValue: 0.0
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, {
        underscored: true,
        tableName: "ba_billingtransaction"
    });
    return BillingTransaction;
};