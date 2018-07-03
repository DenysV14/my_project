const Sequelize = require('sequelize');
const fs = require("fs");
const path = require("path");
const {
    database:{
        master:{
            database,
            user,
            password
        } = {}
    } = {}
}  = require('../../config/default');



const sequelize = new Sequelize(database, user, password, {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    insecureAuth: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const basename = path.basename(__filename);
const db = {};

fs.readdirSync(__dirname).filter(file => {
    return (file !== basename) && (file.slice(-3) === ".js");
}).forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    console.log(`Init db model ${model.name}`);
    db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });