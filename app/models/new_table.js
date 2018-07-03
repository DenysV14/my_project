/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('new_table', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        new_tablecol: {
            type: DataTypes.STRING(45),
            allowNull: true
        }
    }, {
        tableName: 'new_table',
        timestamps: false
    });
};
