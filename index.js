"use strict";
const Sequelize = require("sequelize");

//const sequelize = new Sequelize("mysql://basicsuser:basicsuser@pneitsh51063d:3306/basics", {});
const sequelize = new Sequelize({
	database: 'basics',
	host: 'pneitsh51063d',
	username: 'basicsuser',
	password: 'basicsuser',
	dialect: 'mysql'
});

sequelize.authenticate()
	.then(() => {
		console.log('Connection has been established successfully');
	}).catch(() => {
		console.log('There is connection in ERROR');
	});

const Project = sequelize.define('project', {
	pid: { type: Sequelize.STRING, primaryKey: true },
	title: Sequelize.STRING,
	description: Sequelize.TEXT
});

const Task = sequelize.define('task', {
	title: Sequelize.STRING,
	description: Sequelize.TEXT,
	deadline: Sequelize.DATE,
	createdDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
	details: { type: Sequelize.STRING, allowNull: false },
	projectId: {
		type: Sequelize.STRING,
		references: {
		  model: Project,
		  key: "pid"
		}
		
	}
});

Project.sync()
Task.sync()

