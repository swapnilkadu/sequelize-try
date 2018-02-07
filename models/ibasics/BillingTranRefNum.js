"use strict"

module.exports = (sequelize, DataTypes) => {
    const BillingTransactionReferenceNumbers = sequelize.define("billTransRefNums", {
        billingTransRefNumId: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            defaultValue: 0,
            allowNull: false
        },
        billingtransactionId: {
            type: DataTypes.BIGINT,
            required: true
        },
        refNumId: {
            type: DataTypes.BIGINT,
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
        tableName: "ba_billingtransactionreferencenumbers"
    });
    return BillingTransactionReferenceNumbers;
};