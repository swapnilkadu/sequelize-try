"use strict"

module.exports = (sequelize, DataTypes) => {
    const FeesDetails = sequelize.define("feesDetails", {
        feeid: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            defaultValue: 0,
            allowNull: false
        },
        businesstransid: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        feeType: {
            type: DataTypes.STRING,
            required: true
        },
        amount: {
            type: DataTypes.DOUBLE,
            defaultValue: 0.0
        },
        isTax: {
            type: DataTypes.STRING,
            defaultValue: 0
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, {
        underscored: true,
        tableName: "ba_feedetails"
    });
    return FeesDetails;
};