"use strict"

module.exports = (sequelize, DataTypes) => {
    const BusinessTransactionReferenceNumbers = sequelize.define("busTransRefNums", {
        businessTransRefNumId: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            defaultValue: 0,
            allowNull: false
        },
        businesstransactionId: {
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
        tableName: "ba_businesstransactionreferencenumbers"
    });
    return BusinessTransactionReferenceNumbers;
};