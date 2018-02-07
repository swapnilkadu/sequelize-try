"use strict";
var dbb = require("./seqdbBasics");
var Op = dbb.Sequelize.Op;

let inp = require("./models/input-payload/BusinessTransactionRequest.json");

// dbb.sequelize.transaction( function(t) {
//     return Owner.create({name:'nice owner'}, {transaction: t}).then(function(owner){ 
//         return owner.setProperties([{name:'nice property'}, {name:'ugly property'}], {transaction : t});
//     });
// });

// OPERATION - CREATE INTENT / BussinessTransactin
// 1.Find ref name entry.
    // Note: correct ref entry (Unnecessary got created columns) and then set 'required:false'
    dbb.BUSTRN.findAll({
        attributes: ['businesstransactionId'],
        include: [{ 
            model: dbb.RefNum, 
            where: { 
                type: "SourceRefId",
                value: inp.sourceRefId 
            }, 
            required: true 
        }]
    }).then(bstrans => {
        console.log("\nResult:\n"+ JSON.stringify(bstrans));
        if(bstrans.length > 0) {
            console.log('Found')
            // 1. Read entries in BILTRN & get BILT-ID
            // 2. Get Ref Number entries, compare and remove existing fro inp-payload 
            readBILTRefNum(inp.sourceRefId)
                .then(res => {
                    console/log("got ref");
                }).catch((err) => {
                    console.log("error");
                })

            // 3. Update bussTrasnId in BILT
            // 4. create / Update Fees details.
        } else {
            console.log('not Found')
            // 1. create BUST entry
            // 2. create ref entries
            // 3. create BUSTRN entry
            // 4. create fee entries
        }
    });

const readBILTRefNum = function (srcRefId) {
    let extRefEntries = [];
    return new Promise( (res, rej) => {
        // 1
        // Note: correct ref entry (Unnecessary got created columns) and then set 'required:false'
        dbb.BILTRN.findAll({
            attributes: ['billingtransactionId'],
            include: [{ 
                model: dbb.RefNum, 
                where: { 
                    type: "SourceRefId",
                    value: srcRefId
                }, 
                required: false 
            }]
        }).then(biltranrefnum => {
            if(biltranrefnum.length > 0) {
                // 2
                dbb.RefNum.findAll({
                    include: [{
                        model: dbb.BILTRN,
                        where: {
                            billingtransactionId: biltranrefnum[0].billingtransactionId
                        },
                        required: false
                    }]
                }).then(rs => {
                    console.log("\nResult:\n"+ JSON.stringify(rs));
                    res({"res":"Success", "data": rs});
                });

            } else rej({"res":"Error", "data": []});
        });
    })
}

//----------------------------------------------------------------------------------------------------------