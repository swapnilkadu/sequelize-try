'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize("ibasicsdb", "ibasicsusr", "ibasicsmpasswd", {
    host: "ibasics-dev-cloud.cgcchazwxkqi.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
    define: {
        underscored: true
    }
});

// Connect all the models/tables in the database to a db object, 
// so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models / tables
db.BUST = require('./models/ibasics/BusinessTran')(sequelize, Sequelize);
db.RefNum = require('./models/ibasics/RefNumbers')(sequelize, Sequelize);
db.BUSTRN = require('./models/ibasics/BusinessTranRefNum')(sequelize, Sequelize);
    db.BILT = require('./models/ibasics/BillingTran')(sequelize, Sequelize);
    db.BILTRN = require('./models/ibasics/BillingTranRefNum')(sequelize, Sequelize);
    db.FEES = require('./models/ibasics/FeesDetails')(sequelize, Sequelize);

// IMP NOTES:
// STRICT: Associations need to defined in order.

// Relations
// NOTE: If ny error while join use
//       'as' with 'foreignKey'
db.BUSTRN.belongsTo(db.BUST, {
    foreignKey: "fk_ba_businesstransaction_businesstransid",
    targetKey: "businesstransid",
    constraints: false
});
db.BUSTRN.belongsTo(db.RefNum, {
    foreignKey: "fk_ba_referencenumbers_BUSTRN_refNumId",
    targetKey: "refNumId",
    constraints: false
});
db.RefNum.hasMany(db.BUSTRN);
db.BUST.hasMany(db.BUSTRN);
//----------

    db.BILTRN.belongsTo(db.BUST, {
        foreignKey: "fk_ba_billingtransaction_businesstransid",
        targetKey: "businesstransid",
        constraints: false
    });
    db.BILTRN.belongsTo(db.BILT, {
        foreignKey: "fk_ba_billingtransaction_billingtransid",
        targetKey: "billingtransid",
        constraints: false
    });
    db.BILTRN.belongsTo(db.RefNum, {
        foreignKey: "fk_ba_referencenumbers_BILTRN_refNumId",
        targetKey: "refNumId",
        constraints: false
    });
    db.RefNum.hasMany(db.BILTRN);
    db.BILT.hasMany(db.BILTRN);
    // ---------------

        db.FEES.belongsTo(db.BUST, {
            foreignKey: "fk_ba_feedetails_businesstransid",
            targetKey: "businesstransid",
            constraints: false
        });
        db.BUST.hasMany(db.FEES);

// Use at very frist time !!
// db.BUST.sync();
// db.RefNum.sync();
// db.BUSTRN.sync();
//     db.BILT.sync();
//     db.BILTRN.sync();
//         db.FEES.sync();
    
module.exports = db;
