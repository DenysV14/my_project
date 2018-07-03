/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('contacts', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        tel: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    }, {
        tableName: 'contacts',
        timestamps: false
    });
};
