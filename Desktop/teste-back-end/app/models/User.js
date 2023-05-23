const {Model, DataTypes} = require('sequelize');


class User extends Model {
    static init(sequelize) {
        super.init({
            grupo_users: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = User