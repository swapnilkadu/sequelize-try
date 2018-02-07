"use strict";
let dbb = require("./seqdb");
let Op = dbb.Sequelize.Op

//  Ref: http://docs.sequelizejs.com/manual/tutorial/models-usage.html
//  READ OPERATIONS
    // //Select all with Eager loading.
    // dbb.users.findAll({
    //     include: [{
    //         model: dbb.posts,
    //         include: [{
    //             model: dbb.comments
    //         }]
    //     }]
    // }).then(users => {
    //     console.log("\nResult:\n"+ JSON.stringify(users));
    // });

    // // Simple select attributes with Alias and where clause.
    dbb.users.findOne({
        attributes: ['id', ['role', 'User Role']],
        where: {
            username: 'jimmy_jonez'
        }
    }).then(users => {
        console.log("\nResult:\n"+ JSON.stringify(users));
    });

    // // Fetch parent by child prop by Level 1
    // NOTE : when use 'required: false' it uses LEFT OUTER JOIN
    //                 'required: true' it uses INNER JOIN
    // dbb.users.findAll({
    //     include: [{ 
    //         model: dbb.posts, 
    //         where: { user_id: '04a657b7-ea72-41b6-9cd3-b0a9c420ea9c' }, 
    //         attributes: ['user_id'], 
    //         required: false 
    //     }]
    // }).then(posts => {
    //     console.log("\nResult:\n"+ JSON.stringify(posts));
    // });

    // // Fetch parent by child prop by Level 2
    // dbb.users.findAll({
    //     include: [{ 
    //         model: dbb.posts,
    //         required: true,
    //         include: [{
    //             model: dbb.comments,
    //             where: {
    //                 commenter_email: {
    //                     [Op.like]: '%gmail.com'
    //                 }
    //             }
    //         }]
    //     }]
    // }).then(posts => {
    //     console.log("\nResult:\n"+ JSON.stringify(posts));
    // });

    // Aggregate functions...(max, min, sum)
    // dbb.comments.count({ where: {'commenter_email': {[Op.like]: '%gmail.com'}} }).then(c => {
    //     console.log("There are " + c + " comments came from gmail.")
    // });



    // ISSUE 
    // dbb.posts.findAll({
    //     where: {
    //         '$Postcomments.commenter_email$': { [Op.Like]: '%gmail%' }
    //     },
    //     include: [{
    //         model: dbb.comments,
    //         as: 'Postcomments'
    //     }]
    // }).then(res => {
    //     console.log(JSON.stringify(res))
    // });
