"use strict";
var dbb = require("./seqdb");
var Op = dbb.Sequelize.Op;

// #Stratergy 1
// Create Record with 'build'
let dtStamp = dbb.sequelize.fn('NOW');

dbb.users
    .create({
        "username": "swapnil.kadu",
        "role": "admin",
        "created_at": dtStamp,
        "updated_at": dtStamp,
        "deleted_at": null
    }).then((newUser) => {
        dbb.posts.bulkCreate([
            { user_id: newUser.id, content: "post1", created_at: dbb.sequelize.fn('NOW'), updated_at: dbb.sequelize.fn('NOW') },
            { user_id: newUser.id, content: "post2", created_at: dbb.sequelize.fn('NOW'), updated_at: dbb.sequelize.fn('NOW') },
            { user_id: newUser.id, content: "post3", created_at: dbb.sequelize.fn('NOW'), updated_at: dbb.sequelize.fn('NOW') }
          ]).catch(() => {
              console.log("Respective posts created");
          }).then(() => {
            console.log("Transaction Successfull");
        });
    });

// Update operation.
// dbb.comments.update({
//     updated_at: dbb.sequelize.fn('NOW'),
//     }, {
//     where: {
//         deleted_at: {
//             [Op.eq]: null
//         }
//     }
// }).then(res => {
//     console.log("\nEffected rows: "+JSON.stringify(res));
// })