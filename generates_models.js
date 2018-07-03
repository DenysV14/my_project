const {
    database:{
        master:{
            database,
            user,
            password,
            port
        } = {}
    } = {}
}  = require('./config/default');


const SequelizeAuto = require('sequelize-auto');

const auto = new SequelizeAuto(database, user, password, {
    host: 'localhost',
    dialect: 'mysql',
    directory: './script_models',
    port,
    additional: {
        timestamps: false
    }
});

auto.run(function (err) {
    if (err) throw err;

    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
});