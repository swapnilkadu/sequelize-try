'use strict'

const Sequelize = require('sequelize');
// const env = require('./env');
const sequelize = new Sequelize("dbschema", "usr", "passwd", {
    host: "mydb.com",
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

//Models/tables
db.users = require('./models/Users.js')(sequelize, Sequelize);
db.comments = require('./models/Comments.js')(sequelize, Sequelize);
db.posts = require('./models/Posts.js')(sequelize, Sequelize);

//Relations
db.comments.belongsTo(db.posts);
db.posts.hasMany(db.comments);
db.posts.belongsTo(db.users);
db.users.hasMany(db.posts);

// Use at very frist time !!
// db.users.sync();
// db.posts.sync();
// db.comments.sync();

module.exports = db;
